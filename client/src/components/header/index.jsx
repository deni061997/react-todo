import React from "react";
import {
  HeaderContainer,
  NameContainer,
  ButtonContainer,
  AuthButContainer,
  Button,
  ExitButton,
  Text,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/user";

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const isAuth = useSelector((state) => state.user.isAuth);

  const switchOnAuth = () => {
    history.push("/auth");
  };

  const handleLogout = () => {
    history.push("/auth");
    dispatch(logout());
  };

  if (isAuth) {
    history.push("/todos");
  }

  const switchMode = () => {
    history.push("/registration");
  };

  const stillAuth = history.location.pathname === "/todos";

  return (
    <HeaderContainer>
      <NameContainer>
        <Text>
          <h2>{user?.firstName}</h2>
        </Text>
        <Text>
          <h2>{user?.lastName}</h2>
        </Text>
      </NameContainer>
      <ButtonContainer>
        {!stillAuth ? (
          <AuthButContainer>
            <Button onClick={switchMode}>Регистрация</Button>
            <Button onClick={switchOnAuth}>Вход</Button>
          </AuthButContainer>
        ) : (
          <ExitButton onClick={handleLogout}>Выход</ExitButton>
        )}
      </ButtonContainer>
    </HeaderContainer>
  );
}
