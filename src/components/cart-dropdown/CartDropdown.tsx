import { shallowEqual, useSelector } from "react-redux";

import { selectCartItems } from "../../redux/cart/cartSelectors";
import { RootReducer } from "../../redux/rootReducer";
import CustomButton from "../buttons/CustomButton";
import CartItem from "../cart-item/CartItem";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const items = useSelector(
    (state: RootReducer) => selectCartItems(state),
    shallowEqual
  );

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((i) => (
          <CartItem key={i.id + i.name} item={i} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
