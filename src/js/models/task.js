const Sequelize = require('sequelize')
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('task', {
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
		deadline: {
			type: DataTypes.DATE,
			allowNull: true
		},
		project: {
			type: DataTypes.INTEGER,
			allowNull: false
			references: {
				model: "project",
				key: "id"
			}
		}
	}, {
		sequelize,
		tableName: 'task',
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
			name: "fk_task_project_idx",
			using: "BTREE",
			fields: [
				{ name: "id" }
			]
		},
		]
	});
};