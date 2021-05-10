import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges}></Route>
        <Route exact path="/badges/new" component={BadgeNew}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
