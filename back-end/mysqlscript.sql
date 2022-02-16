CREATE DATABASE  IF NOT EXISTS `calculadora` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `calculadora`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: calculadora
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `metabolitos`
--

DROP TABLE IF EXISTS `metabolitos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `metabolitos` (
  `idpaciente` varchar(45) NOT NULL,
  `3HC-0-Gluc` float DEFAULT NULL,
  `Cotinine-N-Gluc` float DEFAULT NULL,
  `3HC` float DEFAULT NULL,
  `Cotinine` float DEFAULT NULL,
  `Nicotine` float DEFAULT NULL,
  `Nicotine-N-Gluc` float DEFAULT NULL,
  `4HPBA` float DEFAULT NULL,
  `Cotinine-oxide` float DEFAULT NULL,
  `Nicotine-N-oxide` float DEFAULT NULL,
  PRIMARY KEY (`idpaciente`),
  UNIQUE KEY `idpaciente_UNIQUE` (`idpaciente`),
  CONSTRAINT `paciente_metabolitos` FOREIGN KEY (`idpaciente`) REFERENCES `paciente_avanzado` (`idpaciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metabolitos`
--

LOCK TABLES `metabolitos` WRITE;
/*!40000 ALTER TABLE `metabolitos` DISABLE KEYS */;
/*!40000 ALTER TABLE `metabolitos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paciente` (
  `idpaciente` varchar(45) NOT NULL,
  `edad` int NOT NULL,
  `edadFumador` int NOT NULL,
  `genero` varchar(1) NOT NULL,
  `cigarrillosDia` varchar(45) NOT NULL,
  PRIMARY KEY (`idpaciente`),
  UNIQUE KEY `idpaciente_UNIQUE` (`idpaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente_avanzado`
--

DROP TABLE IF EXISTS `paciente_avanzado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paciente_avanzado` (
  `idpaciente` varchar(45) NOT NULL,
  PRIMARY KEY (`idpaciente`),
  UNIQUE KEY `idpaciente_UNIQUE` (`idpaciente`),
  CONSTRAINT `paciente_avanzado` FOREIGN KEY (`idpaciente`) REFERENCES `paciente` (`idpaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente_avanzado`
--

LOCK TABLES `paciente_avanzado` WRITE;
/*!40000 ALTER TABLE `paciente_avanzado` DISABLE KEYS */;
/*!40000 ALTER TABLE `paciente_avanzado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente_basico`
--

DROP TABLE IF EXISTS `paciente_basico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paciente_basico` (
  `idpaciente` varchar(45) NOT NULL,
  `puntos` int NOT NULL,
  `dependencia` varchar(45) NOT NULL,
  `recomendaciones` varchar(256) NOT NULL,
  PRIMARY KEY (`idpaciente`),
  UNIQUE KEY `idpaciente_UNIQUE` (`idpaciente`),
  CONSTRAINT `paciente_basico` FOREIGN KEY (`idpaciente`) REFERENCES `paciente` (`idpaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente_basico`
--

LOCK TABLES `paciente_basico` WRITE;
/*!40000 ALTER TABLE `paciente_basico` DISABLE KEYS */;
/*!40000 ALTER TABLE `paciente_basico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variacion_genetica`
--

DROP TABLE IF EXISTS `variacion_genetica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variacion_genetica` (
  `idpaciente` varchar(45) NOT NULL,
  `rs1800822` varchar(3) NOT NULL,
  `rs28363545` varchar(3) NOT NULL,
  `rs167771` varchar(3) NOT NULL,
  `rs2282511` varchar(3) NOT NULL,
  `rs3743078` varchar(3) NOT NULL,
  `rs578776` varchar(3) NOT NULL,
  `rs71581744` varchar(3) NOT NULL,
  `rs637137` varchar(3) NOT NULL,
  `rs503464` varchar(3) NOT NULL,
  `rs62380556` varchar(3) NOT NULL,
  `Chr5:63290337` varchar(3) NOT NULL,
  `rs17721739` varchar(3) NOT NULL,
  `rs985919` varchar(3) NOT NULL,
  PRIMARY KEY (`idpaciente`),
  KEY `paciente_variacion_genetica_idx` (`idpaciente`),
  CONSTRAINT `paciente_variacion_genetica` FOREIGN KEY (`idpaciente`) REFERENCES `paciente_avanzado` (`idpaciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variacion_genetica`
--

LOCK TABLES `variacion_genetica` WRITE;
/*!40000 ALTER TABLE `variacion_genetica` DISABLE KEYS */;
/*!40000 ALTER TABLE `variacion_genetica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variacion_genetica_diccionario`
--

DROP TABLE IF EXISTS `variacion_genetica_diccionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variacion_genetica_diccionario` (
  `idvariacion_genetica` int NOT NULL,
  `snp` varchar(45) NOT NULL,
  `odds_ratio` float NOT NULL,
  `wt` varchar(45) NOT NULL,
  `het` varchar(45) NOT NULL,
  `mut` varchar(45) NOT NULL,
  `wt_riesgo` float NOT NULL,
  `het_riesgo` float NOT NULL,
  `mut_riesgo` float NOT NULL,
  PRIMARY KEY (`idvariacion_genetica`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variacion_genetica_diccionario`
--

LOCK TABLES `variacion_genetica_diccionario` WRITE;
/*!40000 ALTER TABLE `variacion_genetica_diccionario` DISABLE KEYS */;
INSERT INTO `variacion_genetica_diccionario` VALUES (1,'rs1800822',0.37,'C/C','C/T','T/T',1,0.37,0.14),(2,'rs28363545',0.37,'T/T','C/T','C/C',1,0.37,0.14),(3,'rs167771',0.45,'G/G','G/A','A/A',1,0.45,0.2),(4,'rs2282511',2.56,'C/C','C/A','A/A',1,2.56,6.55),(5,'rs3743078',2.13,'C/C','C/G','G/G',1,2.13,4.54),(6,'rs578776',0.5,'G/G','G/A','A/A',1,0.5,0.25),(7,'rs71581744',0.49,'A/A','A/ACCCC','ACCCC/ACCCC',1,0.49,0.24),(8,'rs637137',0.53,'T/T','T/A','A/A',1,0.53,0.28),(9,'rs503464',0.46,'T/T','T/A','A/A',1,0.46,0.21),(10,'rs62380556',0,'A/A','A/G','G/G',1,0,0),(11,'rs12459249',2.286,'T/T','T/C','C/C',1,2.29,5.23),(12,'Chr5:63290337',3.4,'T/T','T/C','C/C',1,3.4,11.56),(13,'rs17721739',0.5227,'T/T','T/C','C/C',1,0.52,0.27),(14,'rs985919',2.971,'C/C','C/A','A/A',1,2.97,8.83);
/*!40000 ALTER TABLE `variacion_genetica_diccionario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-16 16:34:54
