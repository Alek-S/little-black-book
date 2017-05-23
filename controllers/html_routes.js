'use strict';
const path = require("path");

module.exports = function(app) {

	//===HTML ROUTES===
	app.get('/', (req,res)=>{
		res.send('blah');
	});

};