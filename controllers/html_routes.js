'use strict';

// Dependencies
// =============================================================
var path = require("path");

module.exports = function(app) {

//===HTML ROUTES===
	
// index route loads landing.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });

  // user route loads user.html
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  // scoreboard route loads scoreboard.html
  app.get("/scoreboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/scoreboard.html"));
  });

};