import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity";
import { ChatEntity } from "./ChatEntity";

@Entity()
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createDate: Date;

  @Column("text")
  text: string;

  @ManyToOne(() => ChatEntity, (chat) => chat)
  chat: ChatEntity;

  @ManyToOne(() => UserEntity, (user) => user)
  owner: UserEntity;
}
