const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://iamparth345:nSMHTbMNU0ja9Mpz@cluster0.t7umdh1.mongodb.net/")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);


module.exports = {
    todo
}