const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    des : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
    
})


module.exports = mongoose.model("Todo" , todoSchema)