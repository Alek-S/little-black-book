'use strict';
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    email: DataTypes.STRING,
	password: DataTypes.STRING,
	gender: DataTypes.STRING,
	age: DataTypes.INTEGER
  },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating Author with Posts
          // When an Author is deleted, also delete any associated Posts
          User.hasMany(models.Event, {
            onDelete: "cascade"
          });
          User.hasMany(models.Mate, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return User;
};



// let User = connection.define('user', 
// 	{
// 		email: Sequelize.STRING,
// 		password: Sequelize.STRING,
// 		gender: Sequelize.STRING,
// 		age: Sequelize.INTEGER
// 	}
// );

// User.sync(); 
// module.exports = User;