import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserlistPage from "./../../app/users/users-list-page";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={UserlistPage} exact={true} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
