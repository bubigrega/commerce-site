import { Item } from "./cartReducer";

export const toggleCart = () => {
  return <const>{
    type: "TOGGLE_CART",
  };
};

export const addToCart = (item: Item) => {
  return <const>{
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const clearFromCart = (item: Item) => {
  return <const>{
    type: "CLEAR_FROM_CART",
    payload: item,
  };
};

export const removeFromCart = (item: Item) => {
  return <const>{
    type: "REMOVE_FROM_CART",
    payload: item,
  };
};

export type CartActions =
  | ReturnType<typeof toggleCart>
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof clearFromCart>;
