import { UserInterface } from "./user";
import { ChatInterface } from "./chat";

export interface MessageInterface {
  id: number;
  text: string;
  createDate: string;
  owner: UserInterface;
  chat: ChatInterface;
}
