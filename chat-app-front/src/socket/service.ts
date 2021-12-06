import chatsStore from "../stores/chat/chatsStore";
import { ChatInterface } from "../types/chat";

export const handleCreateChatSuccess = (payload: any) => {
  console.log(payload);
};

export const handleGetUserChatsSuccess = (payload: ChatInterface[]) => {
  console.log(payload);
  chatsStore.setChats(payload);
};
