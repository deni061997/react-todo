import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import todos from "./todos";
import user from "./user";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  user,
  todos,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
