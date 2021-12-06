import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserEntity } from "./UserEntity";
import { MessageEntity } from "./MessageEntity";

@Entity()
export class ChatEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createDate: Date;

  @Column("text")
  chatName: string;

  @ManyToOne(() => UserEntity, (user) => user)
  chatAdmin: UserEntity;

  @OneToMany(() => MessageEntity, (message) => message.chat)
  messages: MessageEntity[];

  @OneToOne(() => MessageEntity)
  @JoinColumn()
  lastMessage: MessageEntity;
}
