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

export type CartActions =
  | ReturnType<typeof toggleCart>
  | ReturnType<typeof addToCart>;
