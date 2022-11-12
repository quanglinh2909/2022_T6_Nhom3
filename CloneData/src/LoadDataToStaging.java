import java.sql.*;
import java.time.LocalDateTime;

public class LoadDataToStaging {

    public boolean saveToStagingHelper(String csvFile) throws SQLException {

        PreparedStatement ps = Connect.getInstance().connectDatabaseWareHouse().prepareStatement("LOAD DATA INFILE ? " + "INTO TABLE staging "
                + "FIELDS TERMINATED BY ',' " + "ENCLOSED BY \'\"\' " + "IGNORE 1 ROWS;");
        ps.setString(1, Connect.getInstance().getValueByName("PATH_SAVE_CSV", 1) + "/" + csvFile);
        int affect = ps.executeUpdate();
        ps.close();
        if (affect > 0) return true;
        else return false;
    }

    public void saveToStaging(String date) {
        try {
            Connection con = Connect.getInstance().connectDatabaseWareHouse();
            String sql = "CALL getLogByDate(?);";
            CallableStatement cs = con.prepareCall(sql);
            ScrappingKQXS sm = new ScrappingKQXS();
            cs.setString(1, date);
            ResultSet rs = cs.executeQuery();
            while (rs.next()) {
                String csvFile = rs.getString("File_Name");
                LocalDateTime now = LocalDateTime.now();
                Timestamp time = Timestamp.valueOf(now);
                System.out.println("Start save to staging: " + csvFile);
                if( sm.checkLog(csvFile, "LOAD_TO_STAGING")) continue;
                System.out.println("Start save to staging 2: " + csvFile);
                if (saveToStagingHelper(csvFile)) {
                    sm.saveLog(time, "LOAD_TO_STAGING", csvFile, 1);
                } else {
                    sm.saveLog(time, "LOAD_TO_STAGING", csvFile, 0);
                }

            }
            cs.close();
            rs.close();
            con.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public static void main(String[] args) {
        LoadDataToStaging ld = new LoadDataToStaging();
        ld.saveToStaging("01-01-2022");

    }
}
