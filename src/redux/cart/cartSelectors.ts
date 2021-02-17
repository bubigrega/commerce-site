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

export const selectCartShow = createSelector(
  [selectCart],
  (cart) => cart.showCart
);

export const selectCartSum = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (init, cartItem) => init + cartItem.price * cartItem.quantity,
    0
  )
);
