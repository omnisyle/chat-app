import * as React from "react";
import Sidebar from "./sidebar";
import "./styles.scss";

class SidebarContainer extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {

    return (
      <Sidebar
      />
    );
  }
}

export default SidebarContainer;