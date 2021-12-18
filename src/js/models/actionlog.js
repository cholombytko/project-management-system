const Sequelize = require('sequelize')
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('actionlog', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		grant: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'grant',
				key: 'id'
			}
		}
	}, {
		sequelize,
		tableName: 'actionlog',
		timestamps: true,
		indexes: [
		{
			name: "PRIMARY",
			unique: true,
			using: "BTREE",
			fields: [
				{ name: "id" },
			]
		},
		{
			name: "fk_actionlog_grant_idx",
			using: "BTREE",
			fields: [
				{ name: "grant" },
			]
		},
		]
	});
};
