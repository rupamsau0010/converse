// Import depandencies
require("dotenv").config();

const express = require("express")
const mongoose = require("mongoose")

// App config
const app = express()
const port = process.env.PORT || 5000

// Mongodb connect
const uri = process.env.MONGO_URL
//
mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).catch((err) => {
    console.log(err);
})
.then(() => {
    console.log("Connected to mongodb");
})

// API routes
app.get("/", (req, res) => {
    res.status(200).send("Hello Node")
})

// App port
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})

