'use strict';
module.exports = (sequelize, DataTypes) => {
	let User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			validate: {
				len: {
					args: [6, 128],
					msg: 'Email address must be between 6 and 128 characters in length'
				},
				isEmail: {
					msg: 'Email address must be valid'
				},
			}
		},
		firstName: {
			type: DataTypes.STRING,
			validate: {
				len: {
					args: [3, 128],
					msg: 'firstName address must be between 3 and 128 characters in length'
				},
			}
		},
		lastName: {
			type: DataTypes.STRING,
			validate: {
				len: {
					args: [3, 128],
					msg: 'lastName address must be between 3 and 128 characters in length'
				},
			}
		},
		password: {
			type: DataTypes.STRING,
			validate: {
				len: {
					args: [6, 250],
					msg: 'password address must be between 6 and 250 characters in length'
				},
			}
		},
		gender: {
			type: DataTypes.STRING,
			validate: {
				len: {
					args: [4, 20],
					msg: 'gender address must be between 6 and 20 characters in length'
				},
			}
		},
		age: {
			type: DataTypes.INTEGER,
			validate: {
				len: {
					args: [1, 3],
					msg: 'age address must be between 1 and 3 characters in length'
				},
			}
		},
		state: DataTypes.STRING,
		zip: DataTypes.INTEGER
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