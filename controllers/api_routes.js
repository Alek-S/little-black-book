'use strict';

// Requiring our models
var db = require("../models");

// Routes
module.exports = function(app) {

//===HTML ROUTES===
		
  // GET route for getting all of the events
  app.get("/api/event", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Event
    db.Event.findAll({
      where: query,
      include: [db.Event]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // POST route for saving a new event
  app.post("/api/event", function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // DELETE route for deleting event
  app.delete("/api/event/:id", function(req, res) {
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // PUT route for updating event
  app.put("/api/event", function(req, res) {
    db.Event.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbEvent) {
        res.json(dbEvent);
      });
  });
};
