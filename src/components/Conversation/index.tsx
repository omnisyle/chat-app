import React from "react";
import Message from "../Message";
import "./styles.scss";

class ConversationContainer extends React.Component {

  render() {
    return (
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
  }
}

export default ConversationContainer;