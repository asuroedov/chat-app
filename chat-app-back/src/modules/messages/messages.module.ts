import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { UserModule } from "../user/user.module";
import { MessagesGateway } from "./messages.gerway";
import { MessagesService } from "./messages.service";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: {
        expiresIn: "24h",
      },
    }),
  ],
  providers: [MessagesGateway, MessagesService],
  exports: [MessagesService],
})
export class MessagesModule {}
