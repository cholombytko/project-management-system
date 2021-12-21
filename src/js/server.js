const express = require('express');
const app = express();

const teamRouter = require('./routes/team.js');

app.use(express.json());
app.use('/team', teamRouter);

module.exports = app;