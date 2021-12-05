import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

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
}
