import React from "react";
import { onSignIn } from "./api_service";
import User from "../models/user";

interface ProviderState {
  user: User
};

interface UpdateStateArg {
  key: keyof ProviderState
  value: any
};

interface ProviderStore {
  state: ProviderState
  update: (arg: UpdateStateArg) => void
};

const UserContext = React.createContext({} as ProviderStore);
const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component<{}, ProviderState> {

  readonly state = {
    user: {} as User
  };
  unregisterAuthChanged: () => void;

  componentDidMount() {
    this.unregisterAuthChanged = onSignIn(
      (user: User) => {
        this.update({ key: "user", value: user });
      }
    );
  }

  componentWillUnmount() {
    this.unregisterAuthChanged();
  }

  update({ key, value }: UpdateStateArg) {
    this.setState({ [key]: value });
  }

  render() {
    const store: ProviderStore = {
      state: this.state,
      update: this.update
    };

    return (
      <UserContext.Provider value={store}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
export { UserConsumer };
