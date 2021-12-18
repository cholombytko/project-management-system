const Sequelize = require('sequelize')
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('actiontype', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'actiontype',
		timestamps: false,
		indexes: [
		{
			name: "PRIMARY",
			unique: true,
			using: "BTREE",
			fields: [
				{ name: "id" },
			]
		},
		]
	});
};