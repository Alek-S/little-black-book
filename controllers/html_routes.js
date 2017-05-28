'use strict';
const path = require('path');

module.exports = function(app) {

	//===HTML ROUTES===
	
	// index will be the login splash page
	app.get('/', function(req, res) {
		console.log(`Session ID: ${req.session.id}`);
		console.log( JSON.stringify(req.session,null,2));

		if(!req.session.loggedIn){
			res.sendFile(path.join(__dirname, '../public/login.html'));
		}else{
			res.sendFile(path.join(__dirname, '../public/user.html'));
		}
	});

	// register
	app.get('/register', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/register.html'));
	});

};