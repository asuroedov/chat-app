import { getSocket } from "./socket";
import { socketEventNames } from "./socketEventNames";

class ChatEmits {
  createNewChat(chatName: string) {
    getSocket()?.emit(socketEventNames.createChat, { chatName });
  }
}

export default new ChatEmits();
