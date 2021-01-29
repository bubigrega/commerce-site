import React from "react";
import { SHOP_DATA } from "../../local-data/local-data";
import CollectionItem from "../collection-item/CollectionItem.Component";

import "./collections-preview.styles.scss";

const CollectionsPreview = ({ title, items }: typeof SHOP_DATA[0]) => {
  return (
    <div className="collections-preview">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items
          .filter((i, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionsPreview;
