import React from "react";
import { Route, RouteComponentProps, Redirect, RouteProps } from "react-router-dom";
import { UserConsumer } from "../../services/user_context";
import { isEmpty } from "../../utils/";

const PrivateRoute = ({ component: Component, ...rest } : RouteProps) => {

   const renderComponent = (props: any) : React.ReactNode => {
    return (
      <UserConsumer>
        {
          (store) => {
            if (isEmpty(store.state.user)) {
              return (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: rest.location }
                  }}
                />
                );
            } else {
              return (<Component {...props} />);
            }
          }
        }
      </UserConsumer>
    );
  };

  return (
    <Route
      {...rest}
      render={renderComponent}
    />
  );
};

export default PrivateRoute;
