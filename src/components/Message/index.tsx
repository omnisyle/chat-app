import React, { SFC } from "react";
import "./styles.scss";

type Owner = {
  profilePicture: string,
};

type Props = {
  message: string,
  owner: Owner,
  continued: boolean,
  owned?: boolean
};

const renderMessageClass = (
  { continued, owned }: { continued: boolean, owned: boolean }) : string => {
    let baseClass: string = "message";

    if (continued) {
      baseClass += " continued";
    }

    if (owned) {
      baseClass += " right";
    } else {
      baseClass += " left";
    }

    return baseClass;
}

const Message: SFC<Props> = ({
  message,
  owner,
  continued,
  owned = false
}) => (
  <div className={renderMessageClass({ continued: continued, owned: owned })}>
    <div className="profile-picture-container">
      <img
        className="owner-profile-picture"
        src={owner.profilePicture}
        alt="profile-picture"
      />
    </div>

    <div className="message-detail">
      {message}
    </div>
  </div>
);

export default Message;