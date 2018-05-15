import React from "react";
import "./styles.scss";

const Channel = () => (
  <div className="channel">
    <div className="profile-picture-container">
      <img
        className="profile-picture"
        src="https://api.adorable.io/avatars/60/abott@adorable.png"
        alt="adorable-avatar"
      />
    </div>
    <div className="channel-info">
      <h4 className="channel-title">
        Username
      </h4>
    </div>
  </div>
);

export default Channel;