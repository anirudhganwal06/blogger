const express = require('express');

const authController = require('../../controllers/auth');

const Router = express.Router();

Router.post('/signup', authController.postSignup);

module.exports = Router;