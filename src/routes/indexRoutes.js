const express = require('express');
const login = require('../controllers/auth/login');
const register = require('../controllers/auth/register');
const routes = express.Router()

routes.post("/login", login);
routes.post("/register", register);

module.exports = routes