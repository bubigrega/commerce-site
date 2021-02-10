import { useSelector } from "react-redux";
import { RootReducer } from "../../redux/rootReducer";
import CustomButton from "../buttons/CustomButton";
import CartItem from "../cart-item/CartItem";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const items = useSelector((state: RootReducer) => state.cart.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((i) => (
          <CartItem key={i.id} item={i} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
