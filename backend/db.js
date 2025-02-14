const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://iamparth345:%3CeUcBaUW2RMAEj0JB%3E@cluster0.t7umdh1.mongodb.net/todos")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);


module.exports = {
    todo
}