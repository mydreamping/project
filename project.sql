/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-21 16:24:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `qty` int(255) DEFAULT NULL,
  `exist` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------

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
  `time` datetime DEFAULT NULL,
  `sale_number` int(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `s_pic` varchar(255) DEFAULT NULL,
  `qty` int(255) DEFAULT NULL,
  `hot` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '越南进口白心火龙果 2个装（700-800g）', '果肉绵软白嫩，汁液丰富', 'images\\index\\fruits\\fruits_1.jpg', '12.80', '30.00', '2018-09-01 16:23:07', '24', '10', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('2', '菲律宾进口香蕉（0.9-1kg）', '香味浓郁 果味软糯香甜', 'images\\index\\fruits\\fruits_2.jpg', '16.80', '29.90', '2018-09-14 16:23:37', '23', '23', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, 'true');
INSERT INTO `goodslist` VALUES ('3', '百香果20个装（1.1kg以上）', '风味浓郁，芳香怡人', 'images\\index\\fruits\\fruits_3.jpg', '32.90', '58.00', '2018-09-03 16:23:36', '55', '4', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('4', '进口牛油果10个装（1.4kg以上）', '森林奶油 粮食水果', 'images\\index\\fruits\\fruits_4.jpg', '79.00', '128.00', '2018-09-04 16:23:41', '111', '2', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, 'true');
INSERT INTO `goodslist` VALUES ('5', '南非进口血橙 8个装（1.6kg以上）', '南非进口血橙 ', 'images\\index\\fruits\\fruits_5.jpg', '59.00', '89.90', '2018-09-08 16:23:43', '564', '355', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('6', '进口牛油果6个装（900g以上）', '森林奶油 粮食水果', 'images\\index\\fruits\\fruits_4.jpg', '59.00', '88.00', '2018-09-09 16:23:47', '12', '43', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('7', '泰国冷冻烤榴莲肉100g/盒', '柔软的绵密感，浓郁的果香，满满都是阳光的味道', 'images\\index\\fruits\\fruits_6.jpg', '19.80', '38.00', '2018-08-08 16:23:50', '456', '23', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('8', '泰菓椰子冻4个装', '入口香甜可口，让人回味无穷', 'images\\index\\fruits\\fruits_7.jpg', '109.00', '168.00', '2018-09-15 16:23:55', '88', '56', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('9', '新疆西州蜜瓜17号4个（9kg以上）', '新疆西州蜜瓜17号4个（9kg以上）', 'images\\index\\fruits\\fruits_8.jpg', '99.00', '108.00', '2018-08-13 16:24:00', '75', '434', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('10', '泰国进口龙眼 1kg以上', '汁多清甜  晶莹剔透', 'images\\index\\fruits\\fruits_9.jpg', '22.90', '38.00', '2018-08-14 16:24:04', '43', '12', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('11', '佳沛新西兰阳光金奇异果原箱3.3kg（25-27粒）', '佳沛直供原箱金果，香甜多汁，维C小金库', 'images\\index\\fruits\\fruits_10.jpg', '199.00', '349.00', '2018-09-01 16:24:16', '12', '334', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, 'true');
INSERT INTO `goodslist` VALUES ('12', '泰国进口椰青2个装', '清甜沁心，香嫩爽滑', 'images\\index\\fruits\\fruits_11.jpg', '30.00', '49.00', '2018-09-09 16:24:20', '313', '23', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, 'true');
INSERT INTO `goodslist` VALUES ('13', '进口牛油果6个装（900g以上）', '森林奶油 粮食水果', 'images\\index\\fruits\\fruits_12.jpg', '299.00', '359.00', '2018-09-18 16:24:24', '1213', '56', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('14', '泰国冷冻烤榴莲肉100g/盒', '柔软的绵密感，浓郁的果香，满满都是阳光的味道', 'images\\index\\fruits\\fruits_13.jpg', '30.00', '49.00', '2018-08-27 16:24:32', '12', '12', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('15', '南非进口红西柚6个装 （1.5kg以上）', '果肉柔嫩，多汁爽口，香气十足', 'images\\index\\fruits\\fruits_14.jpg', '499.00', '599.00', '2018-08-26 16:24:36', '1234', '45', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('16', '越南进口红心火龙果2.2-2.5kg', '红色诱惑 皮薄味甜', 'images\\index\\fruits\\fruits_15.jpg', '123.00', '299.00', '2018-09-02 16:24:39', '1246', '23', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, 'true');
INSERT INTO `goodslist` VALUES ('17', '菲律宾进口香蕉（0.9-1kg）', '香味浓郁 果味软糯香甜', 'images\\index\\fruits\\fruits_16.jpg', '30.00', '243.00', '2018-08-29 16:24:43', '334', '56', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('18', '新西兰加力果16个礼盒装 （2.4kg以上）', '纯脆甜美，口颊生香', 'images\\index\\fruits\\fruits_17.jpg', '59.00', '242.00', '2018-08-27 16:24:46', '12', '21', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('19', '泰国椰青整箱装 9个（单果800g以上）', '此款商品不参与会员折扣', 'images\\index\\fruits\\fruits_18.jpg', '122.00', '199.00', '2018-08-26 16:24:48', '34', '23', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('20', '马来西亚猫山王冻榴莲（300g/盒）', '热带风味 冰爽甜蜜', 'images\\index\\fruits\\fruits_19.jpg', '199.00', '299.00', '2018-08-26 16:24:51', '123', '45', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('22', '国联金鲳鱼原条两条装 300/400 700g', '产自南海之滨，深海养殖确保肉质纯净', 'images\\index\\seafood\\seafood_1.jpg', '54.00', '78.00', '2018-09-19 14:13:52', '122', '22', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('23', '国联 冷冻翡翠生虾仁200g/袋每袋32-42只', '（原料71-90尾/磅）', 'images\\index\\seafood\\seafood_2.jpg', '89.00', '100.00', '2018-09-03 14:14:33', '12', '231', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('24', '爱吃鱼 挪威北极鳕 鳕立方180g  8-10块/袋', '肉质细嫩   低油低脂', 'images\\index\\seafood\\seafood_3.jpg', '122.00', '199.00', '2018-09-19 14:14:36', '21', '212', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('25', '我爱渔挪威北极鳕（大西洋真鳕）500g  4-6块/袋', '去皮去刺，肉味甘美', 'images\\index\\seafood\\seafood_4.jpg', '129.90', '149.00', '2018-08-26 14:14:38', '12', '9948', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('26', 'PESCANOVA冷冻阿根廷船冻红虾2kg 20-40只/盒', '红虾不适合清蒸白灼，建议油焖、焗等方式', 'images\\index\\seafood\\seafood_5.jpg', '123.00', '189.80', '2018-09-01 14:14:42', '32', '33', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('27', '我爱渔 阿拉斯加狭鳕鱼300g  3-5块/袋', '肉质紧实  口感饱满', 'images\\index\\seafood\\seafood_6.jpg', '113.00', '182.90', '2018-08-26 14:14:46', '12', '223', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('28', '大厨小鲜蒜蓉粉丝贝6粒装270g', '烹饪即食，方便食用', 'images\\index\\seafood\\seafood_7.jpg', '56.00', '67.00', '2018-08-28 14:14:49', '31', '23', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('29', '国联 笔管鱿鱼 250g/袋', '肉质滑润，有弹性，有嚼劲', 'images\\index\\seafood\\seafood_8.jpg', '23.00', '29.00', '2018-08-26 14:14:52', '12', '12', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('30', '法罗群岛三文鱼上中段  260g/盒', '去皮净肉', 'images\\index\\seafood\\seafood_9.jpg', '56.00', '69.00', '2018-09-01 14:14:56', '32', '32', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);
INSERT INTO `goodslist` VALUES ('31', '本来.老鱼-舟山带鱼段（去肚） 400g/袋', '鲜香可口 清蒸美味', 'images\\index\\seafood\\seafood_10.jpg', '56.00', '129.00', '2018-08-26 14:15:01', '12', '42', '[images\\index\\fruits\\s_pic\\sm_pic1.jpg,images\\index\\fruits\\s_pic\\sm_pic2.jpg,images\\index\\fruits\\s_pic\\sm_pic3.jpg,images\\index\\fruits\\s_pic\\sm_pic4.jpg,images\\index\\fruits\\s_pic\\sm_pic5.jpg]', null, null);

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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '15218452891', '123456', null, null);
INSERT INTO `users` VALUES ('2', '13214231435', '123456', null, null);
INSERT INTO `users` VALUES ('3', '123456', 'e10adc3949ba59abbe56e057f20f883e', '1', null);
INSERT INTO `users` VALUES ('4', '13214231436', 'e10adc3949ba59abbe56e057f20f883e', null, null);
