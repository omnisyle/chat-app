import ApplicationRecord from './application_record';

class Channel extends ApplicationRecord {
  static readonly _collectionName: string = "channels"

  id: string;
  docRef: DocRef;
  lastMessage: {
    authorID: string,
    messageID: string,
    body: string,
  };
  members: { [key: string]: boolean };
  createdAt: String;
  updatedAt: String;

  constructor(params: Channel) {
    super();
    this.id = params.id;
    this.lastMessage = params.lastMessage;
    this.members = params.members;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}

export default Channel;