const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://iamparth345:ToAUx2a2KGMc7ZPa@cluster0.t7umdh1.mongodb.net/todoapp")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);


module.exports = {
    todo
}