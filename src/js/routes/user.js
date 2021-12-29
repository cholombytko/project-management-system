const express = require('express');
const userController = require('../controllers/user.js');
const userRouter = express.Router();

userRouter
    .route('/')
    .get(userController.getAlluser)
    .post(userController.createuser);

userRouter
    .route('/:id')
    .get(userController.getuser)
    .delete(userController.deleteuser)
    .patch(userController.updateuser);

module.exports = userRouter;
