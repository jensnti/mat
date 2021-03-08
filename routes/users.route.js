const express = require('express');
const router = express.Router();
const { param } = require('express-validator');
const userController = require('../controllers/user.controller');
const { verify } = require('../middlewares/verify');

router
  .route('/:id/meals')
  .get(
    param('id').isInt(),
    verify,
    userController.meals);

module.exports = router;