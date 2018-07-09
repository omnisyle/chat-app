import React, { Component } from "react";
import Conversation from "../Conversation";
import ConversationHeader from "../ConversationHeader";
import MessageForm from "../MessageForm";
import "./styles.scss";

type PropTypes = {
  match: { params: any }
}

class MainContainer extends Component<PropTypes, {}> {

  render() {
    return (
      <div className="main-container">
        <p>{this.props.match.params.channelID}</p>
        <ConversationHeader title="Convo Header" />
        <Conversation />
        <MessageForm />
      </div>
    );
  }
}

export default MainContainer;
