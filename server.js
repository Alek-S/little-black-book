'use strict';

//==MODULES==
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');


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


//===Express-Handlebars===
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//===Routes===
// require('./controllers/api_routes.js')(app);
// require('./controllers/html_routes.js')(app);

// Requiring our models for syncing
var db = require("./models");

//==Sync Database  & Start Server==

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});