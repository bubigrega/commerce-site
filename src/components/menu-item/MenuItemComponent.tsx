import React from "react";
import "./menu-item.styles.scss";

export const MenuItemComponent: React.FC<any> = ({
  title,
  subtitle,
  imageUrl,
  size,
}) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className={"background-image"}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title" style={{ textTransform: "capitalize" }}>
          {title}
        </h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};
