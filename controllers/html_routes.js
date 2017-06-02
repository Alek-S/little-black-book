'use strict';
const path = require('path');
const db = require('../models');

module.exports = function(app) {

	//===HTML ROUTES===
	
	// index will be the login splash page
	app.get('/', function(req, res) {
		console.log(`Session ID: ${req.session.id}`);
		console.log( JSON.stringify(req.session,null,2));

		if(!req.session.loggedIn){
			res.sendFile(path.join(__dirname, '../public/login.html'));
		}else{
			res.redirect('/user');
		}
	});


	// register
	app.get('/register', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/register.html'));
	});

	// dashboard
	app.get('/dashboard', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/dashboard.html'));
	});

	//front log in page
	app.get('/login', function(req, res) {
		req.session.destroy;

		if(!req.session.loggedIn){
			res.sendFile(path.join(__dirname, '../public/login.html'));
		}else{
			req.session.destroy;
			req.session.loggedIn = undefined;
			res.redirect('/');
		}
	});

	//about page
	app.get('/about', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/about.html'));
	});

	//front log in page
	app.get('/user', function(req, res) {

		if(!req.session.loggedIn){
			res.redirect('/');
		}else{
			db.User.findOne({
				where: { id: req.session.userId},
				include: [db.Mate, db.Event]
			}).then((data)=>{
				// console.log(JSON.stringify(data,null,2));
				// res.render('index', {user: data});
				res.sendFile(path.join(__dirname, '../public/user.html'));
			})
		}
	});

	//logout
	app.get('/logout', function(req, res) {
		console.log('logout...')
		req.session.destroy;
		res.sendFile(path.join(__dirname, '../public/login.html'));
	});

};