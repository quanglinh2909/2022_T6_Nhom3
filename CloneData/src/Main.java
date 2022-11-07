import com.opencsv.exceptions.CsvException;

import java.io.IOException;
import java.sql.SQLException;
import java.text.ParseException;

public class Main {
    public static void main(String[] args) throws IOException, ClassNotFoundException, SQLException, CsvException, ParseException {
        ScrappingKQXS sm = new ScrappingKQXS();
        sm.getDataMultiDay("2022-01-01","2022-01-01");

    }
}
