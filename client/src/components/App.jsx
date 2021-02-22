import { useEffect } from "react";
import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Auth from "./auth";
import Registration from "./registration";
import Todos from "./todos";
import { auth } from "../redux/user";
import { Container } from "./styles";
import Header from "./header";
import HomePage from "./homepage";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory();

  const doAuth = history.location.pathname === "/todos";

  if (!localStorage.getItem("token")) {
    history.push("/auth");
  }

  useEffect(() => {
    if (currentUser && doAuth) {
      dispatch(auth());
    }
  }, []);

  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/home" component={HomePage} />
        <Redirect to="/home" />
      </Switch>
    </Container>
  );
}

export default App;
