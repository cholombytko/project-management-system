const sequelize = require('./databaseConnection');
const initModels = require('../models/initModels');
const modObj = initModels(sequelize);

module.exports = { modObj, sequelize };