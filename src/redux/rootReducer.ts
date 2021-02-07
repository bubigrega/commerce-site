import { combineReducers } from "redux";

import { User } from "./user/userReducer";
import userReducer from "./user/userReducer";

export interface RootReducer {
  user: User;
}

export default combineReducers({
  user: userReducer,
});
