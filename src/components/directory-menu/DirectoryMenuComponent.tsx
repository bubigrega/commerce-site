import React, { useState } from "react";
import MenuItemComponent from "../menu-item/MenuItemComponent";
import "./directory-menu.styles.scss";

export const sections = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
];

export interface items {
  title: string;
  imageUrl: string;
  id?: number;
  linkUrl: string;
  size?: string;
}

export const DirectoryMenuComponent: React.FC<any> = () => {
  const [items] = useState(sections);
  return (
    <div className="directory-menu">
      {items.map(({ id, ...otherValues }) => (
        <MenuItemComponent key={id} {...otherValues} />
      ))}
    </div>
  );
};
