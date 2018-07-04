class Channel {
  id: string;
  lastMessage: {
    authorID: string,
    messageID: string,
    body: string,
  };
  members: { [key: string]: boolean };
  createdAt: String;
  updatedAt: String;
}

export default Channel;
