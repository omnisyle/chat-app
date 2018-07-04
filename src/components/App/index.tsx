import React from "react";
import { Route } from "react-router-dom";
import Sidebar from "../Sidebar";
import Main from "../Main";
import "./styles.scss";

class App extends React.Component {

  render() {
    return (
      <div className="chat-app">
        <Sidebar />
        <Route
          path="/ch/:channelID"
          component={Main}
        />
      </div>
    );
  }
}

export default App;
