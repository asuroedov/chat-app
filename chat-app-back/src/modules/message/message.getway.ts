import { SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { UseGuards } from "@nestjs/common";
import { SocketJwtAuthGuard } from "../../guards/socketJwtAuthGuard.guard";
import { MessageService } from "./message.service";

@UseGuards(SocketJwtAuthGuard)
@WebSocketGateway(5050, { cors: true })
export class MessageGateway {
  constructor(private readonly messageService: MessageService) {}

  @SubscribeMessage("test")
  async test() {
    this.messageService.test();
  }
}
