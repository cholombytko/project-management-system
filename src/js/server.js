const express = require('express');
const app = express();

const taskRouter = require('./routes/task.js');

app.use(express.json());
app.use('/task', taskRouter);

module.exports = app;