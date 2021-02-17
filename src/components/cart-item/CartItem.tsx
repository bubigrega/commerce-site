import { CartItem as CartItemType } from "../../redux/cart/cartReducer";
import "./cart-item.scss";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({
  item: { imageUrl, price, name, quantity },
}: CartItemProps) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price},00 &#8364;
        </span>
      </div>
    </div>
  );
};

export default CartItem;
