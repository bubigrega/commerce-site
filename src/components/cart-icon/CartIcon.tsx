import { useDispatch } from "react-redux";
import { ReactComponent as CartIconSvg } from "../../assets/shopping-bag.svg";
import { toggleCart } from "../../redux/cart/cartActions";

import "./cart-icon.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
      <CartIconSvg className="cart-icon-svg" />
      <span className="number-items">{0}</span>
    </div>
  );
};

export default CartIcon;
