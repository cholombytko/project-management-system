const express = require('express');
const memberController = require('../controllers/member.js');
const memberRouter = express.Router();

memberRouter
    .route('/')
    .get(memberController.getAllMember)
    .post(memberController.createMember);

memberRouter
    .route('/:id')
    .get(memberController.getMember)
    .delete(memberController.deleteMember)
    .patch(memberController.updateMember);

module.exports = memberRouter; 