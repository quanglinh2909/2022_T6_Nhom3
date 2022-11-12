import java.io.File;
import java.io.FileNotFoundException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class Connect {
    public static Connect instance = null;

    private Connect() {
    }

    public static Connect getInstance() {
        if (instance == null) {
            instance = new Connect();
        }
        return instance;
    }

    public String getConfig(String myString) {
        try {
            File myObj = new File("config.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                String[] array = data.split("=");
                if (array.length == 2 && array[0].trim().equals(myString)) {
                    myReader.close();
                    return array[1].trim();
                }
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }

    public Connection connectDatabaseConfig() {
        try {
            Class.forName(getConfig("FOR_NAME"));
            String url = getConfig("URL");
            return DriverManager.getConnection(url, getConfig("USER_NAME"), getConfig("PASSWORD"));
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public Connection connectDatabaseWareHouse() {
        List<ValueConfig> list = getValueConfigByIdDatabase(1);
        try {
            Class.forName(getValueByName("for_name",1).trim());
            String url = getValueByName("string_connection",1).trim();
            return DriverManager.getConnection(url, getValueByName("user_name",1).trim(), getValueByName("password",1));
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<ValueConfig> getValueConfigByIdDatabase(int id) {
        try {
            List<ValueConfig> list = new ArrayList<>();
            Connection con = connectDatabaseConfig();
            String sql = "CALL getValueConfigByIdDatabase(?);";
            CallableStatement cs = null;

            cs = con.prepareCall(sql);

            cs.setInt(1, id);
            ResultSet rs = cs.executeQuery();
            while (rs.next()) {
                ValueConfig valueConfig = new ValueConfig(rs.getInt("id"), rs.getString("name"), rs.getString("value"));
                list.add(valueConfig);

            }
            cs.close();
            rs.close();
            con.close();
            return list;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }
    public String getValueByName(String name, int idDatabase) {
        List<ValueConfig> list = getValueConfigByIdDatabase(idDatabase);
        for (ValueConfig valueConfig : list) {
            if (valueConfig.getName().equals(name)) {
                return valueConfig.getValue();
            }
        }
        return null;
    }

    public String getValueByName(String name,  List<ValueConfig> list) {
        for (ValueConfig valueConfig : list) {
            if (valueConfig.getName().equals(name)) {
                return valueConfig.getValue();
            }
        }
        return "";
    }




}
