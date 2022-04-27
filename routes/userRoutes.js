const express = require('express')
const userRoutes = express.Router()
const {signup , login} = require('../controllers/userControllers')

/* user signup */
userRoutes.post('/signup', signup)
/* user login */
userRoutes.post('/login', login)

module.exports = userRoutes