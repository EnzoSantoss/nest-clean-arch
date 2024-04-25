import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  createdAt: Date;
}
