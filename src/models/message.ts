import ApplicationRecord from './application_record';

class Message extends ApplicationRecord {
  static readonly _collectionName: string = "channels"

  id: string;
  docRef: DocRef;
  body: string;
  channelID: string;
  authorID: string;
  createdAt: string;
  updatedAt: string;

  constructor(params: Message) {
    super();
    this.id = params.id;
    this.docRef = params.docRef;
    this.body = params.body;
    this.channelID = params.channelID;
    this.authorID = params.authorID;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}

export default Message;
