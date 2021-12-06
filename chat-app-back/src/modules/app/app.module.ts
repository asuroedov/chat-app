import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "../user/user.module";
import { UserEntity } from "../../models/UserEntity";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "../auth/auth.module";
import { ChatModule } from "../chat/chat.module";
import { ChatEntity } from "../../models/ChatEntity";
import { MessageEntity } from "../../models/MessageEntity";
import { MessageModule } from "../message/message.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: "development.env" }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: Number(process.env.DB_PORT),
      username: "postgres",
      password: process.env.DB_PASS,
      database: "chat-app",
      entities: [UserEntity, ChatEntity, MessageEntity],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ChatModule,
    MessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
