import { getSocket } from "./socket";
import { socketEventNames } from "./socketEventNames";

class ChatEmits {
  createNewChat(chatName: string) {
    getSocket()?.emit(socketEventNames.createChat, { chatName });
  }

  getChats() {
    getSocket()?.emit(socketEventNames.getUserChats);
  }

  createJoinLink(chatId: number) {
    getSocket()?.emit(socketEventNames.generateJoinLink, { chatId });
  }

  getMessages(chatId: number) {
    getSocket()?.emit(socketEventNames.getMessages, { chatId });
  }

  sendMessage(message: string, chatId: number) {
    getSocket()?.emit(socketEventNames.sendMessage, { message, chatId });
  }
}

export default new ChatEmits();
