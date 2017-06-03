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

	//get current session user 
	app.get('/api/current/user', (req, res)=>{
		
		db.User.findOne({
			where: { id: req.session.userId}
		}).then( (result)=>{
			res.json(result.firstName);
		});

	});

	//get mates for user
	app.get('/api/mates/user', (req,res)=>{

		db.Mate.findAll({
			where: { UserId: req.session.userId}
		}).then( (result)=>{
			res.json(result);
		});
	});

	//get avg rating for mate
	app.get('/api/rating/:mateId', (req,res)=>{

		db.sequelize.query("Select AVG( Events.rating) AS avg FROM Users INNER JOIN Events ON Users.id = Events.UserId WHERE Users.id ='"+req.session.userId+"' AND Events.MateId = '"+req.params.mateId+"';").then((result)=>{
			res.json(result[0]);
		});

	});


	//get events for user and mate
	app.get('/api/events/:mateID', (req,res)=>{

		db.Event.findAll({
			where: { MateId: req.params.mateID}
		}).then( (result)=>{
			res.json(result);
		});

	});


	//post mate for user
	app.post('/api/mate/new', (req, res)=>{
		let firstName = req.body.firstName;
		let lastName = req.body.lastName;
		let platform = req.body.platform;

		db.Mate.create({
			firstName: firstName,
			lastName: lastName,
			platform: platform,
			UserId: req.session.userId,
		}).then( (result)=>{
			res.send('success');
		});

	});


	//post event for user and mate
	app.post('/api/event/new', (req, res)=>{
		let what = req.body.what;
		let when = req.body.when;
		let where = req.body.where;
		let rating = req.body.rating;
		let mateId = req.body.mateId;

		console.log(what)
		console.log(when)
		console.log(where)
		console.log(rating)
		console.log(mateId)

		db.Event.create({
			what: what,
			when: when,
			where: where,
			rating: rating,
			MateId: mateId,
			UserId: req.session.userId
		}).then( (result)=>{
				res.send('success');
		}).catch( (err)=> {
 			console.log(err);	
		});

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

	//delete mate
	// app.delete('/api/mate/:id', (req, res)=>{
	// 	db.Mate.destroy({
	// 		where: { id: req.params.id }
	// 	}).then( (result)=>{
	// 		res.json(result);
	// 	}).catch( (err)=> {
 // 			console.log(err);	
	// 	});;
	// // });

	//delete event
	app.post('/delete/event/:id', (req, res)=>{
		console.log('Event Delete requested');

		if(req.session.loggedIn === true){

			db.Event.destroy({
				where: { id: req.params.id }
			}).then( (result)=>{
				res.send('success');
			}).catch( (err)=> {
	 			console.log(err);	
			});

		}else{
			res.send('not logged in');
		}

	});

	//check password
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


	//=============Analytics Dashboard============

	app.get('/api/dashboard/state', (req,res)=>{
		db.sequelize.query("select state, count(*) AS total from Users group by 1 order by 2 desc").then((result)=>{
			res.json(result[0]);
		});
	});

	app.get('/api/dashboard/top5/platform', (req,res)=>{
		db.sequelize.query("select platform, count(*) AS total from Mates group by 1 order by 2 desc limit 5").then((result)=>{
			res.json(result[0]);
		});
	});

	app.get('/api/dashboard/top5/age', (req,res)=>{
		db.sequelize.query("select age, count(*) AS total from Users group by 1 order by 2 desc limit 5").then((result)=>{
			res.json(result[0]);
		});
	});

	app.get('/api/dashboard/top5/event', (req,res)=>{
		db.sequelize.query("select what, count(*) AS total from Events group by 1 order by 2 desc limit 5").then((result)=>{
			res.json(result[0]);
		});
	});

	app.get('/api/dashboard/event/timeline', (req,res)=>{
		db.sequelize.query("select DATE_FORMAT(createdAt, '%Y-%m-%d') as date, count(*) AS total from Events group by 1 order by 1 asc").then((result)=>{
			res.json(result[0]);
		});
	});
};





