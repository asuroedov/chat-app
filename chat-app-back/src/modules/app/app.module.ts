import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "../user/user.module";
import { UserEntity } from "../../models/UserEntity";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "../auth/auth.module";
import { ChatModule } from "../chat/chat.module";
import { ChatEntity } from "../../models/ChatEntity";

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
      entities: [UserEntity, ChatEntity],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ChatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
