export enum socketEventNames {
  createChat = "createChat",
  createChatSuccess = "createChat:success",
  createChatFail = "createChat:fail",

  getUserChats = "getUserChats",
  getUserChatsSuccess = "getUserChats:success",
  getUserChatsFail = "getUserChats:fail",

  getMessages = "getMessages",
  getMessagesSuccess = "getMessages:success",
  getMessagesFail = "getMessages:fail",

  sendMessage = "sendMessage",
  sendMessageSuccess = "sendMessage:success",
  sendMessageFail = "sendMessage:fail",

  generateJoinLink = "generateJoinLink",
  generateJoinLinkSuccess = "generateJoinLink:success",
  generateJoinLinkFail = "generateJoinLink:fail",

  addUserInChat = "addUserInChat",
  addUserInChatSuccess = "addUserInChat:success",
  addUserInChatFail = "addUserInChat:fail",
}
