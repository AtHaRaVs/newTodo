const mongoose = require("mongoose");
const Todo = require("../models/todoModel");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Todo").then(() => {
    console.log("connection open ");
  });
}

main().catch((err) => console.log(err));

const seededTodos = [
  {
    text: "complete homework",
  },
  {
    text: "complete leetcode",
  },
  {
    text: "complete youtube",
  },
  {
    text: "complete todo",
  },
  {
    text: "complete studying",
  },
  {
    text: "complete kitchen",
  },
  {
    text: "complete spotify",
  },
];

Todo.insertMany(seededTodos)
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log(e);
  });
