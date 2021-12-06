import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ChatEntity } from "../../models/ChatEntity";
import { UserEntity } from "../../models/UserEntity";
import { MessageEntity } from "../../models/MessageEntity";

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(ChatEntity) private chatRepository: Repository<ChatEntity>,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    @InjectRepository(MessageEntity) private messageRepository: Repository<MessageEntity>,
  ) {}

  async getMessages(chatId: number, user: UserEntity) {
    const chat = await this.chatRepository.findOne({ id: chatId }, { relations: ["messages", "messages.owner"] });
    if (!chat) return;

    return chat.messages;
  }

  async newMessage(messageText: string, chatId: number, user: UserEntity) {
    const chat = await this.chatRepository.findOne({ id: chatId }, { relations: ["messages"] });
    if (!chat) return;

    const newMessage = await this.messageRepository.save({ chat, owner: user, text: messageText });
    chat.messages.push(newMessage);
    await this.chatRepository.save(chat);

    return { ...newMessage, chat: { ...newMessage.chat, messages: undefined }, owner: user };
  }
}
