import { combineReducers } from "redux";

import { userReducer, User } from "./user/userReducer";
import { cartReducer, Cart } from "./cart/cartReducer";

export interface RootReducer {
  user: User;
  cart: Cart;
}

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
