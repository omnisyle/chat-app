import React from "react";
import Conversation from "../Conversation";
import ConversationHeader from "../ConversationHeader";
import "./styles.scss";

class MainContainer extends React.Component {

  render() {

    return (
      <div className="main-container">
        <ConversationHeader title="Convo Header" />
        <Conversation />
      </div>
    );
  }
}

export default MainContainer;