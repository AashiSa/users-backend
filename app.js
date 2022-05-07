require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./src/routes/user.router")
const port = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json());
//Database Connection
mongoose.connect(process.env.MONGO_URL, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
const mDb = mongoose.connection;
mDb.on("open",() => {
    console.log("Database is connected");
});

mDb.on("error", (error) => {
    console.log(error);
})
//Routes
app.use('v1/users/',userRouter)
app.listen(port, ()=> {
    console.log(`Api is running on ${port}`)
})