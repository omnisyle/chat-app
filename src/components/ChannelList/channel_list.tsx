import React, { SFC } from "react";
import { Link } from "react-router-dom";
import Channel from "../Channel";

type Props = {
  channels?: any[]
};

const ChannelList: SFC<Props> = ({ channels }) => (
  <div className="channels-list">
    <Link to={`/ch/test`}>
      <Channel />
    </Link>
    <Link to={`/ch/test2`}>
      <Channel />
    </Link>
  </div>
);

export default ChannelList;