import { memo } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  clearFromCart,
  removeFromCart,
} from "../../redux/cart/cartActions";
import { CartItem } from "../../redux/cart/cartReducer";
import "./check-out-item.scss";

interface CheckOutItemProps {
  item: CartItem;
}

const CheckOutItem = ({ item }: CheckOutItemProps) => {
  const dispatch = useDispatch();
  console.log(item);

  const { imageUrl, name, price, quantity } = item;

  return (
    <div className="check-out-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="item-block">
        <span>{name}</span>
      </div>
      <div className="item-block quantity">
        <span className="button" onClick={() => dispatch(removeFromCart(item))}>
          &#10134;
        </span>
        <span>{quantity}</span>
        <span className="button" onClick={() => dispatch(addToCart(item))}>
          &#10133;
        </span>
      </div>
      <div className="item-block">
        <span>{`${price * quantity},00 `}&#8364;</span>
      </div>
      <div className="item-remove">
        <span onClick={() => dispatch(clearFromCart(item))}>&#10005;</span>
      </div>
    </div>
  );
};

export default memo(CheckOutItem);
