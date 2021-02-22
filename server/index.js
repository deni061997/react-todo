import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config.js";
import todosRouter from "./routes/todos.js";
import userRouter from "./routes/user.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todos", todosRouter);
app.use("/user", userRouter);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });

    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("mongoDB connection success");
  } catch (error) {}
};

start();
