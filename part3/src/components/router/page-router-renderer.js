import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Routes} from "./routes";

export default function PageRouterRenderer() {
  return (
    <Router>
      <Switch>
        {Routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </Router>
  );
}
