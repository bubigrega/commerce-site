import { shallowEqual, useSelector } from "react-redux";
import CheckOutItem from "../../components/check-out-item/checkOutItem";
import { selectCartItems, selectCartSum } from "../../redux/cart/cartSelectors";

import "./check-out.scss";

const CheckOut = () => {
  const sum = useSelector(selectCartSum, shallowEqual);
  const items = useSelector(selectCartItems, shallowEqual);
  return (
    <div className="check-out">
      <div className="check-out-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantiny</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block remove">
          <span>Remove</span>
        </div>
      </div>
      {items.map((item) => (
        <CheckOutItem key={item.id + item.name} {...item} />
      ))}
      <div className="total">
        <span>{`TOTAL: ${sum},00 `}&#8364;</span>
      </div>
    </div>
  );
};

export default CheckOut;
