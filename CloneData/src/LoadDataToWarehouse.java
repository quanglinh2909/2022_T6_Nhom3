import java.sql.*;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

public class LoadDataToWarehouse {
    public void saveToStaging(String date) {
        String arr[] = date.split("-");
        date = arr[2] + "-" + arr[1] + "-" + arr[0];
        try {
            Connection con = Connect.getInstance().connectDatabaseWareHouse();
            String sql = "CALL getAllStaging();";
            CallableStatement cs = con.prepareCall(sql);
            ResultSet rs = cs.executeQuery();
            String idDate = createDate(date);
            System.out.println("Start save to warehouse: " + idDate);
            while (rs.next()) {
                int idProvince = rs.getInt("idProvince");
                int area = getIDArea(rs.getString("area"));
                int prize = rs.getInt("prize");
                String result = rs.getString("result");
                String value = rs.getString("value");
                if (idProvince == -1){
                    saveLog(date,0);
                }else {
                    updateDayexpirationDate(idProvince, area, prize);
                    createDataFac(idProvince, idDate, area, result, value, prize);
                    saveLog(date,1);
                }

            }
            cs.close();
            rs.close();
            con.close();
            deleteStaging();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public void deleteStaging(){
        try {
            PreparedStatement ps = Connect.getInstance().connectDatabaseWareHouse().prepareStatement("DELETE FROM staging ");
            int affect = ps.executeUpdate();
            ps.close();
            if (affect > 0) System.out.println("Delete staging success");
            else System.out.println("Delete staging fail");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public void createDataFac(int idProvince, String idDate, int area,String result,String value, int prize){
        try {
            PreparedStatement ps = Connect.getInstance().connectDatabaseWareHouse().prepareStatement("insert into " +
                    "data_fac(idProvince,idDate,idArea,result,value,idPrize) values(?,?,?,?,?,?)");
            ps.setInt(1,idProvince);
            ps.setString(2,idDate);
            ps.setInt(3,area);
            ps.setString(4,result);
            ps.setString(5,value);
            ps.setInt(6,prize);
            ps.executeUpdate();
            ps.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public int getIDArea(String key) {
        int id = -1;
        try {
            Connection con = Connect.getInstance().connectDatabaseWareHouse();
            String sql = "CALL getAreaByKeyName(?);";
            CallableStatement cs = con.prepareCall(sql);
            cs.setString(1, key);
            ResultSet rs = cs.executeQuery();
            if (rs.next()) {
                id = rs.getInt("id");
            }
            cs.close();
            rs.close();
            con.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return id;
    }
    public void updateDayexpirationDate(int idProvince,int idArea,int idPrize){
        try {
            PreparedStatement ps = Connect.getInstance().connectDatabaseWareHouse().prepareStatement("update data_fac set dayexpiration_date = ? where idProvince = ? and idArea = ? and idPrize = ?");
            ps.setTimestamp(1,Timestamp.valueOf(LocalDateTime.now()));
            ps.setInt(2,idProvince);
            ps.setInt(3,idArea);
            ps.setInt(4,idPrize);
            ps.executeUpdate();
            ps.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public String createDate(String date) {
        LocalDate localDate = LocalDate.parse(date);
        String id = UUID.randomUUID().toString();
        try {
            Connection con = Connect.getInstance().connectDatabaseWareHouse();
            String sql = "CALL getDateByDate(?,?,?);";
            CallableStatement cs = con.prepareCall(sql);
            cs.setInt(1, localDate.getDayOfMonth());
            cs.setInt(2, localDate.getMonthValue());
            cs.setInt(3, localDate.getYear());
            ResultSet rs = cs.executeQuery();
            if (rs.next()) {
                return rs.getString("id");
            }
            cs.close();
            rs.close();
            con.close();

            PreparedStatement ps = Connect.getInstance().connectDatabaseWareHouse().prepareStatement("insert into date_dim(ID,date) values(?,?)");
            ps.setString(1, id);
            ps.setDate(2, Date.valueOf(localDate));
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return id;

    }
    public void saveLog (String date,int status){
        LocalDate localDate = LocalDate.parse(date);
        try {
            PreparedStatement ps = Connect.getInstance().connectDatabaseWareHouse().prepareStatement("insert into log_staging(day,createAt,Status,Contact) values(?,?,?,?)");
            ps.setDate(1,Date.valueOf(localDate));
            ps.setTimestamp(2,Timestamp.valueOf(LocalDateTime.now()));
            ps.setInt(3,status);
            ps.setString(4, Connect.getInstance().getValueByName("concat", 1));
            ps.executeUpdate();
            ps.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

}
