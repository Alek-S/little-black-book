'use strict';
module.exports = (sequelize, DataTypes) => {
	let User = sequelize.define('User', {
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		gender: DataTypes.STRING,
		age: DataTypes.INTEGER
	},
		{
			classMethods: {
				associate: (models) => {

					User.hasMany(models.Event, {
						onDelete: 'cascade'
					});

					User.hasMany(models.Mate, {
						onDelete: 'cascade'
					});
				}
			}
		}
	);
	return User;
};