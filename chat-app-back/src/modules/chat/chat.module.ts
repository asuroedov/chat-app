import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { UserModule } from "../user/user.module";
import { ChatGateway } from "./chat.gerway";
import { ChatService } from "./chat.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChatEntity } from "../../models/ChatEntity";
import { UserEntity } from "../../models/UserEntity";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([ChatEntity, UserEntity]),
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: {
        expiresIn: "24h",
      },
    }),
  ],
  providers: [ChatGateway, ChatService],
  exports: [ChatService],
})
export class ChatModule {}
