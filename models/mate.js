'use strict';
module.exports = (sequelize, DataTypes) => {
	let Mate = sequelize.define('Mate', {
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
		platform: {
			type: DataTypes.STRING,
			validate: {
				len: {
					args: [3, 50],
					msg: 'platform address must be between 3 and 50 characters in length'
				},
			}
		},
	},
		{
			classMethods: {
				associate: (models) => {

					Mate.belongsTo(models.User, {
						foreignKey: {
							allowNull: false
						}
					});

					Mate.hasMany(models.Event, {
					});

				}
			}
		}
	);
	return Mate;
};
