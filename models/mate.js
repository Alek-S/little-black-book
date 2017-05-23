'use strict';
module.exports = (sequelize, DataTypes) => {
	let Mate = sequelize.define('Mate', {
		name: DataTypes.STRING,
		platform: DataTypes.STRING,
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
						onDelete: 'cascade'
					});

				}
			}
		}
	);
	return Mate;
};
