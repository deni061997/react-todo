import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/user";
import { Container, Form, Input, Button, Error } from "./styles";
import { useHistory } from "react-router-dom";

export default function Auth() {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialState = { email: "", password: "" };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(formData, setError));
    history.push("/todos");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Form>
          <Error>{error}</Error>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <Button type="submit">Войти</Button>
        </Form>
      </form>
    </Container>
  );
}
