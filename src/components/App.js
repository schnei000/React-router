import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import ErrorPage from "../../ErrorPage";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        {/* Route de secours pour les chemins non correspondants (page 404) */}
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
