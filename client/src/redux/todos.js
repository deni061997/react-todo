import * as api from '../api'

const initialState = {
  items: [],
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      const check = state.items.some(item => item.title === action.payload.title)
      if (!check) {
        return {
          ...state,
          items: [action.payload, ...state.items]
        }
      }
      return {
        ...state,
        items: state.items
      }
    case 'GET_TODOS':
      return {
        ...state,
        items: action.payload.reverse()
      }
    case 'DELETE_TODO':
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      }
    default:
      return state
  }
}

export const getTodos = () => async (dispatch) => {
  try {
    
    const { data } = await api.getTodos()

    dispatch({ type: 'GET_TODOS', payload: data })

  } catch (error) {
    console.log(error);
  }
}

export const createTodo = (todo) => async (dispatch) => {
  try {

    dispatch({ type: 'CREATE_TODO', payload: todo})

    await api.createTodo(todo)

  } catch (error) {
    console.log(error);
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  try {

    await api.deleteTodo(id)

    dispatch({ type: 'DELETE_TODO', payload: id})
  } catch (error) {
    console.log(error);
  }
}
