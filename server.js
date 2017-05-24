'use strict';

//==MODULES==
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const session = require('express-session');


//==Express Setup==
const app = express();
let PORT = process.env.PORT || 5000;


//===Parsing===
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//===Static Files, CSS, Images, Fonts===
app.use(express.static('./public'));


//===Sessions===
app.use(session({
	secret: 'sandbox', 
	cookie: { maxAge: 60000 } //20 minutes in milliseconds
}));

//===Express-Handlebars===
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//===Routes===
require('./controllers/api_routes.js')(app);
require('./controllers/html_routes.js')(app);


//===Models===
let db = require('./models');


//==Sync Database  & Start Server==
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log('App listening on PORT ' + PORT);
	});
});