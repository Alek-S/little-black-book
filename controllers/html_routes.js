'use strict';

// Require Models
const db = require('../models');

module.exports = function(app) {

	//===HTML ROUTES===
	app.get('/', (req,res)=>{
		res.send('blah');
	});

};