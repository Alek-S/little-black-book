'use strict';

const db = require('../models');
const bcrypt = require('bcrypt');

module.exports = function(app) {

	//===API ROUTES===

	//get user by ID
	app.get('/api/user/:id', (req, res)=>{
		
		if(req.params.id !== 'all'){
			db.User.findOne({
				where: { id: req.params.id}
			}).then( (result)=>{
				res.json(result);
			});
		}else{
			db.User.findAll({
			}).then( (result)=>{
				res.json(result);
			});
		}
	});

	// create new user
	app.post('/api/user/new', (req, res)=>{
		let passwordPlain = req.body.password;
		let saltRounds = 12;

		bcrypt.hash(passwordPlain, saltRounds, (err, newHash) => {
			if(err){
				console.log(err);
			}

			console.log(req.body);
			console.log(newHash);

			db.User.create({
				email: req.body.email,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				password: newHash,
				gender: req.body.gender,
				age: req.body.age,
				state: req.body.state,
				zip: req.body.zip
			}).then( (result)=>{
				res.json(true);
			});

		});
	});


	//create new mate
	app.post('/api/mate/:name/:platform/:userID', (req, res)=>{
		db.Mate.create({
			name: req.params.name,
			platform: req.params.platform,
			UserId: req.params.userID,
		}).then( (result)=>{
			res.json(result);
		});
	});

	//delete mate
	app.delete('/api/mate/:id', (req, res)=>{
		db.Mate.destroy({
			where: { id: req.params.id }
		}).then( (result)=>{
			res.json(result);
		});
	});

	app.post('/api/password/', (req,res)=>{
		let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let passwordToCheck  = req.body.password;
		let email = req.body.email;
		
		//if email is actually an email
		if(emailRegEx.test(email) ){
			db.User.findOne({
				attribute: ['id','firstName','password'],
				where: {email: email}
			}).then( (account)=>{
				bcrypt.compare(passwordToCheck, account.password, (err, result) => {
					if(result === true){
						req.session.loggedIn = true;
						req.session.userId = account.id;
						req.session.email = account.email;
						req.session.firstName = account.firstName;
						console.log(req.session);
					}else{
						req.session.destroy;
					}
					res.send(result); //true false if password works
				});
			});
		}else{
			//someone being shady with the emails
			res.send(false);
		}

	});

	//create new event
	// app.post('/api/event/:what/:when/:where/:rating/:UserID/:MateID', (req, res)=>{
	// 	db.Mate.create({
	// 		what: req.params.what,
	// 		when: req.params.when,
	// 		where: req.params.where,
	// 		rating: req.params.rating,
	// 		UserId: req.params.userID,
	// 		MateId: req.params.MateID,
	// 	}).then( (result)=>{
	// 		res.json(result);
	// 	});
	// });

};