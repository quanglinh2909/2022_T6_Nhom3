/*
 Navicat Premium Data Transfer

 Source Server         : datawarehouse
 Source Server Type    : MySQL
 Source Server Version : 100425
 Source Host           : localhost:3306
 Source Schema         : config_data_warehouse

 Target Server Type    : MySQL
 Target Server Version : 100425
 File Encoding         : 65001

 Date: 12/11/2022 16:36:16
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
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
