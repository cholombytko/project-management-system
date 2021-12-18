const dotenv = require('dotenv').config();
const { Sequelize } = require('sequelize');

const MYSQL_HOST = "127.0.0.1";
const MYSQL_PORT = 3306;
const MYSQL_USER = "root";
const MYSQL_PASS = "123";
const MYSQL_DB = process.env.MYSQL_DB;

module.exports = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASS, {
  dialect: 'mysql',
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  pool: {
  	max: 5,
    idle: 30000,
    acquire: 60000,
  },
});