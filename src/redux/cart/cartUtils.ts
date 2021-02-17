import { CartItem, Item } from "./cartReducer";

export const addItem = (cartItems: CartItem[], itemToAdd: Item) => {
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

export const removeItem = (cartItems: CartItem[], id: number) =>
  cartItems.filter((i) => i.id !== id);

export const changeQuantity = (
  cartItems: CartItem[],
  id: number,
  name: string,
  operation: string
) => {
  const item = cartItems.find((i) => i.id === id && i.name === name);

  let newQuantity = 0;

  if (item && operation === "+") {
    newQuantity = item.quantity + 1;
  } else if (item && operation === "-") {
    newQuantity = item.quantity - 1;
  }

  if (newQuantity === 0) return removeItem(cartItems, id);
  else
    return cartItems.map((i) =>
      i.id === id && i.name === name ? { ...i, quantity: newQuantity } : i
    );
};
