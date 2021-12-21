const { DataTypes } = require("sequelize");
const sequelize = require("../lib/db");

const actionlog = sequelize.define(
  "actionlog",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    grant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "grant",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "actionlog",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "fk_actionlog_grant_idx",
        using: "BTREE",
        fields: [{ name: "grant" }],
      },
    ],
  }
);

module.exports = actionlog;