'use strict';
const path = require('path');

module.exports = function(app) {

	//===HTML ROUTES===
	
	//index will be the login splash page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});

};