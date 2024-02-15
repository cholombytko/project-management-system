const express = require('express');
const app = express();

const memberRouter = require('./routes/member.js');

app.use(express.json());
app.use('/member', memberRouter);

module.exports = app;