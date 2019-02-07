-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'products'
-- 
-- ---

DROP TABLE IF EXISTS `products`;
		
CREATE TABLE `products` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `product_name` VARCHAR(100) NULL DEFAULT NULL,
  `company` VARCHAR(50) NULL DEFAULT NULL,
  `catagory` VARCHAR(50) NULL DEFAULT NULL,
  `price` DECIMAL(1000) NULL DEFAULT NULL,
  `stockCount` INT(20) NULL DEFAULT NULL,
  `best_seller` SMALLINT(1) NULL DEFAULT NULL,
  `rating` DECIMAL(10) NULL DEFAULT NULL,
  `review_count` BIGINT(1000) NULL DEFAULT NULL,
  `question_count` BIGINT(1000) NULL DEFAULT NULL
);

-- ---
-- Table 'primary_images'
-- 
-- ---

DROP TABLE IF EXISTS `primary_images`;
		
CREATE TABLE `primary_images` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `image_name` VARCHAR(20) NULL DEFAULT NULL,
  `imgUrl` VARCHAR(100) NULL DEFAULT NULL,
  `id_products` INTEGER NULL DEFAULT NULL,
  FOREIGN KEY(id_products) REFERENCES products(id)
);

-- ---
-- Table 'options'
-- 
-- ---

DROP TABLE IF EXISTS `options`;
		
CREATE TABLE `options` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `type` VARCHAR(20) NULL DEFAULT NULL,
  `option_name` VARCHAR(20) NULL DEFAULT NULL,
  `id_products` INTEGER NULL DEFAULT NULL,
  FOREIGN KEY(id_products) REFERENCES products(id)
);

-- ---
-- Table 'variations'
-- 
-- ---

DROP TABLE IF EXISTS `variations`;
		
CREATE TABLE `variations` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `var_name` VARCHAR(20) NULL DEFAULT NULL,
  `imgUrl` VARCHAR(100) NULL DEFAULT NULL,
  `id_options` INTEGER NULL DEFAULT NULL,
  `id_products` INTEGER NULL DEFAULT NULL,
  FOREIGN KEY(id_options) REFERENCES options(id)
  FOREIGN KEY(id_products) REFERENCES products(id)
);

-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `primary_images` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `options` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `variations` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `products` (`id`,`name`,`company`,`catagory`,`price`,`stockCount`,`best_seller`,`rating`,`review_count`,`question_count`) VALUES
-- ('','','','','','','','','','');
-- INSERT INTO `primary_images` (`id`,`name`,`imgUrl`,`id_product`) VALUES
-- ('','','','');
-- INSERT INTO `options` (`id`,`type`,`option_name`,`id_product`) VALUES
-- ('','','','');
-- INSERT INTO `variations` (`id`,`name`,`imageUrl`,`id_options`,`id_product`) VALUES
-- ('','','','','');