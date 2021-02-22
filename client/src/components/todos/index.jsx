import React, { useState, useEffect } from "react";
import {
  Container,
  Main,
  Input,
  Form,
  InputContainer,
  ButtonDelete,
  Button,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import SingleTask from "./single-task";
import { createTodo, getTodos } from "../../redux/todos";

export default function Todos() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const todo = { favorite: false, title: text, finished: false };
  const todos = useSelector((state) => state.todos.items);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getTodos());
  }, [token]);

  const addTodo = () => {
    if (text) {
      dispatch(createTodo(todo));
    }
    setText("");
  };

  const clear = () => {
    setText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(createTodo(todo));
    }
    clear();
  };

  return (
    <Container>
      <Main>
        <form onSubmit={handleSubmit}>
          <Form>
            <InputContainer>
              <Input value={text} onChange={(e) => setText(e.target.value)} />
              <ButtonDelete type="button" onClick={clear}>
                {text && <i className="material-icons">clear</i>}
              </ButtonDelete>
            </InputContainer>
            <Button type="submit" onClick={addTodo}>
              Добавить задачу
            </Button>
          </Form>
        </form>
        <SingleTask todos={todos} />
      </Main>
    </Container>
  );
}
