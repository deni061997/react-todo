import * as api from "../api";

const initialState = {
  items: [],
  getLoading: false,
  createLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TODO_START":
      return {
        ...state,
        createLoading: true,
      };
    case "CREATE_TODO_SUCCESS":
      return {
        ...state,
        items: [action.payload, ...state.items],
        createLoading: false,
      };
    case "GET_TODOS_START":
      return {
        ...state,
        getLoading: true,
      };
    case "GET_TODOS":
      return {
        ...state,
        items: action.payload,
        getLoading: false,
      };
    case "DELETE_TODO":
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
        deleteLoading: false,
      };
    case "UPDATE_TODO":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload.id) {
            return action.payload.updatedPost;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export const getTodos = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_TODOS_START" });

    const { data } = await api.getTodos();

    dispatch({ type: "GET_TODOS", payload: data });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const createTodo = (todo) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_TODO_START" });

    const { data } = await api.createTodo(todo);

    dispatch({ type: "CREATE_TODO_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_TODO", payload: id });

    await api.deleteTodo(id);
  } catch (error) {
    console.log(error);
  }
};
