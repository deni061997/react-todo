import Todo from "../models/Todo.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ author: req.user.id });

    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ error });
    console.log(error);
  }
};

export const createTodo = async (req, res) => {
  const todo = req.body;

  try {
    const checkTitle = await Todo.find({ author: req.user.id });

    const check = checkTitle.some((dbTodo) => dbTodo.title === todo.title);

    if (!check) {
      const newTodo = new Todo({ ...todo, author: req.user.id });
      res.status(200).json(newTodo);
      await newTodo.save();
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.body;

  try {
    const deleteTodo = await Todo.findByIdAndDelete(id);

    res.status(200).json(deleteTodo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
