import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/HeaderComponent";
import { HomePage } from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop_Component";
import SignInUp from "./pages/sign-in-up/SignInUp";
import { auth, createUserProfileDocument } from "./firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelectors";
import CheckOut from "./pages/check-out/checkOut";

function App() {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromGoogle = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, null);

        userRef?.onSnapshot((snapShot) => {
          const data = snapShot.data();

          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...data,
            })
          );
        });
      }
      dispatch(setCurrentUser(null));
    });
    return () => {
      dispatch(setCurrentUser(null));
      unsubscribeFromGoogle();
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route
          exact
          path="/sign-in-up"
          render={() => (user ? <Redirect to="/" /> : <SignInUp />)}
        />
      </Switch>
    </div>
  );
}

export default App;
