import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: String,
  favorite: Boolean,
  finished: Boolean,
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
