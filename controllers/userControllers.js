const User = require('../model/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/* user signup callback */
exports.signup = async (req , res)=>{
      try{
          const hasPassword = await bcrypt.hash(req.body.password , 10)
        const newUser = await new User({
            name : req.body.name,
            username : req.body.username,
            gmail : req.body.gmail,
            password :hasPassword
        })
        await newUser.save()
        res.status(200).json(newUser)
      }  catch(err){
        res.status(500).json({err : err.message})
      }
}
/* user login callback */


exports.login = async (req , res)=>{
    try{
     const user = await User.find({username : req.body.username})    
     if(user){
       const isPassword = await bcrypt.compare(req.body.password , user[0].password) 
       if(isPassword){
        const token = await jwt.sign({username : user[0].username , userId : user[0]._id} , process.env.JWT_SECRET)
          res.status(200).json({
              username : user[0].username,
              token : token
          })  
       }else{
        res.status(200).json({err : err.message})
       }
     } else{
        res.status(200).json({err : err.message})
     } 

    }catch(err){
        res.status(200).json({err : err.message})
    }

}