const { DataTypes } = require("sequelize");
const sequelize = require("../lib/db");

const grant = sequelize.define(
  "grant",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    member: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "member",
        key: "id",
      },
    },
    actiontype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "actiontype",
        key: "id",
      },
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "role",
        key: "id",
      },
    },
    task: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "task",
        key: "id",
      },
    },
    artefact: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artefact",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "grant",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "fk_grant_member_idx",
        using: "BTREE",
        fields: [{ name: "member" }],
      },
      {
        name: "fk_grant_actiontype_idx",
        using: "BTREE",
        fields: [{ name: "actiontype" }],
      },
      {
        name: "fk_grant_role_idx",
        using: "BTREE",
        fields: [{ name: "role" }],
      },
      {
        name: "fk_grant_task_idx",
        using: "BTREE",
        fields: [{ name: "task" }],
      },
      {
        name: "fk_grant_artefact_idx",
        using: "BTREE",
        fields: [{ name: "artefact" }],
      },
    ],
  }
);

module.exports = grant;