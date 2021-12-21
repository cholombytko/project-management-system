DROP SCHEMA `mydb`;
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`team`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `team` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_project_team_idx` (`team` ASC) VISIBLE,
  CONSTRAINT `fk_project_team`
    FOREIGN KEY (`team`)
    REFERENCES `mydb`.`team` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `deadline` DATETIME NULL,
  `project` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_task_project_idx` (`project` ASC) VISIBLE,
  CONSTRAINT `fk_task_project`
    FOREIGN KEY (`project`)
    REFERENCES `mydb`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`member` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `team_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_member_team_idx` (`team_id` ASC) VISIBLE,
  INDEX `fk_member_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_member_team`
    FOREIGN KEY (`team_id`)
    REFERENCES `mydb`.`team` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_member_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`artefact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`artefact` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `link` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`association`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`association` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tag` VARCHAR(45) NULL,
  `task` INT NOT NULL,
  `artefact` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_association_task_idx` (`task` ASC) VISIBLE,
  INDEX `fk_association_artefact_idx` (`artefact` ASC) VISIBLE,
  CONSTRAINT `fk_association_task`
    FOREIGN KEY (`task`)
    REFERENCES `mydb`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_association_artefact`
    FOREIGN KEY (`artefact`)
    REFERENCES `mydb`.`artefact` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`actiontype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`actiontype` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`grant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`grant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `member` INT NOT NULL,
  `actiontype` INT NOT NULL,
  `role` INT NULL,
  `task` INT NULL,
  `artefact` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_grant_member_idx` (`member` ASC) VISIBLE,
  INDEX `fk_grant_actiontype_idx` (`actiontype` ASC) VISIBLE,
  INDEX `fk_grant_role_idx` (`role` ASC) VISIBLE,
  INDEX `fk_grant_task_idx` (`task` ASC) VISIBLE,
  INDEX `fk_grant_artefact_idx` (`artefact` ASC) VISIBLE,
  CONSTRAINT `fk_grant_member`
    FOREIGN KEY (`member`)
    REFERENCES `mydb`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_grant_actiontype`
    FOREIGN KEY (`actiontype`)
    REFERENCES `mydb`.`actiontype` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_grant_role`
    FOREIGN KEY (`role`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_grant_task`
    FOREIGN KEY (`task`)
    REFERENCES `mydb`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_grant_artefact`
    FOREIGN KEY (`artefact`)
    REFERENCES `mydb`.`artefact` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`assignment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`assignment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `member` INT NOT NULL,
  `role` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_assignment_member_idx` (`member` ASC) VISIBLE,
  INDEX `fk_assignment_role_idx` (`role` ASC) VISIBLE,
  CONSTRAINT `fk_assignment_member`
    FOREIGN KEY (`member`)
    REFERENCES `mydb`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_assignment_role`
    FOREIGN KEY (`role`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`actionlog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`actionlog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `grant` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_actionlog_grant_idx` (`grant` ASC) VISIBLE,
  CONSTRAINT `fk_actionlog_grant`
    FOREIGN KEY (`grant`)
    REFERENCES `mydb`.`grant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`team`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`team` (`name`) VALUES ('La Baton');
INSERT INTO `mydb`.`team` (`name`) VALUES ('De Cheburek');

COMMIT;

