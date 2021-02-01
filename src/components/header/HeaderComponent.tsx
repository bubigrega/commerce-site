import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/skirt.svg";

import "./header.styles.scss";

const Header = () => {
  const [logedIn] = useState(false);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="links">
        <Link to="/shop" className="link">
          SHOP
        </Link>
        <Link to="/contact" className="link">
          CONTACT
        </Link>
        <Link to="/sign-in-up" className="link">
          {logedIn ? "SIGN OUT" : "SIGN IN"}
        </Link>
      </div>
    </div>
  );
};

export default Header;
