'use strict';
module.exports = (sequelize, DataTypes) => {
	let Event = sequelize.define('Event', {
		what: DataTypes.STRING,
		when: DataTypes.DATE,
		where: DataTypes.STRING,
		rating: DataTypes.INTEGER
	},
		{
			classMethods: {
				associate: (models) => {

					Event.belongsTo(models.User, {
						foreignKey: {
							allowNull: false
						}
					});

				}
			}
		}
	);
	return Event;
};