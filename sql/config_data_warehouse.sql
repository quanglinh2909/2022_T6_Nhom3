/*
 Navicat Premium Data Transfer

 Source Server         : conect
 Source Server Type    : MySQL
 Source Server Version : 100427 (10.4.27-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : config_data_warehouse

 Target Server Type    : MySQL
 Target Server Version : 100427 (10.4.27-MariaDB)
 File Encoding         : 65001

 Date: 25/12/2022 21:03:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for database
-- ----------------------------
DROP TABLE IF EXISTS `database`;
CREATE TABLE `database`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameDatabase` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `keyDatabase` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of database
-- ----------------------------
INSERT INTO `database` VALUES (1, 'warehouse', 'warehouse');

-- ----------------------------
-- Table structure for value_config
-- ----------------------------
DROP TABLE IF EXISTS `value_config`;
CREATE TABLE `value_config`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `idDatabase` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idDatabase`(`idDatabase` ASC) USING BTREE,
  CONSTRAINT `value_config_ibfk_1` FOREIGN KEY (`idDatabase`) REFERENCES `database` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of value_config
-- ----------------------------
INSERT INTO `value_config` VALUES (12, 'for_name', 'com.mysql.cj.jdbc.Driver', 1);
INSERT INTO `value_config` VALUES (13, 'string_connection', 'jdbc:mysql://localhost:3306/datawarehouse', 1);
INSERT INTO `value_config` VALUES (14, 'user_name', 'root', 1);
INSERT INTO `value_config` VALUES (15, 'password', NULL, 1);
INSERT INTO `value_config` VALUES (16, 'concat', 'Quang Linh', 1);
INSERT INTO `value_config` VALUES (17, 'PATH_SAVE_CSV', 'D:/Wawhouse/2022_T6_Nhom3/data', 1);

-- ----------------------------
-- Procedure structure for getValueConfigByIdDatabase
-- ----------------------------
DROP PROCEDURE IF EXISTS `getValueConfigByIdDatabase`;
delimiter ;;
CREATE PROCEDURE `getValueConfigByIdDatabase`(IN idDatabase INT)
BEGIN
	SELECT* FROM value_config WHERE value_config.idDatabase = idDatabase;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
