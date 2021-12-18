const Sequelize = require('sequelize')
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('assignment', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		member: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'member',
				key: 'id'
			}
		},
		role: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'role',
				key: 'id'
			}
		}
	}, {
		sequelize,
		tableName: 'assignment',
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
			name: "fk_assignment_member_idx",
			using: "BTREE",
			fields: [
				{ name: "member" },
			]
		},
		{
			name: "fk_assignment_role_idx",
			using: "BTREE",
			fields: [
				{ name: "role" },
			]
		},
		]
	});
};
