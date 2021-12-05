import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

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
}
