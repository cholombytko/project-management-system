const express = require('express');
const userController = require('../controllers/user.js');
const userRouter = express.Router();

userRouter
    .route('/')
    .get(userController.getAllUser)
    .post(userController.createUser);

userRouter
    .route('/:id')
    .get(userController.getUser)
    .delete(userController.deleteUser)
    .patch(userController.updateUser);

module.exports = userRouter; 