import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CartIconSvg } from "../../assets/shopping-bag.svg";
import { toggleCart } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

import "./cart-icon.scss";

const CartIcon = () => {
  const totalQuantity = useSelector(selectCartItemsCount);

  console.log("renderd");

  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
      <CartIconSvg className="cart-icon-svg" />
      <span className="number-items">{totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
