import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReduser } from "./auth/authReduser";
import { chatBoardReduser } from "./chatBoard/chatBoardReduser";
import { chatListReduser } from "./chatList/chatListReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { thunkReduser } from "./Thunk/thunkReduser";

const rootReduser = combineReducers({
  authReduser,
  chatBoardReduser,
  chatListReduser,
  thunkReduser,
});

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);
