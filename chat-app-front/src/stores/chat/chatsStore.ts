import { makeAutoObservable } from "mobx";
import { ChatInterface } from "../../types/chat";
import chatEmits from "../../socket/chatEmits";

class ChatsStore {
  chats: ChatInterface[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchChats() {
    chatEmits.getChats();
  }

  setChats(chats: ChatInterface[]) {
    this.chats = chats;
  }
}

export default new ChatsStore();
