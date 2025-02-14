const express = require("express");
const {createTodo, updateTodo} = require("./types");
const {todo} = require("./db");

const app = express();

app.use(express.json());

app.post("/todo",async function(req,res){
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success){
    return res.status(400).json(parsedPayload.error);
  }
  //put it in mongo db
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })

  res.json({
    message: "Todo created successfully"
  })

})

app.get("/todos",async function(req,res){

  const todos = await todo.find({});
  res.json({
    todos
  });

})

app.put("/completed",async function(req, res){
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if(!parsedPayload.success){
    return res.status(400).json(updatePayload.error);
  }
  await todo.updateOne({
    _id: req.body.id
  },{
    completed: true
  })
  res.json({
    message: "Todo updated successfully"
  })
})

