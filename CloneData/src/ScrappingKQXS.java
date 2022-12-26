// Sử dụng thread để chạy song song nhiều tiến trình
// hình chữ nhật đại diện cho công việc và ký hiệu hình thoi đại diện cho cấu trúc rẽ nhánh
// dựa trên file log để thực hiện thêm dòng dữ liệu mới vào datawarehouse

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.*;
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

public class ScrappingKQXS {
    final String[] field = {"ID","Tỉnh", "Khu vực", "Ngày", "Giải", "Kết quả sổ", "Giá trị vé"};

    public ScrappingKQXS() {
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
            System.out.println(path);
            String filePath = path + "/" + khuVuc + "_" + date + ".csv";
            File file = new File(filePath);
            if (!file.getParentFile().exists()) file.getParentFile().mkdirs();
            CSVWriter csv = new CSVWriter(new FileWriter(file));
            csv.writeNext(field);
            csv.writeAll(listKQXS);
            csv.flush();
            csv.close();

        } catch (IOException e) {
            // TODO Auto-generated catch block
            System.out.println("Không tìm thấy file");
        }
        long end = System.currentTimeMillis();
        System.out.println("WriteCSV took " + (end - start) / 1000 + "s");
    }

    public boolean checkLog(String fileName,String action) {
        try {
                Connection con = Connect.getInstance().connectDatabaseWareHouse();
                String sql = "CALL selectByFileName(?,?);";
                CallableStatement cs = con.prepareCall(sql);

                cs.setString(1, fileName);
                cs.setString(2, action);
                ResultSet rs = cs.executeQuery();
                if (rs.next()) {
                    return true;
                }
                cs.close();
                rs.close();
                con.close();
                return false;
            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        }

        public boolean saveLog (Timestamp time,String action, String fileName,int status){

            if (checkLog(fileName,action)) return false;
            try {
                PreparedStatement ps = Connect.getInstance().connectDatabaseWareHouse().prepareStatement("insert into log_file(ID,action, File_Name,Time,Status,Contact) values(?,?,?,?,?,?)");
                ps.setString(1, UUID.randomUUID().toString());
                ps.setString(2, action);
                ps.setString(3, fileName);
                ps.setTimestamp(4, time);
                ps.setInt(5, status);
                ps.setString(6, Connect.getInstance().getValueByName("concat", 1));
                ps.executeUpdate();
                ps.close();
                return true;

            } catch (SQLException e) {
                e.printStackTrace();
            }
            return false;

        }

        public void scrappingMienBac (String url, String date) throws IOException {
            long start = System.currentTimeMillis();
            Document doc = null;
            try {
                LocalDateTime now = LocalDateTime.now();
                Timestamp time = Timestamp.valueOf(now);
                List<String[]> result = new ArrayList<>();
                doc = Jsoup.connect(url + date + ".html").userAgent("Jsoup client").timeout(20000).get();
                String syntax = "#noidung .box_kqxs .content>table>tbody";
                Elements list = doc.select(syntax);
                String khuVuc = "MB";
                if (list.size() == 0) {

                    saveLog(time,"CLONE_DATA", khuVuc + "_" + date + ".csv", 0);
                    return;
                }
                if (!saveLog(time, "CLONE_DATA",khuVuc + "_" + date + ".csv", 1)) return;
                // thong tin chung
                String titleTable = doc.select("#noidung .box_kqxs>.top>.bkl>.bkr>.bkm>.title").html();
                String tinh = getProvince(titleTable);

//                String thu = doc.select("#noidung .box_kqxs>.content>table>tbody>tr:eq(0)>td:eq(0)").html();
//                String ngay = doc.select("#noidung .box_kqxs>.content>table>tbody>tr:eq(0)>td:eq(1)>a").html();
                String[] dsGiai = getListGiai(8);
                String[] giaTris = {"40,000", "100,000", "200,000", "400,000", "1,000,000", "5,000,000", "10,000,000", "1,000,000,000"};
                for (Element e : list) {
                    for (int i = 1; i <= 8; i++) {
                        String giai = dsGiai[(dsGiai.length - i)];
                        String giaTri = giaTris[(giaTris.length - i)];
                        Elements bangKetQua = e.select("tr:" + "eq(" + i + ")>td:eq(1)>div");
                        for (Element ketQua : bangKetQua) {
                            String ketQuaSo = ketQua.html();
                            if (ketQuaSo.isEmpty()) continue;

                            String[] kqxs = {getIdProvince(tinh)+"",tinh, khuVuc, date, giai, ketQuaSo, giaTri};
                            result.add(kqxs);
                        }
                    }
                }
                System.out.println("vao");
                writeCSV(result, date, Connect.getInstance().getValueByName("PATH_SAVE_CSV", 1), khuVuc);

            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            long end = System.currentTimeMillis();

        }

        public String getProvince (String titleTable){
            String[] tokens = titleTable.split("-");
            String title = tokens[2].trim();
            String[] strings = title.split(" ");
            String tinh = strings[2] + " " + strings[3];
            return tinh;
        }
        public String[]  getListGiai(int length){
            String[] dsGiai = new String[length];
        try {
            Connection con = Connect.getInstance().connectDatabaseWareHouse();
            String sql = "CALL getAll();";
            CallableStatement cs = con.prepareCall(sql);
            ResultSet rs = cs.executeQuery();
            int i = 0;
            while (rs.next()) {
                String giai = rs.getString("id");
                dsGiai[i] = giai;
                i++;
                if (i == length) break;
            }
            cs.close();
            rs.close();
            con.close();
            //reverse array
            for (int j = 0; j < dsGiai.length / 2; j++) {
                String temp = dsGiai[j];
                dsGiai[j] = dsGiai[dsGiai.length - j - 1];
                dsGiai[dsGiai.length - j - 1] = temp;
            }

            return dsGiai;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }



        public void scrapping (String url, String date, String khuVuc){
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
                    saveLog(time, "CLONE_DATA",khuVuc + "_" + date + ".csv", 0);
                    return;
                }
                // thong tin chung
                if (!saveLog(time, "CLONE_DATA",khuVuc + "_" + date + ".csv", 1)) return;
//                String thu = doc.select("#noidung .box_kqxs:eq(1) .content table tbody tr td .leftcl .thu a").html();
                String[] dsGiai = getListGiai(9);
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

                            String[] kqxs = {getIdProvince(tinh)+"",tinh, khuVuc, date, giai, ketQuaSo, giaTri};
                            result.add(kqxs);
                        }
                    }
                }
                writeCSV(result, date, Connect.getInstance().getValueByName("PATH_SAVE_CSV", 1), khuVuc);

            } catch (IOException e) {
                e.printStackTrace();
            }
            long end = System.currentTimeMillis();
            System.out.println("Scrapping took " + (end - start) / 1000 + "s");
        }

        public List<String> getListDate (String startDate, String endDate){
            List<String> result = new ArrayList<>();
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

        public void getOneData (String date) throws IOException {
            scrapping("https://www.minhngoc.net.vn/doi-so-trung/mien-nam/", date, "MN");
            scrappingMienBac("https://www.minhngoc.net.vn/doi-so-trung/mien-bac/", date);
            scrapping("https://www.minhngoc.net.vn/doi-so-trung/mien-trung/", date, "MT");
            LoadDataToStaging load = new LoadDataToStaging();
            load.saveToStaging(date);
            LoadDataToWarehouse loadWarehouse = new LoadDataToWarehouse();
            loadWarehouse.saveToStaging(date);


        }

        public void getDataMultiDay (String dataIn, String dateOut){
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
        public int getIdProvince(String province){
            int id = -1;
            try {
                Connection con = Connect.getInstance().connectDatabaseWareHouse();
                String sql = "CALL getProvinceByName(?);";
                CallableStatement cs = con.prepareCall(sql);
                cs.setString(1,province);
                ResultSet rs = cs.executeQuery();
                while (rs.next()){
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

    }
