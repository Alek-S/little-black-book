'use strict';
module.exports = (sequelize, DataTypes) => {
	let Event = sequelize.define('Event', {
		what: {
			type: DataTypes.STRING,
			validate: {
				len: {
					args: [3, 128],
					msg: 'what address must be between 3 and 128 characters in length'
				},
			}
		},
		when: {
			type: DataTypes.DATE,
			isDate: true
		},
		where: {
			type: DataTypes.STRING,
			validate: {
				len: {
					args: [3, 128],
					msg: 'where address must be between 3 and 128 characters in length'
				},
			}
		},
		rating: {
			type: DataTypes.INTEGER,
			validate: {
				len: {
					args: [1, 2],
					msg: 'rating address must be between 1 and 2 characters in length'
				},
			},
			isNumeric: true,
		}
	},
		{
			classMethods: {
				associate: (models) => {

					Event.belongsTo(models.User, {
						
					});

				}
			}
		}
	);
	return Event;
};