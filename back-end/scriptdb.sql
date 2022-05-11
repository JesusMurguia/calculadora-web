CREATE DATABASE  IF NOT EXISTS `calculadora` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
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
  `3HC_O_Gluc` double DEFAULT NULL,
  `Cotinine_N_Gluc` double DEFAULT NULL,
  `3HC` double DEFAULT NULL,
  `Nicotine` double DEFAULT NULL,
  `Nicotine_N_Gluc` double DEFAULT NULL,
  `4HPBA` double DEFAULT NULL,
  `Cotinine_oxide` double DEFAULT NULL,
  `Nicotine_N_oxide` double DEFAULT NULL,
  PRIMARY KEY (`idpaciente`),
  UNIQUE KEY `idpaciente_UNIQUE` (`idpaciente`),
  CONSTRAINT `paciente_metabolitos` FOREIGN KEY (`idpaciente`) REFERENCES `paciente_avanzado` (`idpaciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metabolitos`
--

LOCK TABLES `metabolitos` WRITE;
/*!40000 ALTER TABLE `metabolitos` DISABLE KEYS */;
INSERT INTO `metabolitos` VALUES ('1',7.148288973,7.775665399,3.041825095,0.10608365,0.769961977,0.181558935,0.703422053,0.137072243),('10',1.912621359,2.912621359,1.155339806,0.093203884,0.215533981,0.080582524,0.246601942,0.036796117),('108734174590722974762',1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1),('11',9.488636364,14.46022727,7.073863636,1.636363636,2.579545455,1.267045455,1.982954545,1.261363636),('12',5.971223022,7.985611511,4.028776978,3.071942446,1.737410072,1.291366906,1.176258993,0.942446043),('13',2.868055556,5.708333333,2.25,0.113194444,0.770833333,0.26875,0.645833333,0.466666667),('14',10.55555556,6.597222222,4.791666667,3.430555556,1.628472222,1.329861111,1.197916667,0.940972222),('15',0.64504284,0.713586291,0.631578947,0.080660955,0.197062424,0.130966952,0.099877601,0.069767442),('16',6.363636364,10,3.801652893,5.702479339,2.195592287,1.162534435,1.272727273,1.716253444),('17',0.06284153,0.141894353,0.056102004,0.47723133,0.044262295,0.07704918,0.021311475,0.082695811),('18',14.67871486,6.365461847,8.634538153,3.13253012,1.25502008,1.524096386,2.008032129,1.030120482),('19',7.406876791,4.928366762,2.808022923,1.224928367,0.845272206,0.924068768,0.816618911,1.199140401),('2',5.115384615,10.07692308,3.846153846,10.11538462,2.161538462,1.757692308,1.292307692,1.596153846),('20',0.271787297,0.444608567,0.335302807,0.056720827,0.088774003,0.035745938,0.081093058,0.045199409),('21',0.048008386,0.480083857,0.089098532,0.01345912,0.056603774,0.026415094,0.029979036,0.012054507),('22',1.008196721,0.831967213,0.901639344,0.050819672,0.145901639,0.073360656,0.220081967,0.012827869),('23',6.994047619,2.645833333,6.696428571,1.705357143,0.449404762,0.806547619,1.172619048,1.145833333),('24',9.89261745,2.926174497,4.214765101,0.181208054,0.491275168,0.354362416,0.927516779,0.303355705),('25',1.527896996,0.125321888,1.369098712,0.081545064,0.083261803,0.184978541,0.300429185,0.15751073),('26',1.83030303,2.827272727,0.918181818,0.022151515,0.235151515,0.096666667,0.193030303,0.057272727),('27',1.532188841,0.751072961,0.811158798,0.013133047,0.104506438,0.285407725,0.143133047,0.164377682),('28',4.007490637,0.016067416,1.861423221,0.010337079,0.04082397,0.336329588,0.322846442,0.139700375),('29',2.702702703,0.605855856,1.81981982,0.066216216,0.147972973,0.52027027,0.632882883,0.693693694),('3',6.129032258,5.032258065,5.193548387,3.322580645,0.6,0.74516129,0.909677419,0.286774194),('30',3.712643678,1.83908046,2.327586207,0.36954023,0.193103448,0.787356322,0.263218391,0.156896552),('31',0.875968992,0.914728682,0.258139535,0.141085271,0.251162791,0.065193798,0.145736434,0.181395349),('32',4.618585298,0.060332871,3.314840499,0.19556172,0.052288488,0.38557559,0.572815534,0.192787795),('33',0.472380952,0.064571429,0.256190476,0.015904762,0.079619048,0.116190476,0.096190476,0.099047619),('34',0.248979592,0.363265306,0.155102041,0.019469388,0.066938776,0.038979592,0.040204082,0.043061224),('35',0.153222453,0.45945946,0.232848233,0.012993763,0.041164241,0.031600832,0.040540541,0.015654886),('36',1.828651685,0.879213483,1.171348315,0.017106742,0.064044944,0.159269663,0.146348315,0.03258427),('37',1.346907994,2.066365008,0.767722474,0.019457014,0.20361991,0.167420815,0.158371041,0.126093514),('38',3.683760684,0.177350427,1.846153846,0.277777778,0.053418803,0.747863248,0.465811966,0.504273504),('39',1.481132075,0.774528302,1,0.039433962,0.073773585,0.195283019,0.240566038,0.171698113),('4',16.47058824,19.11764706,9.852941176,1.084558824,3.970588235,1.702205882,1.908088235,2.040441176),('40',0.525438597,0.246491228,0.40877193,0.012807018,0.022105263,0.041052632,0.084385965,0.021491228),('41',0.789074355,0.403641882,0.306525038,0.061911988,0.05629742,0.059028832,0.072230653,0.03262519),('42',1.730769231,5.022624434,1.21040724,1.380090498,1.040723982,0.486425339,0.390271493,0.675339367),('43',1.376835237,1.075040783,1.114192496,0.047960848,0.234910277,0.42903752,0.386623165,0.822185971),('44',4.39,0.235,1.63,0.672,0.0901,0.951,0.44,0.464),('45',1.570621469,1.728813559,1.027118644,0.030960452,0.374011299,0.167231638,0.239548023,0.244067797),('46',0.063679245,0.014386792,0.029127358,0.00620283,0.012617925,0.012146226,0.007853774,0.002158019),('47',21.17039587,4.95697074,8.726333907,0.986230637,0.635111876,1.230636833,1.841652324,1.13253012),('48',2.362179487,1.179487179,1.525641026,0.66025641,0.294871795,0.342948718,0.333333333,0.252564103),('49',0.382285714,5.308571429,0.358285714,8.971428571,5.4,0.605714286,0.484571429,1.708571429),('5',10.48387097,7.370967742,6.120967742,0.168548387,0.583870968,0.496774194,1.451612903,0.375),('50',0.745874588,1.97029703,0.656765677,0.064356436,0.073267327,0.137293729,0.165016502,0.078217822),('51',0.744075829,0.900473934,0.459241706,1.123222749,0.291469194,0.299052133,0.1492891,0.54028436),('52',1.715447154,0.777235772,0.717073171,1.219512195,0.319512195,0.408943089,0.331707317,0.581300813),('53',0.344615385,0.781538462,0.132307692,0.004030769,0.155076923,0.015107692,0.063692308,0.030276923),('54',0.877419355,0.980645161,0.427741936,0.013548387,0.281290323,0.047419355,0.110322581,0.02116129),('55',7.343283582,9.47761194,5.917910448,12.08955224,1.664179104,2.462686567,1.179104478,1.402985075),('56',5.687116564,2.90797546,3.306748466,0.188957055,0.393865031,0.858895706,0.420858896,0.27607362),('57',3.421568627,0.362745098,1.539215686,0.797058824,0.092058824,0.3,0.242156863,0.202941177),('58',1.027472527,2.710622711,1.168498168,1.029304029,0.54945055,0.587912088,0.28021978,0.514652015),('59',0.127556818,0.282670455,0.191761364,0.004971591,0.079261364,0.027130682,0.041477273,0.021448864),('6',1.012820513,2.128205128,0.675213675,1.226495726,0.628205128,0.253846154,0.346153846,0.5),('60',0.454642476,0.023159018,0.421558164,0.039060832,0.045037353,0.078228388,0.186766275,0.101280683),('61',8.341543514,4.482758621,4.499178982,2.134646962,0.622331691,1.208538588,0.97044335,0.694581281),('62',0.766331658,0.701005025,0.630653266,0.030653266,0.042964824,0.032663317,0.071356784,0.02339196),('63',8.833333333,6.5,0.847619048,0.397619048,1.095238095,0.411904762,0.428571429,0.504761905),('64',3.549295775,4.014084507,2.563380282,3.183098592,0.557746479,0.587323944,0.509859155,0.312676056),('65',0,0.067586207,0.003937931,0.374482759,0.075862069,0.025241379,0.007517241,0.177241379),('66',15.34653465,3.336633663,1.653465347,7.108910891,1.237623762,1.386138614,0.622772277,1.504950495),('67',1.74137931,0.016293103,0.829310345,0.055172414,0.010431034,0.117241379,0.189655172,0.039224138),('68',1.496551724,4.868965517,0.765517241,3.682758621,1.827586207,0.355172414,0.493103448,1.475862069),('69',0.310077519,0.298449612,0.263565892,0.012751938,0.05503876,0.027325581,0.063372093,0.036046512),('7',5.82781457,5.589403974,7.337748344,1.642384106,0.655629139,0.785430464,1.682119205,1.072847682),('70',2.252252252,4.441441441,2.423423423,2.261261261,0.855855856,0.669369369,0.592792793,0.463963964),('71',5.619047619,4.603174603,2.504761905,0.113650794,1.123809524,0.666666667,0.434920635,0.425396825),('72',4.479717813,2.998236332,2.186948854,1.105820106,1.026455026,0.679012346,0.578483245,0.693121693),('73',9.261744966,6.006711409,3.369127517,4.463087248,1.275167785,1.879194631,1.006711409,1.369127517),('74',1.583333333,2.592592593,1.87037037,1.555555556,0.656481482,0.613888889,0.419444444,0.434259259),('75',0.064879357,0.008552279,0.025764075,0.003002681,0.01919571,0.028954424,0.000689008,0.001597855),('76',0.22010582,0.183068783,0.135449735,0.000410582,0.050687831,0.022751323,0.024021164,0.024232804),('77',1.083432658,0.917759237,0.384982122,0.414779499,0.252681764,0.184743743,0.141835519,0.200238379),('78',7.555555556,2.12962963,1.685185185,0.631481482,0.301851852,0.287037037,0.497222222,0.260185185),('79',0.124626866,0.35,0.126119403,0.008432836,0.108208955,0.055671642,0.033134328,0.034626866),('8',7.343137255,9.450980392,3.754901961,0.152941177,1.401960784,0.175490196,0.883333333,0.31372549),('80',2.471204188,2.272251309,1.403141361,0.903664922,0.695287958,0.767539267,0.389528796,0.696335079),('81',2.283636364,1.68,1.509090909,0.567272727,0.317454546,0.418181818,0.325090909,0.44),('82',4.483985765,3.555160142,4.412811388,1.174377224,0.569395018,1.288256228,0.690391459,0.84341637),('83',1.759562842,0.366120219,0.867759563,0.640437159,0.06863388,0.189071038,0.208743169,0.107322404),('84',5.755395683,9.712230216,3.45323741,0.143884892,1.884892086,0.892086331,0.726618705,0.841726619),('85',0.510638298,1.480851064,0.512765957,0.052340426,0.188723404,0.082765957,0.086382979,0.060851064),('86',0.165938865,0.006026201,0.134061135,0.036244541,0.017161572,0.028340611,0.036113537,0.011222707),('87',2.671480144,2.827918171,1.08543923,0.517448857,0.423586041,0.277978339,0.377858002,0.306859206),('88',0.388617886,0.343089431,0.242276423,0.014878049,0.062195122,0.044390244,0.089430894,0.032601626),('89',1.058252427,2.825242718,0.645631068,0.103883495,0.494174757,0.100970874,0.180582524,0.095145631),('9',60.27874564,11.35888502,16.13240418,7.909407666,1.655052265,3.407665505,2.763066202,2.829268293),('90',2.108559499,5.553235908,2.48434238,0.386221294,1.104384134,0.780793319,0.507306889,0.676409186),('91',2.191685912,5.473441109,1.277136259,3.048498845,1.66743649,0.799076213,0.616628176,1.122401848),('92',1.09929078,0.380614657,0.849881797,0.015484634,0.076122931,0.071158392,0.187943262,0.015130024),('93',0.026365055,0.019032761,0.018408736,0.001762871,0.03400936,0.023868955,0.002230889,0.002168487),('94',4.727272727,5.981818182,2.681818182,3.118181818,0.963636364,0.807272727,0.7,0.487272727),('95',9.261637239,7.255216693,6.243980738,3.723916533,2.487961477,0.943820225,0.386837881,0.908507223),('96',3.886925795,5.54770318,0.772084806,0.026855124,0.505300353,0.148586572,0.30565371,0.156007067);
/*!40000 ALTER TABLE `metabolitos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `metabolitos_riesgo`
--

DROP TABLE IF EXISTS `metabolitos_riesgo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `metabolitos_riesgo` (
  `idpaciente` varchar(45) NOT NULL,
  `3HC_O_Gluc` varchar(45) DEFAULT NULL,
  `Cotinine_N_Gluc` varchar(45) DEFAULT NULL,
  `3HC` varchar(45) DEFAULT NULL,
  `Cotinine` varchar(45) DEFAULT NULL,
  `Nicotine` varchar(45) DEFAULT NULL,
  `Nicotine_N_Gluc` varchar(45) DEFAULT NULL,
  `4HPBA` varchar(45) DEFAULT NULL,
  `Cotinine_oxide` varchar(45) DEFAULT NULL,
  `Nicotine_N_oxide` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idpaciente`),
  UNIQUE KEY `idpaciente_UNIQUE` (`idpaciente`),
  CONSTRAINT `idpaciente_metabolitos_riesgo` FOREIGN KEY (`idpaciente`) REFERENCES `metabolitos` (`idpaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metabolitos_riesgo`
--

LOCK TABLES `metabolitos_riesgo` WRITE;
/*!40000 ALTER TABLE `metabolitos_riesgo` DISABLE KEYS */;
INSERT INTO `metabolitos_riesgo` VALUES ('1','Alto','Alto','Alto',NULL,'Medio','Alto','Medio','Alto','Medio'),('10','Medio','Alto','Medio',NULL,'Medio','Medio','Bajo','Medio','Bajo'),('108734174590722974762','Medio','Bajo','Medio',NULL,'Alto','Alto','Alto','Alto','Alto'),('11','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('12','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('13','Alto','Alto','Alto',NULL,'Medio','Alto','Medio','Alto','Alto'),('14','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('15','Bajo','Bajo','Bajo',NULL,'Medio','Bajo','Bajo','Bajo','Bajo'),('16','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('17','Bajo','Bajo','Bajo',NULL,'Alto','Bajo','Bajo','Bajo','Bajo'),('18','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('19','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('2','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('20','Bajo','Bajo','Bajo',NULL,'Medio','Bajo','Bajo','Bajo','Bajo'),('21','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('22','Bajo','Bajo','Medio',NULL,'Bajo','Bajo','Bajo','Medio','Bajo'),('23','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('24','Alto','Alto','Alto',NULL,'Alto','Alto','Medio','Alto','Medio'),('25','Medio','Bajo','Medio',NULL,'Medio','Bajo','Medio','Medio','Medio'),('26','Medio','Alto','Medio',NULL,'Bajo','Medio','Bajo','Medio','Bajo'),('27','Medio','Bajo','Medio',NULL,'Bajo','Bajo','Medio','Bajo','Medio'),('28','Alto','Bajo','Alto',NULL,'Bajo','Bajo','Medio','Medio','Medio'),('29','Alto','Bajo','Alto',NULL,'Medio','Bajo','Alto','Alto','Alto'),('3','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Medio'),('30','Alto','Medio','Alto',NULL,'Alto','Bajo','Alto','Medio','Medio'),('31','Bajo','Bajo','Bajo',NULL,'Medio','Medio','Bajo','Bajo','Medio'),('32','Alto','Bajo','Alto',NULL,'Alto','Bajo','Alto','Alto','Medio'),('33','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('34','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('35','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('36','Medio','Bajo','Medio',NULL,'Bajo','Bajo','Medio','Bajo','Bajo'),('37','Medio','Alto','Medio',NULL,'Bajo','Medio','Medio','Bajo','Medio'),('38','Alto','Bajo','Alto',NULL,'Alto','Bajo','Alto','Alto','Alto'),('39','Medio','Bajo','Medio',NULL,'Bajo','Bajo','Medio','Medio','Medio'),('4','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('40','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('41','Bajo','Bajo','Bajo',NULL,'Medio','Bajo','Bajo','Bajo','Bajo'),('42','Medio','Alto','Medio',NULL,'Alto','Alto','Alto','Alto','Alto'),('43','Medio','Bajo','Medio',NULL,'Bajo','Medio','Alto','Alto','Alto'),('44','Alto','Bajo','Alto',NULL,'Alto','Bajo','Alto','Alto','Alto'),('45','Medio','Medio','Medio',NULL,'Bajo','Alto','Medio','Medio','Medio'),('46','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('47','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('48','Medio','Medio','Alto',NULL,'Alto','Medio','Medio','Medio','Medio'),('49','Bajo','Alto','Bajo',NULL,'Alto','Alto','Alto','Alto','Alto'),('5','Alto','Alto','Alto',NULL,'Medio','Alto','Alto','Alto','Alto'),('50','Bajo','Medio','Bajo',NULL,'Medio','Bajo','Bajo','Bajo','Bajo'),('51','Bajo','Bajo','Bajo',NULL,'Alto','Medio','Medio','Bajo','Alto'),('52','Medio','Bajo','Bajo',NULL,'Alto','Alto','Alto','Medio','Alto'),('53','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('54','Bajo','Bajo','Bajo',NULL,'Bajo','Medio','Bajo','Bajo','Bajo'),('55','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('56','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Medio'),('57','Alto','Bajo','Alto',NULL,'Alto','Bajo','Medio','Medio','Medio'),('58','Medio','Alto','Medio',NULL,'Alto','Alto','Alto','Medio','Alto'),('59','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('6','Bajo','Alto','Bajo',NULL,'Alto','Alto','Medio','Medio','Alto'),('60','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('61','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('62','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('63','Alto','Alto','Medio',NULL,'Alto','Alto','Alto','Alto','Alto'),('64','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('65','Bajo','Bajo','Bajo',NULL,'Alto','Bajo','Bajo','Bajo','Medio'),('66','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('67','Medio','Bajo','Medio',NULL,'Medio','Bajo','Bajo','Bajo','Bajo'),('68','Medio','Alto','Bajo',NULL,'Alto','Alto','Medio','Alto','Alto'),('69','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('7','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('70','Medio','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('71','Alto','Alto','Alto',NULL,'Medio','Alto','Alto','Alto','Alto'),('72','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('73','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('74','Medio','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('75','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('76','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('77','Medio','Bajo','Bajo',NULL,'Alto','Medio','Medio','Bajo','Medio'),('78','Alto','Alto','Alto',NULL,'Alto','Alto','Medio','Alto','Medio'),('79','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('8','Alto','Alto','Alto',NULL,'Medio','Alto','Medio','Alto','Alto'),('80','Medio','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('81','Medio','Medio','Alto',NULL,'Alto','Alto','Alto','Medio','Alto'),('82','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('83','Medio','Bajo','Medio',NULL,'Alto','Bajo','Medio','Medio','Bajo'),('84','Alto','Alto','Alto',NULL,'Medio','Alto','Alto','Alto','Alto'),('85','Bajo','Medio','Bajo',NULL,'Medio','Bajo','Bajo','Bajo','Bajo'),('86','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('87','Medio','Alto','Medio',NULL,'Alto','Alto','Medio','Medio','Medio'),('88','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('89','Medio','Alto','Bajo',NULL,'Medio','Alto','Bajo','Bajo','Bajo'),('9','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('90','Medio','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('91','Medio','Alto','Medio',NULL,'Alto','Alto','Alto','Alto','Alto'),('92','Medio','Bajo','Medio',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('93','Bajo','Bajo','Bajo',NULL,'Bajo','Bajo','Bajo','Bajo','Bajo'),('94','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('95','Alto','Alto','Alto',NULL,'Alto','Alto','Alto','Alto','Alto'),('96','Alto','Alto','Medio',NULL,'Bajo','Alto','Bajo','Medio','Medio');
/*!40000 ALTER TABLE `metabolitos_riesgo` ENABLE KEYS */;
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
  `cigarrillosDia` int NOT NULL,
  `cigarrillosDia_riesgo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idpaciente`),
  UNIQUE KEY `idpaciente_UNIQUE` (`idpaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
INSERT INTO `paciente` VALUES ('1',0,0,'2',11,'Medio'),('10',9,9,'2',7,'Medio'),('108734174590722974762',99,99,'M',99,'Alto'),('11',10,10,'1',9,'Medio'),('12',11,11,'2',9,'Medio'),('13',12,12,'2',8,'Medio'),('14',13,13,'2',19,'Alto'),('15',14,14,'2',3,'Bajo'),('16',15,15,'2',17,'Alto'),('17',16,16,'2',3,'Bajo'),('18',17,17,'2',21,'Alto'),('19',18,18,'2',17,'Alto'),('2',1,1,'2',16,'Alto'),('20',19,19,'1',3,'Bajo'),('21',20,20,'1',3,'Bajo'),('22',21,21,'2',6,'Medio'),('23',22,22,'1',6,'Medio'),('24',23,23,'1',3,'Bajo'),('25',24,24,'2',3,'Bajo'),('26',25,25,'2',5,'Medio'),('27',26,26,'2',5,'Medio'),('28',27,27,'2',4,'Bajo'),('29',28,28,'2',4,'Bajo'),('3',2,2,'2',12,'Alto'),('30',29,29,'2',3,'Bajo'),('31',30,30,'2',3,'Bajo'),('32',31,31,'2',0,'Bajo'),('33',32,32,'2',5,'Medio'),('34',33,33,'2',2,'Bajo'),('35',34,34,'2',6,'Medio'),('36',35,35,'2',6,'Medio'),('37',36,36,'2',1,'Bajo'),('38',37,37,'2',1,'Bajo'),('39',38,38,'2',5,'Medio'),('4',3,3,'2',17,'Alto'),('40',39,39,'2',8,'Medio'),('41',40,40,'2',7,'Medio'),('42',41,41,'2',13,'Alto'),('43',42,42,'2',0,'Bajo'),('44',43,43,'2',0,'Bajo'),('45',44,44,'2',5,'Medio'),('46',45,45,'2',7,'Medio'),('47',46,46,'1',14,'Alto'),('48',47,47,'1',4,'Bajo'),('49',48,48,'2',6,'Medio'),('5',4,4,'2',13,'Alto'),('50',49,49,'1',1,'Bajo'),('51',50,50,'1',7,'Medio'),('52',51,51,'2',4,'Bajo'),('53',52,52,'1',2,'Bajo'),('54',53,53,'2',0,'Bajo'),('55',54,54,'2',0,'Bajo'),('56',55,55,'1',8,'Medio'),('57',56,56,'2',3,'Bajo'),('58',57,57,'1',5,'Medio'),('59',58,58,'1',1,'Bajo'),('6',5,5,'1',9,'Medio'),('60',59,59,'1',2,'Bajo'),('61',60,60,'2',9,'Medio'),('62',61,61,'1',0,'Bajo'),('63',62,62,'2',15,'Alto'),('64',63,63,'1',10,'Medio'),('65',64,64,'1',0,'Bajo'),('66',65,65,'2',0,'Bajo'),('67',66,66,'1',0,'Bajo'),('68',67,67,'2',0,'Bajo'),('69',68,68,'1',2,'Bajo'),('7',6,6,'1',7,'Medio'),('70',69,69,'2',0,'Bajo'),('71',70,70,'2',7,'Medio'),('72',71,71,'2',0,'Bajo'),('73',72,72,'2',13,'Alto'),('74',73,73,'1',1,'Bajo'),('75',74,74,'2',0,'Bajo'),('76',75,75,'2',1,'Bajo'),('77',76,76,'2',4,'Bajo'),('78',77,77,'2',9,'Medio'),('79',78,78,'2',3,'Bajo'),('8',7,7,'2',5,'Medio'),('80',79,79,'2',0,'Bajo'),('81',80,80,'2',0,'Bajo'),('82',81,81,'1',18,'Alto'),('83',82,82,'2',3,'Bajo'),('84',83,83,'1',2,'Bajo'),('85',84,84,'1',6,'Medio'),('86',85,85,'2',12,'Alto'),('87',86,86,'2',3,'Bajo'),('88',87,87,'2',3,'Bajo'),('89',88,88,'2',0,'Bajo'),('9',8,8,'2',0,'Bajo'),('90',89,89,'2',7,'Medio'),('91',90,90,'2',5,'Medio'),('92',91,91,'1',1,'Bajo'),('93',92,92,'1',8,'Medio'),('94',93,93,'2',9,'Medio'),('95',94,94,'2',9,'Medio'),('96',95,95,'2',13,'Alto');
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
  CONSTRAINT `paciente_avanzado` FOREIGN KEY (`idpaciente`) REFERENCES `paciente` (`idpaciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente_avanzado`
--

LOCK TABLES `paciente_avanzado` WRITE;
/*!40000 ALTER TABLE `paciente_avanzado` DISABLE KEYS */;
INSERT INTO `paciente_avanzado` VALUES ('1'),('10'),('108734174590722974762'),('11'),('12'),('13'),('14'),('15'),('16'),('17'),('18'),('19'),('2'),('20'),('21'),('22'),('23'),('24'),('25'),('26'),('27'),('28'),('29'),('3'),('30'),('31'),('32'),('33'),('34'),('35'),('36'),('37'),('38'),('39'),('4'),('40'),('41'),('42'),('43'),('44'),('45'),('46'),('47'),('48'),('49'),('5'),('50'),('51'),('52'),('53'),('54'),('55'),('56'),('57'),('58'),('59'),('6'),('60'),('61'),('62'),('63'),('64'),('65'),('66'),('67'),('68'),('69'),('7'),('70'),('71'),('72'),('73'),('74'),('75'),('76'),('77'),('78'),('79'),('8'),('80'),('81'),('82'),('83'),('84'),('85'),('86'),('87'),('88'),('89'),('9'),('90'),('91'),('92'),('93'),('94'),('95'),('96');
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
  PRIMARY KEY (`idpaciente`),
  UNIQUE KEY `idpaciente_UNIQUE` (`idpaciente`),
  CONSTRAINT `paciente_basico` FOREIGN KEY (`idpaciente`) REFERENCES `paciente` (`idpaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `rs2431413` float DEFAULT NULL,
  `rs140122859` float DEFAULT NULL,
  `rs503464` float DEFAULT NULL,
  `rs637137` float DEFAULT NULL,
  `rs578776` float DEFAULT NULL,
  `rs167771` float DEFAULT NULL,
  `rs1800822` float DEFAULT NULL,
  `total` double DEFAULT NULL,
  `riesgo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idpaciente`),
  UNIQUE KEY `idpaciente_UNIQUE` (`idpaciente`),
  CONSTRAINT `paciente_variacion_genetica` FOREIGN KEY (`idpaciente`) REFERENCES `paciente_avanzado` (`idpaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variacion_genetica`
--

LOCK TABLES `variacion_genetica` WRITE;
/*!40000 ALTER TABLE `variacion_genetica` DISABLE KEYS */;
INSERT INTO `variacion_genetica` VALUES ('1',1,1,1,1,1,4.9,2.44,11.956,'Bajo'),('10',1,3.187,4.71,3.57,4.63,4.9,1,1215.7611,'Alto'),('108734174590722974762',1,1,2.171,1,1,4.906,5.982,63.71383933199999,'Medio'),('11',1,1,2.171,1.89,2.152,4.9,5.95,257.4405,'Alto'),('12',1,1,2.171,1.89,2.152,4.9,1,43.2673,'Medio'),('13',1,1,2.171,1.89,2.152,4.9,1,43.2673,'Medio'),('14',3.66,1,2.171,1.89,2.152,4.9,1,158.3584,'Alto'),('15',1,1,1,1,1,2.215,1,2.215,'Bajo'),('16',3.66,1,1,1,1,2.215,5.95,48.2361,'Medio'),('17',1,1,4.71,3.57,4.63,4.9,1,381.4751,'Alto'),('18',1,1,2.171,1,1,4.9,1,10.6379,'Bajo'),('19',1,3.187,4.71,3.57,4.63,4.9,1,1215.7611,'Alto'),('2',1,3.187,4.71,3.57,4.63,4.9,5.95,7233.7788,'Alto'),('20',1,1,1,1,2.152,4.9,1,10.5448,'Bajo'),('21',1,1,2.171,1.89,2.152,2.215,5.95,116.3736,'Alto'),('22',1,1,1,1,1,2.215,1,2.215,'Bajo'),('23',1,1,1,1,1,4.9,1,4.9,'Bajo'),('24',3.66,1,4.71,3.57,4.63,4.9,1,1396.1989,'Alto'),('25',1,1,2.171,1.89,2.152,4.9,1,43.2673,'Medio'),('26',1,1,2.171,1.89,2.152,1,1,8.8301,'Bajo'),('27',1,3.187,4.71,3.57,4.63,4.9,1,1215.7611,'Alto'),('28',1,1,1,1,1,2.215,2.44,5.4046,'Bajo'),('29',3.66,1,4.71,3.57,4.63,2.215,2.44,1539.9789,'Alto'),('3',1,1,2.171,1.89,2.152,4.9,2.44,105.5723,'Medio'),('30',1,1,1,1,1,4.9,1,4.9,'Bajo'),('31',13.4,1,2.171,1.89,2.152,4.9,1,579.7821,'Alto'),('32',1,1,1,1.89,2.152,2.215,2.44,21.982,'Medio'),('33',1,3.187,2.171,1.89,2.152,2.215,1,62.3332,'Medio'),('34',1,1,4.71,3.57,4.63,4.9,2.44,930.7992,'Alto'),('35',3.66,1,4.71,3.57,4.63,4.9,5.95,8307.3832,'Alto'),('36',1,3.187,4.71,3.57,4.63,4.9,1,1215.7611,'Alto'),('37',1,1,1,1,1,2.215,2.44,5.4046,'Bajo'),('38',1,1,2.171,1.89,2.152,4.9,1,43.2673,'Medio'),('39',3.66,1,1,1,1,4.9,1,17.934,'Bajo'),('4',1,1,2.171,1.89,4.63,2.215,1,42.0801,'Medio'),('40',1,1,4.71,3.57,4.63,4.9,1,381.4751,'Alto'),('41',1,1,2.171,1.89,2.152,4.9,1,43.2673,'Medio'),('42',1,3.187,2.171,1.89,2.152,4.9,2.44,336.4588,'Alto'),('43',13.4,1,4.71,3.57,4.63,4.9,1,5111.7663,'Alto'),('44',1,3.187,4.71,3.57,4.63,2.215,2.44,1340.9597,'Alto'),('45',1,1,2.171,1.89,2.152,4.9,2.44,105.5723,'Medio'),('46',1,3.187,2.171,1.89,2.152,4.9,1,137.8929,'Alto'),('47',1,1,2.171,1.89,2.152,2.215,1,19.5586,'Bajo'),('48',1,1,2.171,1.89,2.152,1,2.44,21.5454,'Medio'),('49',3.66,1,1,1,1,4.9,1,17.934,'Bajo'),('5',3.66,3.187,4.71,3.57,4.63,4.9,1,4449.6858,'Alto'),('50',3.66,1,1,1,1,4.9,1,17.934,'Bajo'),('51',1,3.187,2.171,1.89,2.152,2.215,1,62.3332,'Medio'),('52',3.66,1,1,1,1,4.9,1,17.934,'Bajo'),('53',1,1,2.171,1.89,2.152,4.9,2.44,105.5723,'Medio'),('54',1,1,1,1,1,4.9,1,4.9,'Bajo'),('55',1,1,2.171,1.89,2.152,4.9,2.44,105.5723,'Medio'),('56',1,1,4.71,3.57,4.63,4.9,1,381.4751,'Alto'),('57',1,3.187,4.71,3.57,4.63,1,2.44,605.3994,'Alto'),('58',1,1,1,1,1,2.215,1,2.215,'Bajo'),('59',3.66,1,4.71,3.57,4.63,2.215,1,631.1389,'Alto'),('6',1,1,1,1.89,1,1,2.44,4.6116,'Bajo'),('60',1,3.187,4.71,3.57,4.63,2.215,2.44,1340.9597,'Alto'),('61',1,3.187,2.171,1.89,2.152,2.215,1,62.3332,'Medio'),('62',1,3.187,4.71,3.57,4.63,4.9,2.44,2966.4572,'Alto'),('63',1,3.187,4.71,3.57,4.63,2.215,2.44,1340.9597,'Alto'),('64',1,3.187,2.171,1.89,2.152,4.9,1,137.8929,'Alto'),('65',13.4,3.187,2.171,1.89,4.63,4.9,2.44,9700.0816,'Alto'),('66',3.66,1,2.171,1.89,2.152,4.9,1,158.3584,'Alto'),('67',1,1,2.171,1.89,2.152,2.215,1,19.5586,'Bajo'),('68',13.4,3.187,4.71,3.57,4.63,4.9,1,16291.1993,'Alto'),('69',1,1,1,1,2.152,1,1,2.152,'Bajo'),('7',3.66,3.187,2.171,1,2.152,2.215,1,120.7088,'Alto'),('70',1,1,2.171,1.89,2.152,4.9,1,43.2673,'Medio'),('71',1,1,1,1,2.152,2.215,1,4.7667,'Bajo'),('72',1,1,1,1.89,2.152,2.215,1,9.009,'Bajo'),('73',1,1,2.171,1.89,2.152,4.9,2.44,105.5723,'Medio'),('74',1,1,2.171,1.89,2.152,2.215,1,19.5586,'Bajo'),('75',3.66,3.187,4.71,3.57,4.63,2.215,2.44,4907.9126,'Alto'),('76',1,3.187,2.171,1.89,4.63,2.215,1,134.1092,'Alto'),('77',3.66,1,1,1,1,2.215,1,8.1069,'Bajo'),('78',1,1,2.171,1.89,4.63,4.9,2.44,227.1373,'Alto'),('79',3.66,1,2.171,1.89,2.152,2.215,1,71.5845,'Medio'),('8',1,1,2.171,1.89,2.152,4.9,1,43.2673,'Medio'),('80',1,1,2.171,1.89,2.152,4.9,2.44,105.5723,'Medio'),('81',3.66,1,4.71,3.57,4.63,2.215,2.44,1539.9789,'Alto'),('82',1,3.187,2.171,1.89,2.152,1,2.44,68.6651,'Medio'),('83',1,1,2.171,1.89,4.63,4.9,2.44,227.1373,'Alto'),('84',1,1,2.171,1.89,2.152,4.9,2.44,105.5723,'Medio'),('85',1,1,1,1,1,4.9,1,4.9,'Bajo'),('86',1,1,4.71,3.57,4.63,2.215,1,172.4423,'Alto'),('87',1,3.187,4.71,3.57,4.63,2.215,1,549.5737,'Alto'),('88',1,1,2.171,1.89,2.152,4.9,1,43.2673,'Medio'),('89',1,3.187,4.71,3.57,4.63,4.9,1,1215.7611,'Alto'),('9',1,1,2.171,1.89,2.152,4.9,1,43.2673,'Medio'),('90',1,1,4.71,3.57,4.63,4.9,1,381.4751,'Alto'),('91',3.66,1,2.171,1.89,2.152,4.9,1,158.3584,'Alto'),('92',1,10.16,4.71,3.57,4.63,2.215,1,1752.0139,'Alto'),('93',1,1,2.171,1.89,2.152,4.9,1,43.2673,'Medio'),('94',3.66,1,2.171,1.89,2.152,1,2.44,78.856,'Medio'),('95',1,10.16,4.71,3.57,4.63,4.9,2.44,9456.9203,'Alto'),('96',1,1,2.171,1.89,2.152,2.215,1,19.5586,'Bajo');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variacion_genetica_diccionario`
--

LOCK TABLES `variacion_genetica_diccionario` WRITE;
/*!40000 ALTER TABLE `variacion_genetica_diccionario` DISABLE KEYS */;
INSERT INTO `variacion_genetica_diccionario` VALUES (1,'rs2431413',0,'A/A','A/G','G/G',1,3.667,13.446),(2,'rs140122859',0,'C/C','C/T','T/T',1,3.187,10.156),(3,'rs503464',0,'T/T','T/A','A/A',1,2.171,4.713),(4,'rs637137',0,'T/T','T/A/','A/A',1,1.889,3.568),(5,'rs578776',0,'G/G','G/A','A/A',1,2.152,4.631),(6,'rs167771',0,'A/A','A/G','G/G',1,2.215,4.906),(7,'rs1800822',0,'C/C','C/T','T/T',1,2.446,5.982);
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

-- Dump completed on 2022-05-11 13:25:39
