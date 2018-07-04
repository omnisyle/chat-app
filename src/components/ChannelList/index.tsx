import React from "react";
import ChannelListInteractor from "./channel_list_interactor";
import ChannelListPresenter from "./channel_list_presenter";
import ChannelList from "./channel_list";
import "./styles.scss";

class ChannelListContainer extends React.Component<{}, {}> {

  interactor: ChannelListInteractor;
  presenter: ChannelListPresenter;

  constructor(props: {}) {
    super(props);

    this.presenter = new
      ChannelListPresenter(this);

    this.interactor = new
      ChannelListInteractor(this.presenter);
  }

  componentDidMount() {

  }

  render() {
    return (
      <ChannelList />
    );
  }
}

export default ChannelListContainer;
