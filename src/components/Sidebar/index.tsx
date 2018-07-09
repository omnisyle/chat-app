import React from "react";
import ChannelList from "../ChannelList";
import { UserConsumer } from "../../services/user_context";
import "./styles.scss";

const Sidebar = () => (
  <UserConsumer>
    {(store) => {
      const { user } =  store.state;

      return (
        <div className="sidebar">
          <div className="sidebar-header">
            <h2 className="sidebar-title">{user.displayName}</h2>
            <div className="actions">
              <a href="#" className="add-channel">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
          <div className="sidebar-body">
            <ChannelList />
          </div>
        </div>
      );
    }}
  </UserConsumer>
);

export default Sidebar;
