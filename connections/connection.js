const mongoose = require('mongoose')

const connection = async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongoDB Connection Successful.....");
    }catch(err){
        console.log(err)
    }
}

module.exports  = connection