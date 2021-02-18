import { SHOP_DATA } from "../../local-data/local-data";
import { CartActions } from "./cartActions";
import { addItem, removeItem } from "./cartUtils";

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
  imageUrl: string;
};

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
        cartItems: addItem(state.cartItems, action.payload),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };

    case "CLEAR_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (i) => i.id !== action.payload.id && i.name !== action.payload.name
        ),
      };

    default:
      return state;
  }
};
