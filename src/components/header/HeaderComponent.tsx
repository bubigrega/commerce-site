import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/skirt.svg";
import { auth } from "../../firebase/config";

import "./header.styles.scss";

interface HeaderProps {
  isLogged: boolean;
}

const Header = ({ isLogged }: HeaderProps) => {
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
        {isLogged ? (
          <div
            className="link"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to="/sign-in-up" className="link">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
