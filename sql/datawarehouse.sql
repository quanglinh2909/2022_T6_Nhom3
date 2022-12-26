/*
 Navicat Premium Data Transfer

 Source Server         : conect
 Source Server Type    : MySQL
 Source Server Version : 100427 (10.4.27-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : datawarehouse

 Target Server Type    : MySQL
 Target Server Version : 100427 (10.4.27-MariaDB)
 File Encoding         : 65001

 Date: 25/12/2022 21:11:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for area_dim
-- ----------------------------
DROP TABLE IF EXISTS `area_dim`;
CREATE TABLE `area_dim`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `Key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `dayexpiration_date` datetime NOT NULL,
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for data_fac
-- ----------------------------
DROP TABLE IF EXISTS `data_fac`;
CREATE TABLE `data_fac`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `result` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dayexpiration_date` datetime NOT NULL DEFAULT '9999-12-31 00:00:00',
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `idDate` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `idArea` int NULL DEFAULT NULL,
  `idProvince` int NULL DEFAULT NULL,
  `idPrize` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_f4e5fe29a11081ff2c52b0bff4f`(`idDate` ASC) USING BTREE,
  INDEX `FK_a77d7c02f4ad1ab1ee312aa6ba7`(`idArea` ASC) USING BTREE,
  INDEX `FK_3abfbcdca4eb22b0546eb12d05d`(`idProvince` ASC) USING BTREE,
  INDEX `FK_3aaf7abe600c9644514d301a4b3`(`idPrize` ASC) USING BTREE,
  CONSTRAINT `FK_3aaf7abe600c9644514d301a4b3` FOREIGN KEY (`idPrize`) REFERENCES `prize_dim` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_3abfbcdca4eb22b0546eb12d05d` FOREIGN KEY (`idProvince`) REFERENCES `province_dim` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_a77d7c02f4ad1ab1ee312aa6ba7` FOREIGN KEY (`idArea`) REFERENCES `area_dim` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_f4e5fe29a11081ff2c52b0bff4f` FOREIGN KEY (`idDate`) REFERENCES `date_dim` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 424 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for date_dim
-- ----------------------------
DROP TABLE IF EXISTS `date_dim`;
CREATE TABLE `date_dim`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for log_file
-- ----------------------------
DROP TABLE IF EXISTS `log_file`;
CREATE TABLE `log_file`  (
  `ID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `action` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `File_Name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Time` datetime NOT NULL,
  `Status` int NOT NULL,
  `Contact` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for log_staging
-- ----------------------------
DROP TABLE IF EXISTS `log_staging`;
CREATE TABLE `log_staging`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` int NULL DEFAULT NULL,
  `day` datetime NULL DEFAULT NULL,
  `createAt` datetime NULL DEFAULT NULL,
  `Contact` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1695 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for prize_dim
-- ----------------------------
DROP TABLE IF EXISTS `prize_dim`;
CREATE TABLE `prize_dim`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `stt` int NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `dayexpiration_date` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for province_dim
-- ----------------------------
DROP TABLE IF EXISTS `province_dim`;
CREATE TABLE `province_dim`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `dayexpiration_date` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 64 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for staging
-- ----------------------------
DROP TABLE IF EXISTS `staging`;
CREATE TABLE `staging`  (
  `idProvince` int NULL DEFAULT NULL,
  `province` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `area` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `day` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `prize` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `result` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Procedure structure for getAll
-- ----------------------------
DROP PROCEDURE IF EXISTS `getAll`;
delimiter ;;
CREATE PROCEDURE `getAll`()
BEGIN
	SELECT* FROM prize_dim ORDER BY stt;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for getAllStaging
-- ----------------------------
DROP PROCEDURE IF EXISTS `getAllStaging`;
delimiter ;;
CREATE PROCEDURE `getAllStaging`()
BEGIN
	SELECT* FROM staging;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for getAreaByKeyName
-- ----------------------------
DROP PROCEDURE IF EXISTS `getAreaByKeyName`;
delimiter ;;
CREATE PROCEDURE `getAreaByKeyName`(IN keyName VARCHAR(255))
BEGIN
	SELECT* FROM area_dim WHERE area_dim.`Key` = keyName;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for getDateByDate
-- ----------------------------
DROP PROCEDURE IF EXISTS `getDateByDate`;
delimiter ;;
CREATE PROCEDURE `getDateByDate`(IN dayDate INT,IN MontDate INT,IN YearDate INT)
BEGIN
	SELECT* FROM date_dim WHERE DAY(date_dim.date) = dayDate and  MONTH(date_dim.date) = MontDate  and  YEAR(date_dim.date) = YearDate;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for getLogByDate
-- ----------------------------
DROP PROCEDURE IF EXISTS `getLogByDate`;
delimiter ;;
CREATE PROCEDURE `getLogByDate`(IN date VARCHAR(255))
BEGIN
		SELECT* FROM log_file WHERE File_Name LIKE CONCAT('%',date,'.csv') and `Status` = 1;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for getProvinceByName
-- ----------------------------
DROP PROCEDURE IF EXISTS `getProvinceByName`;
delimiter ;;
CREATE PROCEDURE `getProvinceByName`(IN nameProvince VARCHAR(255))
BEGIN
		SELECT* FROM province_dim WHERE `name`= nameProvince;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for selectByFileName
-- ----------------------------
DROP PROCEDURE IF EXISTS `selectByFileName`;
delimiter ;;
CREATE PROCEDURE `selectByFileName`(IN fileName VARCHAR(255),IN action VARCHAR(255))
BEGIN
	SELECT* FROM log_file WHERE log_file.File_Name = fileName and log_file.`Status` = 1 and log_file.action = action;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
