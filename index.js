const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const connection = require("./connections/connection");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors")
const port = process.env.PORT || 5000;
dotenv.config();
/* middleWere */
app.use(bodyParser.json());
app.use(cors())
/* mongoDb connection */
connection();

/* todo Routes */
app.use("/api/todo", todoRoutes);
/* user routes */
app.use("/api/user", userRoutes);

/* its test route */
app.get('/', (req , res)=>{
    res.status(200).json("hello this is user route")
})

app.listen(port, () => {
  console.log(`server is running at ${port}..........`);
});
