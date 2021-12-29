const dotenv = require('dotenv').config();
const { Sequelize } = require('sequelize');

const options = {
  database: process.env.MYSQL_DB,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  dialect: 'mysql',
  define: {
    timestamps: false,
    freezeTableName: true,
  },

  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
};

module.exports = new Sequelize(options);