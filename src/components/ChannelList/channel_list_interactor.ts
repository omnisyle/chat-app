import Channel from "../../models/channel";
import AuthService from "../../services/auth_service";
import ChannelListPresenter from "./channel_list_presenter";

class ChannelListInteractor {

  viewPresenter : ChannelListPresenter;

  constructor(viewPresenter: ChannelListPresenter) {
    this.viewPresenter = viewPresenter;
  }

  getChannels(): Promise<void> {
    const currentUser = AuthService.currentUser;
    const filters : DBWhereClause[] = [[
      `members.${ currentUser.id }`,
      WhereOperator.EQUAL,
      true
    ]];

    return new Promise((resolve, reject) => {
      const request : Promise<Channel[]> = Channel.where(filters)

      request.then((channels: Channel[]) => {
        this.viewPresenter.presentChannels(channels);
        resolve();
      }).catch(reject);
    });
  }
}


export default ChannelListInteractor;
