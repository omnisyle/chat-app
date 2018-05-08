import * as React from "react";
import Sidebar from "../Sidebar";
import "./styles.scss";

class App extends React.Component {

  render() {
    return (
      <div className="chat-app">
        <Sidebar />
      </div>
    );
  }
}

export default App;