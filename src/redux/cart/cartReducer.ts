import { SHOP_DATA } from "../../local-data/local-data";
import { CartActions } from "./cartActions";
import { cartUtils } from "./cartUtils";

const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
};

export type Cart = {
  showCart: boolean;
  cartItems: CartItem[];
};

export type Item = typeof SHOP_DATA[0]["items"][0];

export type CartItem = {
  id: number;
  quantity: number;
  name: string;
  price: number;
  imageURL: string;
};

const ind = [{ id: 3 }].findIndex((i) => i.id === 4);
console.log(ind);

export const cartReducer = (
  state: Cart = INITIAL_STATE,
  action: CartActions
) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, showCart: !state.showCart };

    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: cartUtils(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
