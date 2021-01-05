// Import depandencies
require("dotenv").config();

const express = require("express")
const mongoose = require("mongoose")
const Pusher = require("pusher")

// Import local depandencies
const Message = require("./Messages")

// App config
const app = express()
const port = process.env.PORT || 5000

const pusher = new Pusher({
    appId: "1132551",
    key: "3bfbe37053899c3f31cf",
    secret: "c142bfbf4d46145ba005",
    cluster: "ap2",
    useTLS: true
});

// middlewares
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    next()
})

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

const db = mongoose.connection

db.once("open", () => {
    console.log("DB connected");

    const msgCollection = db.collection("chats")
    const changeStream = msgCollection.watch()

    changeStream.on("change", (change) => {
        // console.log(change);

        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument
            pusher.trigger("message", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message
            })
        } else {
            console.log("Error triggering pusher");
        }
    })
})
// API routes
app.get("/", (req, res) => {
    res.status(200).send("Hello Node")
})

app.get("/message/sync", (req, res) => {
    Message.find(function(err1, data1){
        if(!err1 && data1) {
            res.status(200).send(data1)
        } else {
            res.status(500).send(err1)
        }
    })
})

app.post("/message/new", (req, res) => {
    const dbMessage = req.body

    Message.create(dbMessage, async function(err1, data1){
        if(data1 && !err1) {
            res.status(201).send(data1)
        } else {
            res.status(500).send(err1)
        }
    })
})

// App port
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})

