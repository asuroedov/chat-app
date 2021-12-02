import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createDate: Date;

  @Column("text")
  email: string;

  @Column("text")
  userName: string;

  @Column("text")
  hashedPassword: string;
}
