insert into Users (id, email, password, gender, age, state, zip, firstName, lastName, createdAt, updatedAt) values (1001, 'lexie.grey@gmail.com', '$2a$12$m7EEnGiHPjOnPxZ9PcuMQeQQuGXcoqloOI7p5M7803oewUlXUN', 'Female', 33, 'WA', '98101', 'Lexie', 'Grey', '2017-05-12', '2017-05-13');

insert into Mates (id, firstName, lastName, platform, createdAt, updatedAt, userId) values (1001, 'Jackson', 'Avery', 'CoffeeMeetsBagel', '2017-05-24', '2017-05-24', 1001);
insert into Mates (id, firstName, lastName, platform, createdAt, updatedAt, userId) values (1002, 'Alex', 'Karev', 'Tinder', '2017-05-24', '2017-05-24', 1001);
insert into Mates (id, firstName, lastName, platform, createdAt, updatedAt, userId) values (1003, 'Andrew', 'Deluca', 'Bumble', '2017-05-24', '2017-05-24', 1001);
insert into Mates (id, firstName, lastName, platform, createdAt, updatedAt, userId) values (1004, 'Mark', 'Sloan', 'Tinder', '2017-05-24', '2017-05-24', 1001);
insert into Mates (id, firstName, lastName, platform, createdAt, updatedAt, userId) values (1005, 'William', 'Thrope', 'Bumble', '2017-05-24', '2017-05-24', 1001);

insert into Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (1001, 'dinner', '2017-05-01', 'Lula', 3, '2017-05-29', '2017-05-25', 1001, 1001);
insert into Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (1002, 'bowling', '2017-05-02', 'Diversy River Bowl', 4, '2017-05-29', '2017-05-25', 1001, 1001);
insert into Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (1003, 'drinks', '2017-05-03', 'Parts and Labor', 2, '2017-05-29', '2017-05-25', 1001, 1001);
insert into Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (1004, 'drinks', '2017-05-05', 'Band of Bohemia', 2, '2017-05-29', '2017-05-25', 1001, 1002);
insert into Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (1005, 'movie', '2017-05-08', 'Logan Theatre', 1, '2017-05-29', '2017-05-25', 1001, 1002);
insert into Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (1006, 'outdoor adventure', '2017-05-07', 'Maggie Dailey Park', 2, '2017-05-29', '2017-05-25', 1001, 1003);
insert into Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (1007, 'drinks', '2017-05-12', '3 Dots and a Dash', 2, '2017-05-29', '2017-05-25', 1001, 1003);
insert into Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (1008, 'drinks', '2017-05-16', 'Revel Room', 4, '2017-05-29', '2017-05-25', 1001, 1004);
insert into Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (1009, 'drinks', '2017-05-17', 'Bar Siena', 4, '2017-05-29', '2017-05-25', 1001, 1004);
insert into Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (1010, 'drinks', '2017-05-20', 'Chicago Athletic Association Hotel', 5, '2017-05-29', '2017-05-25', 1001, 1004);
insert into Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (1011, 'dinner', '2017-05-21', 'Gather', 3, '2017-05-29', '2017-05-25', 1001, 1004);
insert into Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (1012, 'drinks', '2017-05-29', 'Fountainhead', 5, '2017-05-29', '2017-05-25', 1001, 1005);
