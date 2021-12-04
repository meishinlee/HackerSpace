const express = require('express'),
app = express()
const mongoose = require("mongoose");

require('dotenv').config()

const db =
  process.env.MONGODB_URI ||
  "mongodb+srv://tma8:123456public1998@cluster0.nrnmc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
  .then(() => console.log("Connected to database..."))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})
