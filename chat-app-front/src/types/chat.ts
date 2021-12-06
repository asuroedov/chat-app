import { MessageInterface } from "./message";
import { UserInterface } from "./user";

export interface ChatInterface {
  id: number;
  createDate: string;
  chatName: string;
  lastMessage?: MessageInterface;
  chatAdmin: UserInterface;
}
