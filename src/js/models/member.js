const { DataTypes } = require("sequelize");
const sequelize = require("../lib/db");

const member = sequelize.define(
  "member",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "team",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "member",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },    
        ],
      },
      {
        name: "fk_member_team_idx",
        using: "BTREE",
        fields: [{ name: "team_id" }],
      },
      {
        name: "fk_member_user_idx",
        using: "BTREE",
        fields: [{ name: "user_id" }],
      },
    ],
  }
);

module.exports = member;