import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

  @OneToOne(() => MessageEntity)
  @JoinColumn()
  lastMessage: MessageEntity;
}
