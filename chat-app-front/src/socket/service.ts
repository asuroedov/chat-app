import chatsStore from "../stores/chat/chatsStore";
import { ChatInterface } from "../types/chat";
import { MessageInterface } from "../types/message";

export const handleCreateChatSuccess = (payload: any) => {
  console.log(payload);
};

export const handleGetUserChatsSuccess = (payload: ChatInterface[]) => {
  chatsStore.setChats(payload);
};

export const handleGenerateJoinLinkSuccess = (link: string) => {
  navigator.clipboard.writeText(link);
};

export const addUserInChat = (chat: ChatInterface) => {
  console.log(chat);
};

export const handleGetMessagesSuccess = (messages: MessageInterface[]) => {
  chatsStore.setMessages(messages);
};

export const handleSendMessagesSuccess = (message: MessageInterface) => {
  chatsStore.addMessage(message);
};
