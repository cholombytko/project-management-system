const Sequelize = require('sequelize')
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('member', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		team: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "team",
				key: "id"
			}
		},
		user: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "user",
				key: "id"
			}
		}
	}, {
		sequelize,
		tableName: 'member',
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
		{
			name: "fk_member_team_idx",
			using: "BTREE",
			fields: [
				{ name: "team" },
			]
		},
		{
			name: "fk_member_user_idx",
			using: "BTREE",
			fields: [
				{ name: "user" },
			]
		},
		]
	});
};