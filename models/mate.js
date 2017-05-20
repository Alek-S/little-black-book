'use strict';
const Sequelize = require('sequelize');
const connection = require('../config/connection');

let Mate = connection.define('Event', 
	{
		userID: Sequelize.STRING,
		name: Sequelize.STRING,
		app: Sequelize.STRING
	}
);

Mate.sync(); 
module.exports = Mate;