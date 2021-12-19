const { DataTypes } = require("sequelize");
const sequelize = require("../lib/db");

const association = sequelize.define(
  "association",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    tag: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    task: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "task",
        key: "id",
      },
    },
    artefact: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "artefact",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "association",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "fk_association_task_idx",
        using: "BTREE",
        fields: [{ name: "task" }],
      },
      {
        name: "fk_association_artefact_idx",
        using: "BTREE",
        fields: [{ name: "artefact" }],
      },
    ],
  }
);

module.exports = association;