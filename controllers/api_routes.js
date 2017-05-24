'use strict';

const db = require('../models');

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