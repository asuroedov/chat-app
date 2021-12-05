import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { UseGuards } from "@nestjs/common";

import { SocketJwtAuthGuard } from "./socketJwtAuthGuard.guard";
import { UserEntity } from "../../models/UserEntity";
import { CurrentUser } from "../../decorators/currentUser.decorator";

@UseGuards(SocketJwtAuthGuard)
@WebSocketGateway(5050, { cors: true })
export class MessagesGateway {
  constructor() {}

  @SubscribeMessage("createChat")
  async test(@MessageBody() payload: { documentId: number }, @CurrentUser() user: UserEntity) {
    console.log(payload);
    console.log(user);
    return { event: "createChat:success", data: { message: "123" } };
  }
}
