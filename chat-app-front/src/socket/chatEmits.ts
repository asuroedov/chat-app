import { getSocket } from "./socket";
import { socketEventNames } from "./socketEventNames";

class ChatEmits {
  createNewChat(chatName: string) {
    getSocket()?.emit(socketEventNames.createChat, { chatName });
  }

  getChats() {
    getSocket()?.emit(socketEventNames.getUserChats);
  }
}

export default new ChatEmits();
