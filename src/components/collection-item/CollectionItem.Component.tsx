import React from "react";
import { SHOP_DATA } from "../../local-data/local-data";

import "./collection-item.styles.scss";

const CollectionItem = ({
  name,
  price,
  imageUrl,
}: typeof SHOP_DATA[0]["items"][0]) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <button className="button">ADD TO CART</button>
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`${price}.00 $`}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
