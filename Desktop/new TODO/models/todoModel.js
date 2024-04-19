const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  todoText: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    requireed: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
