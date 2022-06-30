-- schema definitions

DROP DATABASE testdb;

CREATE DATABASE IF NOT EXISTS testdb;

USE testdb;

CREATE TABLE
    user (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        fullName varchar(50) NOT NULL,
        email varchar(50) UNIQUE NOT NULL,
        phoneNumber varchar(50) UNIQUE,
        rfid varchar(24) UNIQUE
    );

CREATE TABLE
    badge (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        badgeName VARCHAR(50) UNIQUE,
        description TINYTEXT
    );

CREATE TABLE
    userBadge (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        isCollected BOOLEAN DEFAULT false,
        collectedAt DATETIME,
        isRedeemed BOOLEAN DEFAULT false,
        redeemedAt DATETIME,
        userId INT,
        FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE,
        badgeId INT,
        FOREIGN KEY (badgeId) REFERENCES badge(id) ON DELETE CASCADE
    );