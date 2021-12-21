const express = require('express');
const teamController = require('../controllers/team.js');
const teamRouter = express.Router();

teamRouter
    .route('/')
    .get(teamController.getAllTeam)
    .post(teamController.createTeam);

teamRouter
    .route('/:id')
    .get(teamController.getTeam)
    .delete(teamController.deleteTeam)
    .patch(teamController.updateTeam);

module.exports = teamRouter; 