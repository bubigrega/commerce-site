import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/HeaderComponent";
import { HomePage } from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop_Component";
import SignInUp from "./pages/sign-in-up/SignInUp";
import { auth, createUserProfileDocument } from "./firebase/config";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";

function App() {
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
        <Route path="/sign-in-up" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
