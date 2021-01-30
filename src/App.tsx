import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/HeaderComponent";
import { HomePage } from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop_Component";

const Hats: React.FC = () => {
  return <div>Hats</div>;
};

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
