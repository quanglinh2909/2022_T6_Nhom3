// Sử dụng thread để chạy song song nhiều tiến trình
// hình chữ nhật đại diện cho công việc và ký hiệu hình thoi đại diện cho cấu trúc rẽ nhánh
// dựa trên file log để thực hiện thêm dòng dữ liệu mới vào datawarehouse

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.opencsv.CSVWriter;
import com.opencsv.exceptions.CsvException;

public class ScrappingKQXS {
    Connection con;
    final String[] field = {"Tỉnh", "Khu vực", "Thứ", "Ngày", "Giải", "Kết quả sổ", "Giá trị vé"};

    public ScrappingKQXS() {
//        try {
//            Class.forName(Connect.getConfig("FOR_NAME"));
//            String url = Connect.getConfig("URL");
//            con = DriverManager.getConnection(url, Connect.getConfig("USER_NAME"), Connect.getConfig("PASSWORD"));
//        } catch (ClassNotFoundException | SQLException e) {
//            e.printStackTrace();
//        }
    }

    public void writeCSV(List<String[]> listKQXS, String date, String path, String khuVuc) {
        long start = System.currentTimeMillis();
        try {
            Date parsed;
            java.sql.Date sql;
            SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
            try {
                parsed = format.parse(date);
                sql = new java.sql.Date(parsed.getTime());
            } catch (ParseException e) {
                // TODO Auto-generated catch block
                sql = new java.sql.Date(0000, 00, 00);

            }
            int idDate = getIdDate(sql);
            String filePath = path + khuVuc + "_" + date + ".csv";
            File file = new File(filePath);
            if (!file.getParentFile().exists()) file.getParentFile().mkdirs();
            CSVWriter csv = new CSVWriter(new FileWriter(file));
            csv.writeNext(field);
            csv.writeAll(listKQXS);
            csv.flush();
            saveToStaging(filePath, idDate);
            csv.close();

        } catch (IOException e) {
            // TODO Auto-generated catch block
            System.out.println("Không tìm thấy file");
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (CsvException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        long end = System.currentTimeMillis();
        System.out.println("WriteCSV took " + (end - start) / 1000 + "s");
    }

    public void saveToDatabaseHelper(int tinh, String khuVuc, String thu, int ngay, String giai, String ketQuaSo, int giaTri) {
        try {
            PreparedStatement ps = con.prepareStatement("insert into data(id,Tinh,Khu_vuc,Thu,Ngay,Giai,Ket_qua_so,Gia_tri,isDelete) values(?,?,?,?,?,?,?,?,?)");
            ps.setString(1, UUID.randomUUID().toString());
            ps.setInt(2, tinh);
            ps.setString(3, khuVuc);
            ps.setString(4, thu);
            ps.setInt(5, ngay);
            ps.setString(6, giai);
            ps.setString(7, ketQuaSo);
            ps.setInt(8, giaTri);
            ps.setInt(9, 0);
            int affect = ps.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public boolean checkLog(String fileName) {
        try {
            PreparedStatement ps = con.prepareStatement("select * from log where  log.File_Name=?");
            ps.setString(1, fileName);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                return false;
            }

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return true;
    }

    public void saveLog(Timestamp time, String fileName, int status) {

        try {
            if (!checkLog(fileName)) return;
            PreparedStatement ps = con.prepareStatement("insert into log(ID, File_Name,Time,Status,Contact) values(?,?,?,?,?,?)");
            ps.setString(1, UUID.randomUUID().toString());
            ps.setString(3, fileName);
            ps.setTimestamp(4, time);
            ps.setInt(5, status);
            ps.setString(6, "CONTACT");
            ps.executeUpdate();
            ps.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public int getIdTinh(String tinh) {
        try {
            PreparedStatement ps = con.prepareStatement("select * from tinh_thanh");
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {

                if (rs.getString(2).compareTo(tinh) == 0) {
                    return rs.getInt(1);
                }
            }
            ps.close();


        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return -1;

    }

    public void saveToDatabase(String pathFile, int idDate) throws ClassNotFoundException, SQLException, IOException, CsvException {
        long start = System.currentTimeMillis();
        if (!checkLog(pathFile)) return;
        PreparedStatement psStaging = con.prepareStatement("select * from ket_qua_xo_so");
        ResultSet rs = psStaging.executeQuery();
        while (rs.next()) {
            int tinh = getIdTinh(rs.getString(1));
            if (tinh == -1) {
                System.out.println("Khong tim thay id cua tinh " + rs.getString(1));
                continue;
            }
            String khuVuc = rs.getString(2);
            String thu = rs.getString(3);

            String giai = rs.getString(5);
            String ketQuaSo = rs.getString(6);
            int giaTri = 0;
            try {
                String giaTriString = rs.getString(7).replace(",", "");
                giaTri = Integer.parseInt(giaTriString);
            } catch (NumberFormatException e) {
                // TODO: handle exception
            }
            saveToDatabaseHelper(tinh, khuVuc, thu, idDate, giai, ketQuaSo, giaTri);
        }
        psStaging.close();
        truncateStaging();
        long end = System.currentTimeMillis();
        System.out.println("Save to Database took " + (end - start) / 1000 + "s");

    }

    public void truncateStaging() throws SQLException {
        PreparedStatement ps = con.prepareStatement("truncate table ket_qua_xo_so");
        ps.executeUpdate();
        ps.close();

    }

    public int getIdDate(java.sql.Date date) {
        int id = -1;
        try {
            PreparedStatement ps = con.prepareStatement("select id from date_dim WHERE date=?");
            ps.setDate(1, date);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) id = rs.getInt(1);

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return id;
    }

    public void saveToStaging(String csvFile, int date) throws ClassNotFoundException, SQLException, IOException, CsvException {
        long start = System.currentTimeMillis();
        PreparedStatement ps = con.prepareStatement("LOAD DATA INFILE ? " +
                "INTO TABLE ket_qua_xo_so " +
                "FIELDS TERMINATED BY ',' " +
                "ENCLOSED BY \'\"\' " +
                "IGNORE 1 ROWS;");
        ps.setString(1, csvFile);
        ps.executeUpdate();
        ps.close();
        long end = System.currentTimeMillis();
        System.out.println("Load file to staging took " + (end - start) + "ms");
        saveToDatabase(csvFile, date);

    }

    public void scrappingMienBac(String url, String date) throws IOException {
        long start = System.currentTimeMillis();
        Document doc = null;
        try {
            LocalDateTime now = LocalDateTime.now();
            Timestamp time = Timestamp.valueOf(now);
            List<String[]> result = new ArrayList<String[]>();
            doc = Jsoup.connect(url + date + ".html").userAgent("Jsoup client").timeout(20000).get();
            String syntax = "#noidung .box_kqxs .content>table>tbody";
            Elements list = doc.select(syntax);
            String khuVuc = "MB";
            if (list.size() == 0) {
                saveLog(time, khuVuc + "_" + date + ".csv", 0);
                return;
            }
            saveLog(time, khuVuc + "_" + date + ".csv", 1);
            // thong tin chung
            String titleTable = doc.select("#noidung .box_kqxs>.top>.bkl>.bkr>.bkm>.title").html();
            String tinh = layTinh(titleTable);

            String thu = doc.select("#noidung .box_kqxs>.content>table>tbody>tr:eq(0)>td:eq(0)").html();
            String ngay = doc.select("#noidung .box_kqxs>.content>table>tbody>tr:eq(0)>td:eq(1)>a").html();
            String[] dsGiai = {"Giải bảy", "Giải sáu", "Giải năm", "Giải tư", "Giải ba",
                    "Giải nhì", "Giải nhất", "Giải Đặc Biệt"};
            String[] giaTris = {"40,000", "100,000", "200,000", "400,000", "1,000,000", "5,000,000", "10,000,000", "1,000,000,000"};
            for (Element e : list) {
                for (int i = 1; i <= 8; i++) {
                    String giai = dsGiai[(dsGiai.length - i)];
                    String giaTri = giaTris[(giaTris.length - i)];
                    Elements bangKetQua = e.select("tr:" + "eq(" + i + ")>td:eq(1)>div");
                    for (Element ketQua : bangKetQua) {
                        String ketQuaSo = ketQua.html();
                        if (ketQuaSo.isEmpty()) continue;

                        String[] kqxs = {tinh, khuVuc, thu, date, giai, ketQuaSo, giaTri};
                        result.add(kqxs);
                    }
                }
            }
            writeCSV(result, date, "Configuration.PATH", khuVuc);

        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        long end = System.currentTimeMillis();

    }

    public String layTinh(String titleTable) {
        String[] tokens = titleTable.split("-");
        String title = tokens[2].trim();
        String[] strings = title.split(" ");
        String tinh = strings[2] + " " + strings[3];
        return tinh;
    }

    public void scrapping(String url, String date, String khuVuc) {
        long start = System.currentTimeMillis();
        Document doc = null;
        try {
            LocalDateTime now = LocalDateTime.now();
            Timestamp time = Timestamp.valueOf(now);
            List<String[]> result = new ArrayList<>();
            doc = Jsoup.connect(url + date + ".html").userAgent("Jsoup client").timeout(20000).get();
            String syntax = "#noidung .box_kqxs:eq(1) .content>table>tbody>tr>td:eq(1)>table>tbody>tr>td";
            Elements list = doc.select(syntax);
            if (list.size() == 0) {
                saveLog(time, khuVuc + "_" + date + ".csv", 0);
                return;
            }
            // thong tin chung
            saveLog(time, khuVuc + "_" + date + ".csv", 1);
            String thu = doc.select("#noidung .box_kqxs:eq(1) .content table tbody tr td .leftcl .thu a").html();
            String[] dsGiai = {"Giải tám", "Giải bảy", "Giải sáu", "Giải năm", "Giải tư", "Giải ba",
                    "Giải nhì", "Giải nhất", "Giải Đặc Biệt"};
            int pivot = list.size() - 1;
            if (list.get(list.size() - 2).select("table tbody tr:eq(0)>.tinh>a").size() == 0) {
                pivot = pivot - 1;
            }
            list = doc.select(syntax + ":lt(" + pivot + ")");
            Elements dsGiaTriGiai = doc.select("#noidung .box_kqxs:eq(1) .content>table>tbody>tr>td:eq(1)>table>tbody>tr>td:eq(" + pivot + ")");

            for (Element e : list) {
                String tinh = e.select("table tbody tr:eq(0)>.tinh a").html();
                for (int i = 2; i <= 10; i++) {
                    String giai = dsGiai[i - 2];
                    String giaTri = dsGiaTriGiai.select("tr:eq(" + i + ")>td").html();
                    Elements bangKetQua = e.select("table tbody tr:" + "eq(" + i + ")>td>div");
                    for (Element ketQua : bangKetQua) {
                        String ketQuaSo = ketQua.html();
                        if (ketQuaSo.isEmpty()) continue;

                        String[] kqxs = {tinh, khuVuc, thu, date, giai, ketQuaSo, giaTri};
                        result.add(kqxs);
                    }
                }
            }
            writeCSV(result, date, "Configuration.PATH", khuVuc);

        } catch (IOException e) {
            e.printStackTrace();
        }
        long end = System.currentTimeMillis();
        System.out.println("Scrapping took " + (end - start) / 1000 + "s");
    }


    public List<String> getListDate(String startDate, String endDate) {
//	String s = "2022-01-01";
//	String e = "2022-03-11";
        List<String> result = new ArrayList<String>();
        LocalDate start = LocalDate.parse(startDate);
        LocalDate end = LocalDate.parse(endDate);
        List<LocalDate> totalDates = new ArrayList<>();
        while (!start.isAfter(end)) {
            totalDates.add(start);
            start = start.plusDays(1);
        }
        SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
        for (LocalDate d : totalDates) {
            Date date = java.sql.Date.valueOf(d);
            result.add(format.format(date));
        }
        return result;
    }

    public void getOneData(String date) throws IOException {
        // Lấy danh sách dữ liệu kết quả xổ số miền nam
        scrapping("https://www.minhngoc.net.vn/doi-so-trung/mien-nam/", date, "MN");
        // Do khác định dạng nên định nghĩa phương thức hơi khác với miền trung và miền nam
        // Lấy danh sách dữ liệu kết quả xổ số miền bắc
        scrappingMienBac("https://www.minhngoc.net.vn/doi-so-trung/mien-bac/", date);
        // Lấy danh sách dữ liệu kết quả xổ số miền trung
        scrapping("https://www.minhngoc.net.vn/doi-so-trung/mien-trung/", date, "MT");


    }

    public void getDataMultiDay(String dataIn, String dateOut) {
        long start = System.currentTimeMillis();
        List<String> dates = getListDate(dataIn, dateOut);
        for (String date : dates) {
            try {
                System.out.println(date);
                getOneData(date);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        long end = System.currentTimeMillis();
        System.out.println("That took " + (end - start) / 1000 + "s");
    }

}
