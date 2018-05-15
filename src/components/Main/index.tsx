import React from "react";
import Conversation from "../Conversation";
import ConversationHeader from "../ConversationHeader";
import MessageForm from "../MessageForm";
import "./styles.scss";

class MainContainer extends React.Component {

  render() {

    return (
      <div className="main-container">
        <ConversationHeader title="Convo Header" />
        <Conversation />
        <MessageForm />
      </div>
    );
  }
}

export default MainContainer;