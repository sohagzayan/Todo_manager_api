const Todo = require('../model/todoSchema')
const User = require('../model/userSchema')



/* createTodo todo callBack */
exports.todoCreate = async(req , res)=>{
   try{
       const newTodo = await new Todo({
        title : req.body.title,
        des : req.body.des,
        status : req.body.status,
        user : req.userId
       })
       const updatedTodo = await newTodo.save()
       await User.updateOne({_id : req.userId}, {
           $push : {
               todo : updatedTodo._id
           }
       })
       res.status(200).json(newTodo)
   }
   catch(err){
       res.status(500).json({err :  err.message})
   }
}

/* get all todo callBack */

exports.todoFind = async (req , res)=>{
    try{
        const todos = await Todo.find().populate('user')
        res.status(200).json(todos)
    }
    catch(err){
        res.status(200).json({err : err.message})
    }
}

/* update todo callBack */

exports.todoUpdate = async (req , res)=>{
   try{
       const updatedTodo =  await Todo.updateOne({_id : req.params.id},{ $set : req.body})  
      res.send(updatedTodo)
   }
   catch(err){
       res.status(200).json({err : err.message})
   }
}



/* delete todo callBack */
exports.todoDelete = async (req , res)=>{
   try{
    await Todo.deleteOne({_id : req.params.id})
        res.status(200).json("todo Deleted successful !")
   }catch(err){
    res.status(500).json({err : err.message})
   }
}
