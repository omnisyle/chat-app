import Channel from "../../models/channel";
import ChannelListPresenter from "./channel_list_presenter";

class ChannelListInteractor {

  viewController : ChannelListPresenter;

  constructor(viewController: ChannelListPresenter) {
    this.viewController = viewController;
  }

  getChannels(): Promise<void> {

    return new Promise((resolve, reject) => {

    });
  }
}


export default ChannelListInteractor;
