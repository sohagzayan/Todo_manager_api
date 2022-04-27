const Todo = require('../model/todoSchema')

/* createTodo todo callBack */

exports.todoCreate = async(req , res)=>{
   try{
       const newTodo = await new Todo({
        title : req.body.title,
        des : req.body.des,
        status : req.body.status
       })

       await newTodo.save()
       res.status(200).json(newTodo)
   }
   catch(err){
       res.status(500).json({err :  err.message})
   }
}

/* get all todo callBack */

exports.todoFind = async (req , res)=>{
    try{
        const todos = await Todo.find()
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
