import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/HomePage";

const Hats: React.FC = () => {
  return <div>Hats</div>;
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
