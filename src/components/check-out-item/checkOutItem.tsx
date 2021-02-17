import { useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../../redux/cart/cartActions";
import { CartItem } from "../../redux/cart/cartReducer";
import "./check-out-item.scss";

const CheckOutItem = ({ id, imageUrl, name, price, quantity }: CartItem) => {
  const dispatch = useDispatch();

  return (
    <div className="check-out-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="item-block">
        <span>{name}</span>
      </div>
      <div className="item-block quantity">
        <span
          className="button"
          onClick={() => dispatch(changeQuantity(id, name, "-"))}
        >
          &#10134;
        </span>
        <span>{quantity}</span>
        <span
          className="button"
          onClick={() => dispatch(changeQuantity(id, name, "+"))}
        >
          &#10133;
        </span>
      </div>
      <div className="item-block">
        <span>{`${price * quantity},00 `}&#8364;</span>
      </div>
      <div className="item-remove">
        <span onClick={() => dispatch(removeFromCart(id))}>&#10005;</span>
      </div>
    </div>
  );
};

export default CheckOutItem;
