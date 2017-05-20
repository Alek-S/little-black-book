'use strict';
const Sequelize = require('sequelize');
const connection = require('../config/connection');

let Event = connection.define('Event', 
	{
		userID: Sequelize.STRING,
		mateID: Sequelize.STRING,
		what: Sequelize.STRING,
		when: Sequelize.DATE,
		where: Sequelize.STRING,
		rating: Sequelize.INTEGER,
	},
);

Event.sync(); 
module.exports = Event;