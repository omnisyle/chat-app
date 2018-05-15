import React, { SFC } from "react";

type Props = {
  title?: string
};

const ConversationHeader: SFC<Props> = ({ title }) => (
  <div className="header">
    {title}
  </div>
);

export default ConversationHeader;