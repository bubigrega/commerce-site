import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/skirt.svg";

import "./header.styles.scss";
import { RootReducer } from "../../redux/rootReducer";

const Header = () => {
  const user = useSelector((state: RootReducer) => state.user.currentUser);
  console.log(user);

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
        {user ? (
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
