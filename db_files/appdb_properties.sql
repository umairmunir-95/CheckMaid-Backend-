-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: appdb
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `properties`
--

DROP TABLE IF EXISTS `properties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `properties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `propertyName` varchar(500) NOT NULL,
  `address` varchar(500) NOT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `checkInRadius` double DEFAULT NULL,
  `checkInTime` varchar(100) DEFAULT NULL,
  `checkOutTime` varchar(100) DEFAULT NULL,
  `imageBase64` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `propertyName_UNIQUE` (`propertyName`),
  UNIQUE KEY `address_UNIQUE` (`address`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `properties`
--

LOCK TABLES `properties` WRITE;
/*!40000 ALTER TABLE `properties` DISABLE KEYS */;
INSERT INTO `properties` VALUES (1,'ASTP','ASTP LAHORE',10.1,20.2,100,'10:00','07:00',''),(2,'My Property2','ASTP Lahore2',11.11,22.22,50,'09:00','06:00',''),(5,'My Property3','ASTP Lahore3',11.11,22.22,50,'09:00','06:00','data:image/jpeg;base64,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');
/*!40000 ALTER TABLE `properties` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-11 14:50:55