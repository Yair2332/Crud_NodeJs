-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-02-2025 a las 03:08:17
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud_nodejs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `documento` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `puesto` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `documento`, `nombre`, `apellido`, `puesto`) VALUES
(1, 45615187, 'Yair', 'Lezcano', 'Desarrollador'),
(2, 32615187, 'Samir', 'Jupiter', 'Administrador'),
(3, 12345678, 'Juan', 'Pérez', 'Gerente'),
(4, 23456789, 'María', 'Gómez', 'Analista'),
(5, 34567890, 'Carlos', 'López', 'Desarrollador'),
(6, 45678901, 'Ana', 'Martínez', 'Diseñadora'),
(7, 56789012, 'Pedro', 'Fernández', 'Administrador'),
(8, 67890123, 'Laura', 'Ramírez', 'Contadora'),
(9, 78901234, 'José', 'Díaz', 'Marketing'),
(10, 89012345, 'Sofía', 'Torres', 'Administradora'),
(11, 90123456, 'Diego', 'Suárez', 'Coordinador'),
(17, 8078564, 'Hajshsiai', 'JJdisjajak', 'Coordinador'),
(18, 80888556, 'Tatat', 'Oioi', 'Administrador');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `documento` (`documento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
