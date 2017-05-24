'use strict';

const db = require('../models');

module.exports = function(app) {

	//===API ROUTES===

	//get user by ID
	app.get('/api/user/:id', (req, res)=>{
		db.User.findOne({
			where: { id: req.params.id}
		}).then( (result)=>{
			res.json(result);
		});
	});


};