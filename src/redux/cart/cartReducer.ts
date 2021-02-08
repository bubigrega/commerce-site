import { CartActions } from "./cartActions";

const INITIAL_STATE = {
  showCart: false,
};
export interface Cart {
  showCart: boolean;
}

export default (state: Cart = INITIAL_STATE, action: CartActions) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, showCart: !state.showCart };
    default:
      return state;
  }
};
