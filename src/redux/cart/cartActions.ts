export const toggleCart = () => {
  return <const>{
    type: "TOGGLE_CART",
  };
};

export type CartActions = ReturnType<typeof toggleCart>;
