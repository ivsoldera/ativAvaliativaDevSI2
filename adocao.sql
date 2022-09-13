START TRANSACTION;
CREATE DATABASE IF NOT EXISTS `adocao`;
USE `adocao`;

CREATE TABLE `animals` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `idUserAdotou` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `animals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUserAdotou` (`idUserAdotou`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `animals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
