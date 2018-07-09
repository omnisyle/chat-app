import ChannelListContainer from "./index";
import ChannelViewModel from "./channel_view_model";

class ChannelListPresenter {

  viewController : ChannelListContainer;

  constructor(viewController: ChannelListContainer) {
    this.viewController = viewController;
  }

  presentChannels(channels: Channel[]) : void{
    const viewModels : ChannelViewModel[]= channels.map((channel: Channel) => {
      const viewModel : ChannelViewModel = {
        id: channel.id,
        othersName: "Test",
        othersProfileUrl: "test",
      };

      return viewModel;
    });

    this.viewController.displayChannels(viewModels);
  }
}

export default ChannelListPresenter;
