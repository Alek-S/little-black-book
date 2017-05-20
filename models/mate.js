'use strict';
module.exports = function(sequelize, DataTypes) {
  let Mate = sequelize.define("Mate", {
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
          Mate.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });

           Mate.hasMany(models.Event, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Mate;
};












// const Sequelize = require('sequelize');
// const connection = require('../config/connection');

// let Mate = connection.define('mate', 
// 	{
// 		name: Sequelize.STRING,
// 		app: Sequelize.STRING
// 	}
// );

// Mate.sync(); 
// module.exports = Mate;