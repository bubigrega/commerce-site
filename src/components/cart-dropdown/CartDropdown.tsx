import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleCart } from "../../redux/cart/cartActions";

import { selectCartItems } from "../../redux/cart/cartSelectors";
import CustomButton from "../buttons/CustomButton";
import CartItem from "../cart-item/CartItem";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((i) => <CartItem key={i.id + i.name} item={i} />)
        ) : (
          <span className="no-items">No items in cart</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCart());
          return history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
