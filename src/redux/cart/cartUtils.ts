import { CartItem, Item } from "./cartReducer";

export const cartUtils = (cartItems: CartItem[], itemToAdd: Item) => {
  const index = cartItems.findIndex(
    (c) => c.id === itemToAdd.id && c.name === itemToAdd.name
  );

  if (index === -1) {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
  const newItems = [...cartItems];
  newItems[index] = {
    ...newItems[index],
    quantity: newItems[index].quantity + 1,
  };
  return newItems;
};
