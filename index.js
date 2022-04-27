const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const connection = require("./connections/connection");
const todoRoutes = require("./routes/todoRoutes");
const port = process.env.PORT || 5000;
dotenv.config();
/* middleWere */
app.use(bodyParser.json());
/* mongoDb connection */
connection();

/* todo Routes */
app.use("/api/todo", todoRoutes);
/* user routes */
app.use("/api/user", userRoutes);

app.get('/', (req , res)=>{
    res.status(200).json("hello this is user route")
})

app.listen(port, () => {
  console.log(`server is running at ${port}..........`);
});
