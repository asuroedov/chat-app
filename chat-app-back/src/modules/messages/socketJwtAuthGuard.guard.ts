import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UserService } from "../user/user.service";

@Injectable()
export class SocketJwtAuthGuard implements CanActivate {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const client = context.switchToWs().getClient();

    const token = client.handshake.headers.token;
    if (!token) return;

    try {
      const payload = this.jwtService.verify(token, { secret: process.env.JWT_KEY }) as { email: string };
      if (!payload) return;

      const user = await this.userService.findUserByEmail(payload.email).then((user) => user);
      if (!user) return;
      client.user = user;

      return true;
    } catch (e) {
      throw new Error("Пользователь не авторизован");
    }
  }
}
