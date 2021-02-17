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

export const removeFromCart = (id: number) => {
  return <const>{
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};

export const changeQuantity = (id: number, name: string, operation: string) => {
  return <const>{
    type: "CHANGE_QUANTITY",
    payload: { id, name, operation },
  };
};

export type CartActions =
  | ReturnType<typeof toggleCart>
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof changeQuantity>;
