const Todo = require("../models/todoModel");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find({});
  res.render("screens/todoSc", { todos });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  res.render("screens/show", { todo });
});

router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save();
  res.redirect("/todos");
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndUpdate(id, req.body);
  res.redirect(`/todos`);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.redirect(`/todos`);
});

module.exports = router;
