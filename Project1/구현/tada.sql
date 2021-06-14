-- Reset the database

DROP DATABASE IF EXISTS tada;
CREATE DATABASE tada;
USE tada;



-- Table structure for table `user`

CREATE TABLE `user` (
  `id` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `phone_nunber` varchar(20) DEFAULT NULL,
  `credit_number` varchar(30) DEFAULT NULL,
  `latitude` varchar(100) DEFAULT NULL,
  `longitude` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
);



-- Dumping data for table `user`

INSERT INTO `user` VALUES ('admin', '1234', 'keon-woo', NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES ('admin2', '1234', 'seong-hoe', NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES ('admin3', '1234', 'soo-woog', NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES ('admin4', '1234', 'kang-hyeon', NULL, NULL, NULL, NULL);



-- Table structure for table `driver`

CREATE TABLE `driver` (
  `id` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `phone_nunber` varchar(20) DEFAULT NULL,
  `credit_number` varchar(30) DEFAULT NULL,
  `latitude` varchar(100) DEFAULT NULL,
  `longitude` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
);


-- Dumping data for table `driver`

INSERT INTO `driver` VALUES ('driver', '1234', 'keon-woo', NULL, NULL, NULL, NULL);
INSERT INTO `driver` VALUES ('driver2', '1234', 'seong-hoe', NULL, NULL, NULL, NULL);
INSERT INTO `driver` VALUES ('driver3', '1234', 'soo-woog', NULL, NULL, NULL, NULL);
INSERT INTO `driver` VALUES ('driver4', '1234', 'kang-hyeon', NULL, NULL, NULL, NULL);





-- Table structure for table `match`
