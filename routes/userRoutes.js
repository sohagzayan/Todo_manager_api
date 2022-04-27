const express = require('express')
const route = express.Router()
const {signup , login} = require('../controllers/userControllers')

/* user signup */
route.post('/signup', signup)
/* user login */
route.post('/login', login)

module.exports = route