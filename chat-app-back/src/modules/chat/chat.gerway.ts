import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { ClassSerializerInterceptor, UseGuards, UseInterceptors } from "@nestjs/common";

import { SocketJwtAuthGuard } from "./socketJwtAuthGuard.guard";
import { UserEntity } from "../../models/UserEntity";
import { CurrentUser } from "../../decorators/currentUser.decorator";
import { ChatService } from "./chat.service";
import { socketEventNames } from "./socketEventNames";

@UseGuards(SocketJwtAuthGuard)
@WebSocketGateway(5050, { cors: true })
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @SubscribeMessage(socketEventNames.createChat)
  async createChat(@MessageBody() payload: { chatName: string }, @CurrentUser() user: UserEntity) {
    const { chatName } = payload;

    const createdChat = await this.chatService.createChat(chatName, user);

    if (!createdChat) return { event: socketEventNames.createChatFail, data: {} };
    return { event: socketEventNames.createChatSuccess, data: createdChat };
  }

  @SubscribeMessage(socketEventNames.getUserChats)
  async getUserChats(@CurrentUser() user: UserEntity) {
    const chats = await this.chatService.getUserChats(user);

    if (!chats) return { event: socketEventNames.createChatFail };
    return { event: socketEventNames.getUserChatsSuccess, data: chats };
  }
}
