import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/skirt.svg";

import "./header.styles.scss";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { selectCartShow } from "../../redux/cart/cartSelectors";

const Header = () => {
  const user = useSelector(selectCurrentUser);
  const showCart = useSelector(selectCartShow);

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
        <CartIcon />
      </div>
      {showCart && <CartDropdown />}
    </div>
  );
};

export default Header;
