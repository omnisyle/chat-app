import React, { SFC } from "react";
import Channel from "../Channel";

type Props = {
  channels?: any[]
};

const ChannelList: SFC<Props> = ({ channels }) => (
  <div className="channels-list">
    <Channel />
    <Channel />
  </div>
);

export default ChannelList;