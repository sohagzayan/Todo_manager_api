const express = require('express')
const app = express()
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
const connection = require('./connections/connection')
dotenv.config()
app.use(bodyParser.json())
connection()
app.use('/api/user', userRoutes)

app.listen(port, ()=>{
    console.log(`server is running at ${port}..........`);
})