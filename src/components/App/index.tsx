import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../Sidebar";
import Main from "../Main";
import "./styles.scss";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="chat-app">
          <Sidebar />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;