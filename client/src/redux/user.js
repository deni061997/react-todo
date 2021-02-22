import * as api from "../api";

const initialState = {
  currentUser: {},
  isAuth: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        loading: false,
        isAuth: true,
        currentUser: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
};

export const signUp = async (formData, history) => {
  try {
    const { data } = await api.signUp(formData);

    if (data) {
      history.push("/auth");
      alert("Вы успешно зарегистрировались!");
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const signIn = (formData, setError) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    localStorage.setItem("token", data.token);

    dispatch({ type: "AUTH", payload: data.user });
  } catch (error) {
    console.log(error.response.data.message);
    setError(error.response.data.message);
  }
};

export const auth = () => async (dispatch) => {
  try {
    const { data } = await api.auth();

    dispatch({ type: "AUTH", payload: data.user });

    localStorage.setItem("token", data.token);
  } catch (error) {
    alert(error.response.data.message);
    localStorage.removeItem("token");
  }
};

export const logout = () => ({ type: "LOGOUT" });
