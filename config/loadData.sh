#!/bin/sh

mysql -u root little_black_book < little_black_book.Users.sql
mysql -u root little_black_book < little_black_book.Mates.sql
mysql -u root little_black_book < little_black_book.Events.sql