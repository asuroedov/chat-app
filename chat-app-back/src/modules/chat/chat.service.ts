import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ChatEntity } from "../../models/ChatEntity";
import { UserEntity } from "../../models/UserEntity";

@Injectable()
export class ChatService {
  constructor(@InjectRepository(ChatEntity) private chatRepository: Repository<ChatEntity>) {}

  async createChat(chatName: string, admin: UserEntity) {
    if (!chatName || !admin) return;

    const existedChat = await this.chatRepository.findOne({ chatName });
    if (existedChat) return;

    return await this.chatRepository.save({ chatName, chatAdmin: admin });
  }
}
