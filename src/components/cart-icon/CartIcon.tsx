import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CartIconSvg } from "../../assets/shopping-bag.svg";
import { toggleCart } from "../../redux/cart/cartActions";
import { RootReducer } from "../../redux/rootReducer";

import "./cart-icon.scss";

const CartIcon = () => {
  const items = useSelector((state: RootReducer) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
      <CartIconSvg className="cart-icon-svg" />
      <span className="number-items">
        {items.reduce(
          (prevValue, nextValue) => prevValue + nextValue.quantity,
          0
        )}
      </span>
    </div>
  );
};

export default CartIcon;
