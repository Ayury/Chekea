-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-07-2023 a las 11:49:41
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `chekea`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agendarcita`
--

CREATE TABLE `agendarcita` (
  `idCita` int(11) NOT NULL,
  `idAuto` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idTaller` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auto`
--

CREATE TABLE `auto` (
  `idAuto` int(11) NOT NULL,
  `placa` varchar(17) NOT NULL,
  `marca` varchar(15) NOT NULL,
  `modelo` varchar(15) NOT NULL,
  `anio` int(4) NOT NULL,
  `kilometraje` decimal(10,2) NOT NULL,
  `transmision` varchar(12) NOT NULL,
  `propietario` int(11) NOT NULL,
  `catalogo` int(1) NOT NULL DEFAULT 0,
  `detalles` text NOT NULL,
  `img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auto`
--

INSERT INTO `auto` (`idAuto`, `placa`, `marca`, `modelo`, `anio`, `kilometraje`, `transmision`, `propietario`, `catalogo`, `detalles`, `img`) VALUES
(4, 'FVECD', 'Geely', 'Azkarra', 2022, 15.00, 'Automático', 1, 1, 'Lo compré en la sucursal al lado del Campus Central de la UTP', ''),
(5, 'DR5VS1', 'BMW', 'i4 M50', 2023, 5.00, 'Manual', 2, 1, 'Está casi nuevo', ''),
(6, 'ABDABC', 'BMW', 'iX3', 2020, 40.00, 'Automático', 1, 1, 'Uno de los mejores modelos', ''),
(7, 'ABDABC', 'Mitsubishi', 'Outlander', 2021, 20.00, 'Automático', 1, 1, 'Es de Transmisión Automática', ''),
(8, 'LEO', 'Mitsubishi', 'Lancer', 2010, 140.00, 'Manual', 1, 1, 'Lo estoy vendiendo porque me compré uno del año', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auto_imagen`
--

CREATE TABLE `auto_imagen` (
  `idImagen` int(11) NOT NULL,
  `imagen` varchar(30) NOT NULL,
  `idAuto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auto_imagen`
--

INSERT INTO `auto_imagen` (`idImagen`, `imagen`, `idAuto`) VALUES
(1, 'si', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `corregimiento`
--

CREATE TABLE `corregimiento` (
  `idCorregimiento` int(11) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `idDistrito` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `distrito`
--

CREATE TABLE `distrito` (
  `idDistrito` int(11) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `idProvincia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `idProvincia` int(11) NOT NULL,
  `nombre` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte`
--

CREATE TABLE `reporte` (
  `idReporte` int(11) NOT NULL,
  `idCita` int(11) NOT NULL,
  `condicion` text NOT NULL,
  `fecha` date NOT NULL,
  `vender` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `taller`
--

CREATE TABLE `taller` (
  `idTaller` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `razonSocial` varchar(15) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `email` varchar(25) NOT NULL,
  `ubicacion` int(11) DEFAULT NULL,
  `img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `taller`
--

INSERT INTO `taller` (`idTaller`, `nombre`, `razonSocial`, `telefono`, `email`, `ubicacion`, `img`) VALUES
(2, 'Taller Foton', 'JKBC4AD', '6215-5100', 'tallerfoton@gmail.com', NULL, 'tallerFoton.png'),
(3, 'Taller Multiservicios', 'LEW651WE', '399-5486', 'tallermultiservicios@gmai', NULL, 'tallerMultiserviciosEN.png'),
(4, 'Asia Center', 'R5RF485', '6214-8520', 'asiacenterpa@gmail.com', NULL, 'asiaCenter.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellido` varchar(15) NOT NULL,
  `email` varchar(25) NOT NULL,
  `contrasena` varchar(25) NOT NULL,
  `telefono` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nombre`, `apellido`, `email`, `contrasena`, `telefono`) VALUES
(1, 'Yury', 'Agrazal', 'yury@gmail.com', '123456', '+507 6262-6262'),
(2, 'Usuario 2', 'Apellido del us', 'usuario@gmail.com', '123456', 'v');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agendarcita`
--
ALTER TABLE `agendarcita`
  ADD PRIMARY KEY (`idCita`),
  ADD KEY `idAuto` (`idAuto`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idTaller` (`idTaller`);

--
-- Indices de la tabla `auto`
--
ALTER TABLE `auto`
  ADD PRIMARY KEY (`idAuto`),
  ADD KEY `propietario` (`propietario`);

--
-- Indices de la tabla `auto_imagen`
--
ALTER TABLE `auto_imagen`
  ADD PRIMARY KEY (`idImagen`),
  ADD KEY `idAuto` (`idAuto`);

--
-- Indices de la tabla `corregimiento`
--
ALTER TABLE `corregimiento`
  ADD PRIMARY KEY (`idCorregimiento`),
  ADD KEY `idDistrito` (`idDistrito`);

--
-- Indices de la tabla `distrito`
--
ALTER TABLE `distrito`
  ADD PRIMARY KEY (`idDistrito`),
  ADD KEY `idProvincia` (`idProvincia`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`idProvincia`);

--
-- Indices de la tabla `reporte`
--
ALTER TABLE `reporte`
  ADD PRIMARY KEY (`idReporte`),
  ADD KEY `idCita` (`idCita`);

--
-- Indices de la tabla `taller`
--
ALTER TABLE `taller`
  ADD PRIMARY KEY (`idTaller`),
  ADD KEY `ubicacion` (`ubicacion`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agendarcita`
--
ALTER TABLE `agendarcita`
  MODIFY `idCita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `auto`
--
ALTER TABLE `auto`
  MODIFY `idAuto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `auto_imagen`
--
ALTER TABLE `auto_imagen`
  MODIFY `idImagen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `corregimiento`
--
ALTER TABLE `corregimiento`
  MODIFY `idCorregimiento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `distrito`
--
ALTER TABLE `distrito`
  MODIFY `idDistrito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `provincia`
--
ALTER TABLE `provincia`
  MODIFY `idProvincia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reporte`
--
ALTER TABLE `reporte`
  MODIFY `idReporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `taller`
--
ALTER TABLE `taller`
  MODIFY `idTaller` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `agendarcita`
--
ALTER TABLE `agendarcita`
  ADD CONSTRAINT `agendarcita_ibfk_1` FOREIGN KEY (`idTaller`) REFERENCES `taller` (`idTaller`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `agendarcita_ibfk_3` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `agendarcita_ibfk_4` FOREIGN KEY (`idAuto`) REFERENCES `auto` (`idAuto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `auto`
--
ALTER TABLE `auto`
  ADD CONSTRAINT `auto_ibfk_1` FOREIGN KEY (`propietario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `auto_imagen`
--
ALTER TABLE `auto_imagen`
  ADD CONSTRAINT `auto_imagen_ibfk_1` FOREIGN KEY (`idAuto`) REFERENCES `auto` (`idAuto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `corregimiento`
--
ALTER TABLE `corregimiento`
  ADD CONSTRAINT `corregimiento_ibfk_1` FOREIGN KEY (`idDistrito`) REFERENCES `distrito` (`idDistrito`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `distrito`
--
ALTER TABLE `distrito`
  ADD CONSTRAINT `distrito_ibfk_1` FOREIGN KEY (`idProvincia`) REFERENCES `provincia` (`idProvincia`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `taller`
--
ALTER TABLE `taller`
  ADD CONSTRAINT `taller_ibfk_1` FOREIGN KEY (`ubicacion`) REFERENCES `corregimiento` (`idCorregimiento`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
