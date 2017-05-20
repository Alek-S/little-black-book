'use strict';
module.exports = function(sequelize, DataTypes) {
  let Event = sequelize.define("Event", {
    // Giving the Author model a name of type STRING
    what: DataTypes.STRING,
	when: DataTypes.DATE,
	where: DataTypes.STRING,
	rating: DataTypes.INTEGER
  },
   {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          Event.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });

          //  Event.hasOne(models.Mate, {
          //   onDelete: "cascade"
          // });
        }
      }
    }
  );
  return Event;
};







// const Sequelize = require('sequelize');
// const connection = require('../config/connection');

// let Event = connection.define('events', 
// 	{
// 		what: Sequelize.STRING,
// 		when: Sequelize.DATE,
// 		where: Sequelize.STRING,
// 		rating: Sequelize.INTEGER
// 	}
// );

// Event.sync(); 
// module.exports = Event;