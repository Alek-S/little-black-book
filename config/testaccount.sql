insert into little_black_book.Users (id, email, password, gender, age, state, zip, firstName, lastName, createdAt, updatedAt) 
	values (1001, 'noradbase@gmail.com', '$2a$12$m7EEnGiHPjOnPxZ9PcuMQeQQuGXcoqloOI7p5M7803oewUlXUN.U.', 'Male', 31, 'UT', '84152', 'Whitby', 'Diwell', '2016-08-26', '2016-10-17');

insert into little_black_book.Mates (id, firstName, lastName, platform, createdAt, updatedAt, userId) 
	values (1001, 'Cynthie', 'Albery', 'OKcupid', '2017-05-24', '2017-05-24', 1001);
insert into little_black_book.Mates (id, firstName, lastName, platform, createdAt, updatedAt, userId) 
	values (1002, 'Stacey', 'Thurstance', 'OKcupid', '2017-05-24', '2017-05-24', 1001);
insert into little_black_book.Mates (id, firstName, lastName, platform, createdAt, updatedAt, userId) 
	values (1003, 'Conrad', 'Tschursch', 'OKcupid', '2017-05-24', '2017-05-24', 1001);


insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) 
	values (1001, 'drinks', '2017-05-29', '22 Arizona Lane', 5, '2017-05-29', '2017-05-25', 1001, 1001);
insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) 
	values (1002, 'museum', '2017-05-27', '69 Oak Road', 1, '2017-05-27', '2017-05-27', 1001, 1001);
insert into little_black_book.Events (id, what, `when`, `where`, rating, createdAt, updatedAt, UserId, MateId) 
	values (1003, 'concert', '2017-05-29', '9 Porter Plaza', 5, '2017-05-29', '2017-05-30', 1001, 1002);

