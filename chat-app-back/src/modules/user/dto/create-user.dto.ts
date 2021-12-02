import { IsEmail, Length } from "class-validator";

export default class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @Length(4, 20)
  readonly userName: string;

  @Length(4, 20)
  readonly password: string;
}
