const express = require("express")
const todoRoutes = express.Router()
const {todoCreate ,todoFind , todoUpdate ,todoDelete} = require('../controllers/todoControllers')
const userChecking = require('../middleware/userChecking')


/* create todo */
todoRoutes.post('/todoCreate' , userChecking, todoCreate)
/* get all todo */
todoRoutes.get('/todoFind', userChecking ,todoFind)
/* update todo */
todoRoutes.put('/todoUpdate/:id', userChecking, todoUpdate)
/* delete todo */
todoRoutes.delete('/todoDelete/:id',userChecking, todoDelete)





module.exports = todoRoutes