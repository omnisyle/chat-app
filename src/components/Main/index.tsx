import * as React from "react";
import Conversation from "../Conversation";
import "./styles.scss";

class MainContainer extends React.Component {

  render() {

    return (
      <div className="main-container">
        <div className="header">
          Convo Header
        </div>
        <Conversation />
      </div>
    );
  }
}

export default MainContainer;