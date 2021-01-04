const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
})

module.exports = mongoose.model("chat", chatSchema)