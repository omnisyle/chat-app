import React, { SFC } from "react";
import Message from "../Message";

type Props = {
  messages?: object[]
};

const Conversation: SFC<Props> = ({ messages }) => (
  <div className="conversation">
    <Message
      message="Test this message Test this message Test this message Test this message "
      owner={{ profilePicture: "https://api.adorable.io/avatars/60/appot@adorable.png" }}
      continued={false}
    />
    <Message
      message="Test this message"
      owner={{ profilePicture: "https://api.adorable.io/avatars/60/appot@adorable.png" }}
      continued={true}
    />
    <Message
      message="Test this message"
      owner={{ profilePicture: "https://api.adorable.io/avatars/60/appot@adorable.png" }}
      continued={false}
    />
    <Message
      message="Test this message"
      owner={{ profilePicture: "https://api.adorable.io/avatars/60/appot@adorable.png" }}
      continued={true}
    />
    <Message
      message="Test this message"
      owner={{ profilePicture: "https://api.adorable.io/avatars/60/appot@adorable.png" }}
      continued={false}
    />
    <Message
      message="Test this message"
      owner={{ profilePicture: "https://api.adorable.io/avatars/60/appot@adorable.png" }}
      continued={true}
    />
    <Message
      message="Test this message"
      owner={{ profilePicture: "https://api.adorable.io/avatars/60/appot@adorable.png" }}
      continued={true}
    />
    <Message
      message="Test this message"
      owner={{ profilePicture: "https://api.adorable.io/avatars/60/appot@adorable.png" }}
      continued={true}
    />
    <Message
      message="Test this message"
      owner={{ profilePicture: "https://api.adorable.io/avatars/60/appot@adorable.png" }}
      continued={true}
    />
  </div>
);

export default Conversation;