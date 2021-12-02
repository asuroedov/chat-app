import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UserEntity } from "../../models/UserEntity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async createUser({ email, userName, hashedPassword }: { email: string; userName: string; hashedPassword: string }) {
    return await this.userRepository.save({ email, userName, hashedPassword });
  }

  async findUserByEmail(email: string, relations?: string[]) {
    return await this.userRepository.findOne({ email }, { relations });
  }

  async findUserByUserName(userName: string) {
    return await this.userRepository.findOne({ userName });
  }

  async saveUser(user: UserEntity) {
    return await this.userRepository.save(user);
  }
}
