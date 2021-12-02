import { IsEmail, Length } from "class-validator";

export default class LoginUserDto {
  @IsEmail()
  readonly email: string;

  @Length(4, 20)
  readonly password: string;
}
