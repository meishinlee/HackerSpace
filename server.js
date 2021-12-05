const express = require('express'),
app = express()
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config()

const db =
  process.env.MONGODB_URI ||
  "mongodb+srv://tma8:123456public1998@cluster0.nrnmc.mongodb.net/hackerspace?retryWrites=true&w=majority";
//Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
  .then(() => console.log("Connected to database..."))
  .catch((err) => console.log(err));


app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

// api routes and paths
const project = require("./routes/project");
app.use("/api/project", project);

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})
