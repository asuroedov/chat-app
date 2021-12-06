import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { UserModule } from "../user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageService } from "./message.service";
import { MessageGateway } from "./message.getway";
import { MessageEntity } from "../../models/MessageEntity";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([MessageEntity]),
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: {
        expiresIn: "24h",
      },
    }),
  ],
  providers: [MessageGateway, MessageService],
  exports: [MessageService],
})
export class MessageModule {}
