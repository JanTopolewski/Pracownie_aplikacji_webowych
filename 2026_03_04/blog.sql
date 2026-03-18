-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2026 at 03:06 AM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `content` varchar(1000) NOT NULL,
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `createdAt`, `content`, `postId`) VALUES
(1, '2026-03-18 00:58:09.073', 'super', 2),
(2, '2026-03-18 00:58:29.861', 'Dobrze wiedzieć', 6),
(3, '2026-03-18 01:20:45.504', 'Super, działa!', 4),
(4, '2026-03-18 01:21:09.724', 'Dobrze wiedzieć:)', 5);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `title` varchar(255) NOT NULL,
  `content` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `createdAt`, `title`, `content`) VALUES
(1, '2026-03-17 23:38:16.422', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.\r\nNunc viverra imperdiet enim. Fusce est. Vivamus a tellus.\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.\r\nAenean nec lorem. In porttitor. Donec laoreet nonummy augue.\r\nSuspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.\r\n'),
(2, '2026-03-17 23:40:16.350', 'Przepis na bigos', 'Skłdniki\r\n\r\n- 3 kg kapusty kiszonej\r\n- 20 dag słoniny\r\n- 50 dag karczku\r\n- 50 dag wołowiny od kotleta\r\n- 30 dag kiełbasy zwyczajnej\r\n- 20 dag boczku wędzonego\r\n- 5 grzybów suszonych\r\n- koncentrat pomidorowy\r\n- papryka słodka w proszku\r\n- 1 czubata łyżka majeranku\r\n- ziele angielskie\r\n- liść laurowy\r\n- 4 duże cebule\r\n\r\nKapustę kiszoną 2 razy zagotować w wielkim garze, odlać wodę. W osobnym garnczku przetopić słoninę i wrzucić pokrojone kawałki mięsa. Mięso zrumienić i dodać 2 pokrojone w plastry cebule. Poddusić i dolać trochę wody. Gotować około 15 minut. Powstanie z tego gulasz. Po ugotowaniu wlać gulasz do kapusty kiszonej, wrzucić parę listków laurowych i ziele angielskie.\r\nTeraz przystępujemy do krojenia kiełbasy i boczku. Wrzucamy na roztopioną słoninę i dodajemy pokrojoną cebulę. Całość dusimy i wrzucamy do gara z kapustą.\r\nGrzyby namoczyć 1 godzinę i pokroić w paski. Wrzucić do gara z kapustą. Wszystko gotować 2 godziny, dodać koncentrat pomidorowy, pół paczki sproszkowanej papryki. Ponownie gotować 2 godziny.\r\nPod koniec gotowania dodać majeranek i zrobić zasmażkę z 3 łyżek mąki. Bigos będzie jeszcze smaczniejszy, gdy na drugi dzień podgotujemy go ponownie.'),
(3, '2026-03-17 23:50:33.267', 'Przepis na naleśniki', 'Składniki na pyszne naleśniki\r\n\r\n    1 szklanka mąki pszennej (zwykłej);\r\n    1 jajko;\r\n    1 szklanka mleka;\r\n    ½ szklanki letniej wody gazowanej;\r\n    szczypta soli;\r\n    olej roślinny do smażenia;\r\n\r\nNaleśniki, krok po kroku\r\n\r\nDo wysokiego naczynia wsypujemy mąkę i wbijamy jajko. Dolewamy mleko i miksujemy przez kilka minut, aż masa będzie gładka i bez grudek. Następnie dolewamy wodę gazowaną oraz dwie łyżki oleju i dalej miksujemy. Gdy ciasto jest gotowe, rozgrzewamy patelnię z odrobiną oleju. Pół łyżki wazowej ciasta wylewamy na patelnię i smażymy naleśniki z obu stron, aż będą złociste.'),
(4, '2026-03-17 23:52:44.277', 'Przepis na gofry', 'Składniki na 8 gofrów\r\n\r\n    1 i 1/2 szklanki (240 g) mąki pszennej\r\n    1,5 łyżeczki proszku do pieczenia\r\n    szczypta soli\r\n    2 łyżeczki cukru pudru lub kryształu\r\n    1 łyżka cukru wanilinowego\r\n    1 i 1/3 szklanki (350 ml) mleka\r\n    2 jaja\r\n    0,5 szklanki (125 ml) oleju roślinnego lub roztopionego masła\r\n* 1 szklanka = 250 ml\r\n\r\nPrzygotowanie\r\n\r\n    Mąkę wsypać do miski, dodać proszek do pieczenia, sól, cukier, cukier wanilinowy. Wszystko wymieszać.\r\n    Dodać mleko, jajka oraz olej roślinny lub roztopione masło. Zmiksować mikserem lub wymieszać rózgą na gładką masę. Ciasto można odstawić aby odpoczęło (na około 15 minut), ale nie jest to konieczne.\r\n    Rozgrzać gofrownicę. Gofry piec na złoty kolor przez około 3 - 3,5 minuty lub przez czas podany w instrukcji gofrownicy. Nakładamy ciasto chochlą, następnie wypukłą jej stroną rozprowadzamy ciasto dokładnie po całej powierzchni.\r\n    Gofry po upieczeniu odkładać na metalową kratkę.\r\n    Posypać cukrem pudrem.\r\n    Podawać z ulubionymi dodatkami np. marmoladą, dżemem, syropem klonowym, owocami i bitą śmietaną.'),
(5, '2026-03-17 23:54:52.902', 'Historia Poznania', 'Poznań, założony w X wieku na Ostrowie Tumskim, jest jednym z najstarszych miast Polski i kolebką państwa piastowskiego. Po lokacji na lewym brzegu Warty w 1253 r. stał się silnym ośrodkiem handlowym. Miasto przeżyło okresy dynamicznego rozwoju (renesans), pod zaborami pruskimi, a w 1956 r. było miejscem pierwszego zrywu robotniczego w PRL.'),
(6, '2026-03-18 00:00:39.471', 'Opis pythona', 'Python – język programowania wysokiego poziomu ogólnego przeznaczenia. Posiada rozbudowany pakiet bibliotek standardowych, którego ideą przewodnią jest czytelność i klarowność kodu źródłowego. Jego składnia cechuje się przejrzystością i zwięzłością.\r\n\r\nPython wspiera różne paradygmaty programowania: obiektowy, imperatywny oraz w mniejszym stopniu funkcyjny. Posiada w pełni dynamiczny system typów i automatyczne zarządzanie pamięcią, będąc w tym podobnym do języków Perl, Ruby, Scheme czy Tcl. Podobnie jak inne języki dynamiczne jest często używany jako język skryptowy. Interpretery Pythona są dostępne na wiele systemów operacyjnych.');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('e0447c67-c18c-43bd-becf-f39ae643b1c2', '8559e767efc4e7ec42c44ed6fc388061a8e7daee6668c08d80df39b83b352248', '2026-03-17 22:31:28.554', '20260317223128_init', NULL, NULL, '2026-03-17 22:31:28.531', 1);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Comment_postId_fkey` (`postId`);

--
-- Indeksy dla tabeli `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `Comment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
