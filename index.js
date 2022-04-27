const express = require('express')
const app = express()
const dotenv = require('dotenv')
const port = process.env.PORT || 5000




app.get('/', (req , res)=>{
    res.send("hello bangladesh")
})



app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})