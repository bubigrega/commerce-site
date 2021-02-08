import { combineReducers } from "redux";

import { User } from "./user/userReducer";
import userReducer from "./user/userReducer";
import cartReducer, { Cart } from "./cart/cartReducer";

export interface RootReducer {
  user: User;
  cart: Cart;
}

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
