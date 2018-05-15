import React from "react";
import MessageForm from "./message_form";
import "./styles.scss";

class MessageFormContainer extends React.Component {

  render() {

    return (
      <MessageForm sendMessage={() => {}}/>
    );
  }
}

export default MessageFormContainer;