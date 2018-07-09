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
}

export default Message;
