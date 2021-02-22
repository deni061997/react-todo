import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskContainer, Text, Button, Container, SpinnerCont } from "./styles";
import { deleteTodo } from "../../../redux/todos";
import Spinner from "./spinner";

export default function SingleTask({ todos }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const createLoading = useSelector((state) => state.todos.createLoading);

  const getLoading = useSelector((state) => state.todos.getLoading);

  return (
    <>
      {getLoading || createLoading ? (
        <SpinnerCont>
          <Spinner />
        </SpinnerCont>
      ) : (
        <Container>
          {todos.map((todo) => (
            <TaskContainer key={todo._id}>
              {todo.favorite ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}
              <Text>{todo.title}</Text>
              <Button onClick={() => handleDelete(todo._id)}>
                <i className="material-icons">delete</i>
              </Button>
            </TaskContainer>
          ))}
        </Container>
      )}
    </>
  );
}
