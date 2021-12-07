import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { ClassSerializerInterceptor, UseGuards, UseInterceptors } from "@nestjs/common";

import { SocketJwtAuthGuard } from "../../guards/socketJwtAuthGuard.guard";
import { UserEntity } from "../../models/UserEntity";
import { CurrentUser } from "../../decorators/currentUser.decorator";
import { ChatService } from "./chat.service";
import { socketEventNames } from "../../utils/socketEventNames";

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

  @UseInterceptors(ClassSerializerInterceptor)
  @SubscribeMessage(socketEventNames.getUserChats)
  async getUserChats(@CurrentUser() user: UserEntity) {
    const chats = await this.chatService.getUserChats(user);

    if (!chats) return { event: socketEventNames.createChatFail };
    return { event: socketEventNames.getUserChatsSuccess, data: chats };
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SubscribeMessage(socketEventNames.generateJoinLink)
  async generateJoinLink(@MessageBody() payload: { chatId: number }, @CurrentUser() user: UserEntity) {
    const link = await this.chatService.generateJoinLink(payload.chatId, user);

    if (!link) return { event: socketEventNames.generateJoinLinkFail };
    return { event: socketEventNames.generateJoinLinkSuccess, data: link };
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SubscribeMessage(socketEventNames.addUserInChat)
  async addUserInChat(@MessageBody() payload: { joinLink: string }, @CurrentUser() user: UserEntity) {
    const chat = await this.chatService.addUserInChat(payload.joinLink, user);

    if (!chat) return { event: socketEventNames.addUserInChatFail };
    return { event: socketEventNames.addUserInChatSuccess, data: chat };
  }
}
