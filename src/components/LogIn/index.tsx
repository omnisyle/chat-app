import React, { Component } from "react";
import { UserConsumer } from "../../services/user_context";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import ApiService from "../../services/api_service";
import { isEmpty } from "../../utils/";
import { Redirect } from "react-router-dom";

class LoginContainer extends Component<{}, {}> {
  loginContainer: HTMLDivElement;

  render() {

    const uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        ApiService.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false
      },
    };

    return (
      <UserConsumer>
        {
          (store) => {
            if (isEmpty(store.state.user)) {
              return (
                <div className="login-container">
                  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={ApiService.auth()} />
                </div>
              );
            } else {
              return (<Redirect to={{ pathname: "/" }} />);
            }
          }
        }
      </UserConsumer>
    );
  }
}

export default LoginContainer;
