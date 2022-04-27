const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    gmail : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    todo : [
        {
            type : mongoose.Types.ObjectId,
            ref : 'Todo'
        }
    ]
})

module.exports = mongoose.model("User" , userSchema)