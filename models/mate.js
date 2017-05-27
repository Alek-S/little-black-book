'use strict';
module.exports = (sequelize, DataTypes) => {
	let Mate = sequelize.define('Mate', {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
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
					});

				}
			}
		}
	);
	return Mate;
};
