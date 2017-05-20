'use strict';
const Sequelize = require('sequelize');
const connection = require('../config/connection');

let User = connection.define('Event', 
	{
		email: Sequelize.STRING,
		password: Sequelize.STRING,
		gender: Sequelize.STRING,
		age: Sequelize.INTEGER
	}
);

User.sync(); 
module.exports = User;