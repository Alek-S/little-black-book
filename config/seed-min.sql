INSERT INTO little_black_book.Users (email, password, gender, age, createdAt, updatedAt) VALUES ('superman@gmail.com', '$2a$12$GiTZl9r8nTH6e4M0rlwQ9e7sPbKpf5uPWLUTsV4RsgRXsbda245Wi', 'male', 29, '2017-05-01 20:33:47', '2017-05-01 20:33:47');
INSERT INTO little_black_book.Users (email, password, gender, age, createdAt, updatedAt) VALUES ('batman@aol.com', '$2a$12$noarNoZKu5jpWxAjSaZxrOrsu6PwGqGkiqddThmP/8jm9gQ1fLoh.', 'male', 30, '2017-05-01 20:33:47', '2017-05-01 20:33:47');
INSERT INTO little_black_book.Users (email, password, gender, age, createdAt, updatedAt) VALUES ('spiderman@gmail.com', '$2a$12$Zt9NgmgWkJ9r6a067l2zSeg3HNF1BUR5Eu//X4iP3CDawIeMXPKcG', 'male', 26, '2017-05-01 20:33:47', '2017-05-01 20:33:47');
INSERT INTO little_black_book.Users (email, password, gender, age, createdAt, updatedAt) VALUES ('wonderwoman@gmail.com', '$2a$12$It.RtJTBs9/cXcBMbzkyh.Vf0u2DLkImKJURFsTpdq8tqsXGDJR.u', 'female', 42, '2017-05-01 20:33:47', '2017-05-01 20:33:47');
INSERT INTO little_black_book.Users (email, password, gender, age, createdAt, updatedAt) VALUES ('roryg@hotmail.com', '$2a$12$m7EEnGiHPjOnPxZ9PcuMQeQQuGXcoqloOI7p5M7803oewUlXUN.U.', 'female', 28, '2017-05-01 20:33:47', '2017-05-01 20:33:47');

INSERT INTO little_black_book.Mates (name, platform, createdAt, updatedAt, UserId) VALUES ('Lois Lane', 'Tinder', '2017-05-22 20:39:47', '2017-05-22 20:39:47', 1);
INSERT INTO little_black_book.Mates (name, platform, createdAt, updatedAt, UserId) VALUES ('Catwoman', 'Tinder', '2017-05-22 20:39:47', '2017-05-22 20:39:47', 3);
INSERT INTO little_black_book.Mates (name, platform, createdAt, updatedAt, UserId) VALUES ('Mary Jane', 'Bumble', '2017-05-22 20:39:47', '2017-05-22 20:39:47', 4);
INSERT INTO little_black_book.Mates (name, platform, createdAt, updatedAt, UserId) VALUES ('Bob Hope', 'Bumble', '2017-05-22 20:39:47', '2017-05-22 20:39:47', 5);
INSERT INTO little_black_book.Mates (name, platform, createdAt, updatedAt, UserId) VALUES ('Bob Ross', 'Tinder', '2017-05-22 20:39:47', '2017-05-22 20:39:47', 5);
INSERT INTO little_black_book.Mates (name, platform, createdAt, updatedAt, UserId) VALUES ('Logan', 'Match', '2017-05-22 20:39:47', '2017-05-22 20:39:47', 6);

INSERT INTO little_black_book.Events (what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) VALUES ('movie', '2017-05-22 00:00:00', 'logan theatre', 4, '2017-05-22 20:51:59', '2017-05-22 20:51:59', 1, 2);
INSERT INTO little_black_book.Events (what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) VALUES ('drinks', '2017-05-22 00:00:00', 'Slippery Slope', 3, '2017-05-22 20:51:59', '2017-05-22 20:51:59', 3, 3);
INSERT INTO little_black_book.Events (what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) VALUES ('bowling', '2017-05-22 00:00:00', 'King Lanes', 5, '2017-05-22 20:51:59', '2017-05-22 20:51:59', 4, 4);
INSERT INTO little_black_book.Events (what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) VALUES ('concert', '2017-05-22 00:00:00', 'St Vincent', 3, '2017-05-22 20:51:59', '2017-05-22 20:51:59', 5, 6);
INSERT INTO little_black_book.Events (what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) VALUES ('fancy dinner', '2017-05-22 00:00:00', 'RPM', 3, '2017-05-22 20:51:59', '2017-05-22 20:51:59', 6, 7);