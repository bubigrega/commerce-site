import { CartItem, Item } from "./cartReducer";

export const addItem = (cartItems: CartItem[], itemToAdd: Item) => {
  const itemToChange = cartItems.find(
    (i) => i.id === itemToAdd.id && i.name === itemToAdd.name
  );

  if (itemToChange) {
    return cartItems.map((i) =>
      i.id === itemToChange.id && i.name === itemToChange.name
        ? { ...i, quantity: i.quantity + 1 }
        : i
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems: CartItem[], itemToRemove: Item) => {
  const itemToChange = cartItems.find(
    (i) => i.id === itemToRemove.id && i.name === itemToRemove.name
  );

  if (itemToChange?.quantity === 1) {
    return cartItems.filter(
      (i) => i.id !== itemToChange.id && i.name !== itemToChange.name
    );
  }

  return cartItems.map((i) =>
    i.id === itemToChange?.id && i.name === itemToChange.name
      ? {
          ...i,
          quantity: i.quantity - 1,
        }
      : i
  );
};
