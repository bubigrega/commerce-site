import { createSelector } from "reselect";
import { RootReducer } from "../rootReducer";

const selectCart = (state: RootReducer) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((init, next) => init + next.quantity, 0)
);
