import React, { SFC } from "react";

type Props = {
  sendMessage(message: string): void
}

const MessageForm: SFC<Props> = ({ sendMessage }) => (
  <form className="message-form">
    <textarea
      className="message-input"
      placeholder="Type your message..."
    >
    </textarea>
    <a
      href="#"
      className="send-btn"
    >
      <i className="fa fa-paper-plane"></i>
    </a>
  </form>
);

export default MessageForm;