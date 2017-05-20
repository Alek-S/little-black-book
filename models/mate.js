'use strict';
module.exports = (sequelize, DataTypes) => {
	let Mate = sequelize.define('Mate', {
		what: DataTypes.STRING,
		when: DataTypes.DATE,
		where: DataTypes.STRING,
		rating: DataTypes.INTEGER
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
