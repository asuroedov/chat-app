import { Body, Controller, Get, Headers, HttpException, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import CreateUserDto from "../user/dto/create-user.dto";
import LoginUserDto from "../user/dto/login-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("registration")
  async registration(@Body() userDto: CreateUserDto) {
    const jwtToken = await this.authService.registration(userDto);

    if (!jwtToken) throw new HttpException("Ошибка регистрации пользователя", 400);
    return jwtToken;
  }

  @Post("login")
  async login(@Body() userDto: LoginUserDto) {
    const loginData = await this.authService.login(userDto);

    if (!loginData) throw new HttpException("Неверные email или пароль", 400);
    return loginData;
  }

  @Get("profile")
  async profile(@Headers() { token }: { token: string }) {
    return await this.authService.profile(token);
  }
}
