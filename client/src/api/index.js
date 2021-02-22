import axios from "axios";

const url = "http://localhost:5000";

const API = axios.create({ baseURL: url });

export const createTodo = (todo) =>
  API.post("/todos/create", todo, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
export const getTodos = () =>
  API.get("/todos/get", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
export const deleteTodo = (id) => API.delete("/todos/delete", { data: { id } });

export const signUp = (formData) => API.post("/user/signUp", formData);
export const signIn = (formData) => API.post("/user/signIn", formData);
export const auth = () =>
  API.get("/user/auth", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
