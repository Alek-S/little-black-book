insert into little_black_book.Users (id, email, password, gender, age, state, zip, firstName, lastName, createdAt, updatedAt) values (1004, 'lexie.grey@gmail.com', 'tvshow', 'Female', 33, 'WA', '98101', 'Lexie', 'Grey', '2017-05-12', '2017-05-13');

insert into little_black_book.Mates (id, firstName, lastName, platform, createdAt, updatedAt, userId) values (2001, 'Jackson', 'Avery', 'CoffeeMeetsBagel', '2017-05-24', '2017-05-24', 1004);
insert into little_black_book.Mates (id, firstName, lastName, platform, createdAt, updatedAt, userId) values (2002, 'Alex', 'Karev', 'Tinder', '2017-05-24', '2017-05-24', 1004);
insert into little_black_book.Mates (id, firstName, lastName, platform, createdAt, updatedAt, userId) values (2003, 'Andrew', 'Deluca', 'Bumble', '2017-05-24', '2017-05-24', 1004);
insert into little_black_book.Mates (id, firstName, lastName, platform, createdAt, updatedAt, userId) values (2004, 'Mark', 'Sloan', 'Tinder', '2017-05-24', '2017-05-24', 1004);
insert into little_black_book.Mates (id, firstName, lastName, platform, createdAt, updatedAt, userId) values (2005, 'William', 'Thrope', 'Bumble', '2017-05-24', '2017-05-24', 1004);

insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (1, 'dinner', '2017-05-01', 'Lula', 3, '2017-05-29', '2017-05-25', 1004, 2001);
insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (2, 'bowling', '2017-05-02', 'Diversy River Bowl', 4, '2017-05-29', '2017-05-25', 1004, 2001);
insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (3, 'drinks', '2017-05-03', 'Parts and Labor', 2, '2017-05-29', '2017-05-25', 1004, 2001);
insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (4, 'drinks', '2017-05-05', 'Band of Bohemia', 2, '2017-05-29', '2017-05-25', 1004, 2002);
insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (5, 'movie', '2017-05-08', 'Logan Theatre', 1, '2017-05-29', '2017-05-25', 1004, 2002);
insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (6, 'outdoor adventure', '2017-05-07', 'Maggie Dailey Park', 2, '2017-05-29', '2017-05-25', 1004, 2003);
insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (7, 'drinks', '2017-05-12', '3 Dots and a Dash', 2, '2017-05-29', '2017-05-25', 1004, 2003);
insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (8, 'drinks', '2017-05-16', 'Revel Room', 4, '2017-05-29', '2017-05-25', 1004, 2004);
insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (9, 'drinks', '2017-05-17', 'Bar Siena', 4, '2017-05-29', '2017-05-25', 1004, 2004);
insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (10, 'drinks', '2017-05-20', 'Chicago Athletic Association Hotel', 5, '2017-05-29', '2017-05-25', 1004, 2004);
insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (11, 'dinner', '2017-05-21', 'Gather', 3, '2017-05-29', '2017-05-25', 1004, 2004);
insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) values (12, 'drinks', '2017-05-29', 'Fountainhead', 5, '2017-05-29', '2017-05-25', 1004, 2005);
