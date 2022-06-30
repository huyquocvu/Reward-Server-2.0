-- seed stuff

USE testdb;

INSERT INTO
    user (fullName, email, rfid)
VALUES (
        'roger',
        'roger@gmail.com',
        '000000000000000000000001'
    );

INSERT INTO
    user (fullName, email, rfid)
VALUES (
        'brenda',
        'brenda@gmail.com',
        '000000000000000000000002'
    );

INSERT INTO
    user (fullName, email, rfid)
VALUES (
        'ben',
        'benz@gmail.com',
        '000000000000000000000003'
    );

INSERT INTO
    badge (badgeName, description)
VALUES (
        'tater-tots',
        'gets tater tots from vendor'
    );

INSERT INTO
    badge (badgeName, description)
VALUES (
        'ice-cream',
        'i scream for ice cream'
    );

INSERT INTO
    badge (badgeName, description)
VALUES ('sunglasses', 'sunny shades');

INSERT INTO userBadge (userId, badgeId) VALUES (1, 1);

INSERT INTO userBadge (userId, badgeId) VALUES (1, 2);

INSERT INTO userBadge (userId, badgeId) VALUES (1, 3);

INSERT INTO userBadge (userId, badgeId) VALUES (2, 3);

INSERT INTO userBadge (userId, badgeId) VALUES (3, 1);