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
    todoText: "complete homework",
  },
  {
    todoText: "complete leetcode",
  },
  {
    todoText: "complete youtube",
  },
  {
    todoText: "complete todo",
  },
  {
    todoText: "complete studying",
  },
  {
    todoText: "complete kitchen",
  },
  {
    todoText: "complete spotify",
  },
];

Todo.insertMany(seededTodos)
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log(e);
  });

// Todo.deleteMany({})
//   .then((result) => {
//     console.log(`${result.deletedCount} todos deleted successfully.`);
//   })
//   .catch((error) => {
//     console.error("Error deleting todos:", error);
//   });
