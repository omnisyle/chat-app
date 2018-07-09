import React from "react";
import ChannelListInteractor from "./channel_list_interactor";
import ChannelListPresenter from "./channel_list_presenter";
import ChannelList from "./channel_list";
import ChannelViewModel from "./channel_view_model";
import "./styles.scss";

const initialState = {
  channels: [],
  loading: false,
};

type State = typeof initialState;

class ChannelListContainer extends React.Component<{}, State> {

  readonly state: State =  initialState;

  interactor: ChannelListInteractor;
  presenter: ChannelListPresenter;

  constructor(props: {}) {
    super(props);

    this.presenter = new
      ChannelListPresenter(this);

    this.interactor = new
      ChannelListInteractor(this.presenter);

    this.getChannels = this.getChannels.bind(this);
  }

  componentDidMount() {
    this.getChannels();
  }

  getChannels() : Promise<void> {
    return this.interactor.getChannels();
  }

  displayChannels(channels: ChannelViewModel[]) : void {
    this.setState((state) => (
      {
        channels: [
          ...state.channels,
          ...channels
        ]
      }
    ));
  }

  render() {
    return (
      <ChannelList />
    );
  }
}

export default ChannelListContainer;
