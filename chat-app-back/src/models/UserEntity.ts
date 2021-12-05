import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { ChatEntity } from "./ChatEntity";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createDate: Date;

  @Exclude()
  @Column("text")
  email: string;

  @Column("text")
  userName: string;

  @Exclude()
  @Column("text")
  hashedPassword: string;

  @ManyToMany(() => ChatEntity)
  @JoinTable()
  chats: ChatEntity[];
}
