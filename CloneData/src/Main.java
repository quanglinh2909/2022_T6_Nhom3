import com.opencsv.exceptions.CsvException;

import java.io.IOException;
import java.sql.Array;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException, ClassNotFoundException, SQLException, CsvException, ParseException {
        ScrappingKQXS sm = new ScrappingKQXS();
        sm.getDataMultiDay("2022-12-23","2022-12-25");
//        sm.getOneData("28-11-2022");

    }
}
