import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from "../../services/user_context";
import App from "../App";
import Login from "../LogIn";
import PrivateRoute from "../PrivateRoute";

class Root extends Component<{}, {}> {

  render() {
    return (
      <UserProvider>
        <Router>
          <Switch>
            <Route
              path="/login"
              component={Login}
            />
            <PrivateRoute
              path="/"
              component={App}
            />
          </Switch>
        </Router>
      </UserProvider>
    );
  }
}

export default Root;
