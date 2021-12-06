import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ChatEntity } from "../../models/ChatEntity";
import { UserEntity } from "../../models/UserEntity";

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity) private chatRepository: Repository<ChatEntity>,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
  ) {}

  async createChat(chatName: string, admin: UserEntity) {
    if (!chatName || !admin) return;

    const existedChat = await this.chatRepository.findOne({ chatName });
    if (existedChat) return;

    const savedChat = await this.chatRepository.save({ chatName, chatAdmin: admin });

    const foundUser = await this.userRepository.findOne(admin.id, { relations: ["chats"] });
    foundUser.chats.push(savedChat);
    await this.userRepository.save(foundUser);

    return savedChat;
  }

  async getUserChats(user: UserEntity) {
    const foundUser = await this.userRepository.findOne(user.id, {
      relations: ["chats", "chats.lastMessage", "chats.chatAdmin"],
    });
    return foundUser?.chats;
  }
}
