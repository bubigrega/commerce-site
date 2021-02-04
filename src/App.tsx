import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/HeaderComponent";
import { HomePage } from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop_Component";
import SignInUp from "./pages/sign-in-up/SignInUp";
import { auth } from "./firebase/config";

function App() {
  const [user, setUser] = useState<null | any>(null);

  useEffect(() => {
    const unsubscribeFromGoogle = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
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
