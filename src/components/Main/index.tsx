import React from "react";
import { Route } from "react-router-dom";
import Conversation from "../Conversation";
import ConversationHeader from "../ConversationHeader";
import MessageForm from "../MessageForm";
import "./styles.scss";

class MainContainer extends React.Component {

  render() {

    return (
      <div className="main-container">
        <Route path="/ch/:channelID" render={({ match }) => {
          return (
            <>
              <p>{match.params.channelID}</p>
              <ConversationHeader title="Convo Header" />
              <Conversation />
              <MessageForm />
            </>
          );
        }} />
      </div>
    );
  }
}

export default MainContainer;