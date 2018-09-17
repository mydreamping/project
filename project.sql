/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-17 23:06:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `ind` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `off` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '越南进口白心火龙果 2个装（700-800g）', '果肉绵软白嫩，汁液丰富', 'images\\index\\fruits\\fruits_1.jpg', '12.80', '30.00');
INSERT INTO `goodslist` VALUES ('2', '菲律宾进口香蕉（0.9-1kg）', '香味浓郁 果味软糯香甜', 'images\\index\\fruits\\fruits_2.jpg', '16.80', '29.90');
INSERT INTO `goodslist` VALUES ('3', '百香果20个装（1.1kg以上）', '风味浓郁，芳香怡人', 'images\\index\\fruits\\fruits_3.jpg', '32.90', '58.00');
INSERT INTO `goodslist` VALUES ('4', '进口牛油果10个装（1.4kg以上）', '森林奶油 粮食水果', 'images\\index\\fruits\\fruits_4.jpg', '79.00', '128.00');
INSERT INTO `goodslist` VALUES ('5', '南非进口血橙 8个装（1.6kg以上）', '南非进口血橙 8个装（1.6kg以上）', 'images\\index\\fruits\\fruits_5.jpg', '59.00', '89.90');
INSERT INTO `goodslist` VALUES ('6', '进口牛油果6个装（900g以上）', '森林奶油 粮食水果', 'images\\index\\fruits\\fruits_4.jpg', '59.00', '88.00');
INSERT INTO `goodslist` VALUES ('7', '泰国冷冻烤榴莲肉100g/盒', '柔软的绵密感，浓郁的果香，满满都是阳光的味道', 'images\\index\\fruits\\fruits_6.jpg', '19.80', '38.00');
INSERT INTO `goodslist` VALUES ('8', '泰菓椰子冻4个装', '入口香甜可口，让人回味无穷', 'images\\index\\fruits\\fruits_7.jpg', '109.00', '168.00');
INSERT INTO `goodslist` VALUES ('9', '新疆西州蜜瓜17号4个（9kg以上）', '新疆西州蜜瓜17号4个（9kg以上）', 'images\\index\\fruits\\fruits_8.jpg', '99.00', '108.00');
INSERT INTO `goodslist` VALUES ('10', '泰国进口龙眼 1kg以上', '汁多清甜  晶莹剔透', 'images\\index\\fruits\\fruits_9.jpg', '22.90', '38.00');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `login_key` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '15218452891', '123456', null, null);
INSERT INTO `users` VALUES ('2', '18218661437', '123456', null, null);
INSERT INTO `users` VALUES ('3', '123456', 'e10adc3949ba59abbe56e057f20f883e', '1', null);
