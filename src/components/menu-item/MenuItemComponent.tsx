import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Item } from "../directory-menu/DirectoryMenuComponent";
import "./menu-item.styles.scss";

interface MenuItemComponentProps {
  subtitle?: string;
}

const MenuItemComponent: React.FC<
  Item & RouteComponentProps & MenuItemComponentProps
> = ({ title, imageUrl, size, history, subtitle, linkUrl, match }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.path}${linkUrl}`)}
    >
      <div
        className={"background-image"}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title" style={{ textTransform: "uppercase" }}>
          {title}
        </h1>
        <span className="subtitle">{subtitle ? subtitle : "SHOP NOW"}</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItemComponent);
