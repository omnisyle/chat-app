import React, { SFC } from "react";
import "./styles.scss";

type Props = {
  title?: string
};

const ConversationHeader: SFC<Props> = ({ title }) => (
  <div className="header">
    <h2 className="title">{title}</h2>
  </div>
);

export default ConversationHeader;