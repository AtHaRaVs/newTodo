const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const colors = require("./colours/colors");
const mongoose = require("mongoose");
const Todo = require("./models/todoModel");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Todo").then(() => {
    console.log("connection open ");
  });
}

main().catch((err) => console.log(err));

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  res.render("screens/home", { todos });
});

app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  res.render("screens/show", { todo });
});

app.post("/todos", async (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save();
  res.redirect("/todos");
});

app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndUpdate(id, req.body);
  res.redirect(`/todos`);
});

app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndDelete(id);
  res.redirect(`/todos`);
});

app.listen("8000", () => {
  console.log("on port 8000✨");
});
