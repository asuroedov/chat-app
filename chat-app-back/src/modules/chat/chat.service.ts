import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ChatEntity } from "../../models/ChatEntity";
import { UserEntity } from "../../models/UserEntity";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity) private chatRepository: Repository<ChatEntity>,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
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

  async generateJoinLink(chatId: number, user: UserEntity) {
    const foundUser = await this.userRepository.findOne({ id: user.id }, { relations: ["chats"] });
    if (!foundUser) return;
    if (!foundUser.chats.find((chat) => chat.id === chatId)) return;

    const link = this.jwtService.sign({ chatId });
    return `${process.env.HOST}:${process.env.PORT}/join/${link}`;
  }
}
