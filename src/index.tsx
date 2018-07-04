import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

import Root from "./components/Root";
import "./styles.scss";

ReactDOM.render(
  <Root />,
  document.getElementById("chat-app-container")
);
