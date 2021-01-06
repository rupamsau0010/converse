const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
})

module.exports = mongoose.model("chat", chatSchema)