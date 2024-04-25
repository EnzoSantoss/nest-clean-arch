import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ type: 'varchar' })
  user_id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  createdAt: Date;
}
