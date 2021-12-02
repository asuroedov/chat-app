import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

import CreateUserDto from "../user/dto/create-user.dto";
import { UserService } from "../user/user.service";
import { UserEntity } from "../../models/UserEntity";
import LoginUserDto from "../user/dto/login-user.dto";

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async registration(userDto: CreateUserDto) {
    const { email, userName, password } = userDto;

    let candidate = await this.userService.findUserByEmail(email);
    if (candidate) return;

    candidate = await this.userService.findUserByUserName(userName);
    if (candidate) return;

    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.userService.createUser({ email, userName, hashedPassword });
    await this.userService.saveUser(user);

    return this.generateToken(user);
  }

  async login(userDto: LoginUserDto) {
    const user = await this.userService.findUserByEmail(userDto.email);
    if (!user) return;

    const passwordIsValid = await bcrypt.compare(userDto.password, user.hashedPassword);
    if (!passwordIsValid) return;

    return {
      id: user.id,
      token: this.generateToken(user),
    };
  }

  async profile(token: string) {
    const { email } = this.jwtService.verify(token) as { id: number; email: string };
    const user = await this.userService.findUserByEmail(email);
    if (!user) return;

    return {
      id: user.id,
      email: user.email,
    };
  }

  generateToken(user: UserEntity) {
    const payload = { email: user.email, id: user.id };
    return this.jwtService.sign(payload);
  }
}
