import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { ClassSerializerInterceptor, UseGuards, UseInterceptors } from "@nestjs/common";
import { SocketJwtAuthGuard } from "../../guards/socketJwtAuthGuard.guard";
import { MessageService } from "./message.service";
import { socketEventNames } from "../../utils/socketEventNames";
import { UserEntity } from "../../models/UserEntity";
import { CurrentUser } from "../../decorators/currentUser.decorator";

@UseGuards(SocketJwtAuthGuard)
@WebSocketGateway(5050, { cors: true })
export class MessageGateway {
  constructor(private readonly messageService: MessageService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @SubscribeMessage(socketEventNames.getMessages)
  async getMessages(@MessageBody() payload: { chatId: number }, @CurrentUser() user: UserEntity) {
    const messages = await this.messageService.getMessages(payload.chatId, user);

    if (!messages) return { event: socketEventNames.getMessagesFail };
    return { event: socketEventNames.getMessagesSuccess, data: messages };
  }

  @SubscribeMessage(socketEventNames.sendMessage)
  async newMessage(@MessageBody() payload: { message: string; chatId: number }, @CurrentUser() user: UserEntity) {
    const { message, chatId } = payload;

    const savedMessage = await this.messageService.newMessage(message, chatId, user);

    if (!savedMessage) return { event: socketEventNames.sendMessageFail };
    return { event: socketEventNames.sendMessageSuccess, data: savedMessage };
  }
}
