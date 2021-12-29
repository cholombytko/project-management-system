const express = require('express');
const app = express();

const memberRouter = require('./routes/user.js');

app.use(express.json());
app.use('/user', memberRouter);

module.exports = app;