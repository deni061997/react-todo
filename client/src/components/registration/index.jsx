import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Input, Button, ClearButton } from "./styles";
import { signUp } from "../../redux/user";
import { useHistory } from "react-router-dom";

export default function Enter() {
  const history = useHistory();
  const dispatch = useDispatch();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formDataSet = Object.values(form).every((input) => !!input);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!formDataSet) {
      return alert("Пожалуйста, заполните все поля!");
    }
    clear(e);
    signUp(form, history);
  };

  const clear = (e) => {
    e.preventDefault();
    setForm(initialState);
  };

  return (
    <Container>
      <form onSubmit={onHandleSubmit} noValidate>
        <Form>
          <Input
            placeholder="First Name"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={form.firstName}
          />
          <Input
            placeholder="Last Name"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={form.lastName}
          />
          <Input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleChange}
            value={form.email}
          />
          <Input
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
            value={form.password}
          />
          <Input
            placeholder="Confirm Password"
            name="repeatPassword"
            type="password"
            onChange={handleChange}
            value={form.repeatPassword}
          />
          <Button>Отправить</Button>
          <ClearButton onClick={clear}>Очистить</ClearButton>
        </Form>
      </form>
    </Container>
  );
}
