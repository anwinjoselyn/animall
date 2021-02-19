import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

import Habits from "./containers/habits/Habits";
import Chat from "./containers/static/Chat";
import Facilities from "./containers/static/Facilities";
import Profile from "./containers/static/Profile";
import Sell from "./containers/static/Sell";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/habits">
        <Habits />
      </Route>

      <Route exact path="/sell">
        <Sell />
      </Route>

      <Route exact path="/community">
        <Chat />
      </Route>

      <Route exact path="/profile">
        <Profile />
      </Route>

      <Route exact path="/pashu-suvidhaen">
        <Facilities />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
