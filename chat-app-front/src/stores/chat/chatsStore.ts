import { makeAutoObservable } from "mobx";
import { ChatInterface } from "../../types/chat";
import chatEmits from "../../socket/chatEmits";
import { MessageInterface } from "../../types/message";

class ChatsStore {
  chats: ChatInterface[] = [];
  selectedChatId: number | null = null;
  chatMessages: MessageInterface[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchChats() {
    chatEmits.getChats();
  }

  fetchMessages() {
    if (!this.selectedChatId) return;
    chatEmits.getMessages(this.selectedChatId);
  }

  sendMessage(message: string) {
    if (!this.selectedChatId || !message) return;
    chatEmits.sendMessage(message, this.selectedChatId);
  }

  setChats(chats: ChatInterface[]) {
    this.chats = chats;
  }

  setSelectedChatIndex(chatId: number) {
    this.selectedChatId = chatId;
  }

  setMessages(messages: MessageInterface[]) {
    this.chatMessages = messages;
  }

  addMessage(message: MessageInterface) {
    this.chatMessages.push(message);
  }

  currentChat() {
    return this.chats.find((chat) => chat.id === this.selectedChatId);
  }
}

export default new ChatsStore();
