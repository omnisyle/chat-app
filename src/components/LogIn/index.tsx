import React, { SFC } from "react";
import { Redirect } from "react-router-dom";
import { UserConsumer } from "../../services/user_context";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import AuthService, { SignInOptions } from "../../services/auth_service";
import { isEmpty } from "../../utils/";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [ SignInOptions.Email ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  },
};

const LoginContainer: SFC<{}> = () => (
  <UserConsumer>
    {(store) => {
      if (isEmpty(store.state.user)) {
        return (
          <div className="login-container">
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={AuthService.auth}
            />
          </div>
        );
      } else {
        return (<Redirect to={{ pathname: "/" }} />);
      }
    }}
  </UserConsumer>
);

export default LoginContainer;
