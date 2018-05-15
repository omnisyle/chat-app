import React from "react";
import Sidebar from "../Sidebar";
import Main from "../Main";
import "./styles.scss";

class App extends React.Component {

  render() {
    return (
      <div className="chat-app">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;