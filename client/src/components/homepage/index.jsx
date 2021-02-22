import React from "react";
import { Container, Home } from "./style";

export default function HomePage() {
  return (
    <Container>
      <Home>Добро пожаловать в React-TODO</Home>
      <Home>Пожалуйста зарегистрируйтесь, чтобы добавлять свои задачи!</Home>
    </Container>
  );
}
