import React from "react";
import { DirectoryMenuComponent } from "../../components/directory-menu/DirectoryMenuComponent";
import "./homepage.styles.scss";

export const HomePage: React.FC<any> = (props) => {
  return (
    <div className="homepage">
      <DirectoryMenuComponent />
    </div>
  );
};
