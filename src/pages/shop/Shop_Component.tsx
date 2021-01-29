import React, { useState } from "react";
import CollectionsPreview from "../../components/collections-preview/CollectionsPreview.Component";
import { SHOP_DATA } from "../../local-data/local-data";

import "./shop.styles.scss";

const Shop = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map((items) => (
        <CollectionsPreview key={items.id} {...items} />
      ))}
    </div>
  );
};

export default Shop;
