const express = require("express")
const todoRoutes = express.Router()
const {todoCreate ,todoFind , todoUpdate ,todoDelete} = require('../controllers/todoControllers')

/* create todo */
todoRoutes.post('/todoCreate' , todoCreate)
/* get all todo */
todoRoutes.get('/todoFind',todoFind)
/* update todo */
todoRoutes.put('/todoUpdate/:id', todoUpdate)
/* delete todo */
todoRoutes.delete('/todoDelete/:id', todoDelete)





module.exports = todoRoutes