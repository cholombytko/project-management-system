const express = require('express');
const taskController = require('../controllers/task.js');
const taskRouter = express.Router();

taskRouter
    .route('/')
    .get(taskController.getAllTask)
    .post(taskController.createTask);

taskRouter
    .route('/:id')
    .get(taskController.getTask)
    .delete(taskController.deleteTask)
    .patch(taskController.updateTask);

module.exports = taskRouter;