import { useDispatch } from "react-redux";
import { SHOP_DATA } from "../../local-data/local-data";
import { addToCart } from "../../redux/cart/cartActions";
import CustomButton from "../buttons/CustomButton";

import "./collection-item.styles.scss";

const CollectionItem = ({
  id,
  name,
  price,
  imageUrl,
}: typeof SHOP_DATA[0]["items"][0]) => {
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <CustomButton
        onClick={() => dispatch(addToCart({ name, price, id, imageUrl }))}
        inverted
      >
        ADD ITEM
      </CustomButton>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`${price}.00 $`}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
