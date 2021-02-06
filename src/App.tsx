import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/HeaderComponent";
import { HomePage } from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop_Component";
import SignInUp from "./pages/sign-in-up/SignInUp";
import { auth, createUserProfileDocument } from "./firebase/config";

// interface User {
//   id: string;
//   email: string;
//   displayName: string;
// }

function App() {
  const [user, setUser] = useState<null | any>(null);
  console.log(user);

  useEffect(() => {
    const unsubscribeFromGoogle = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, null);

        userRef?.onSnapshot((snapShot) => {
          const data = snapShot.data();

          setUser({
            id: snapShot.id,
            ...data,
          });
        });
      }
      setUser(null);
    });
    return () => {
      setUser(null);
      unsubscribeFromGoogle();
    };
  }, []);

  return (
    <div className="App">
      <Header isLogged={!!user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign-in-up" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
