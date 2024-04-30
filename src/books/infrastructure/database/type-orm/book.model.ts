import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/infrastructure/database/type-orm/user.model';

@Entity()
export class Book {
  @PrimaryColumn({ type: 'varchar' })
  book_id: string;

  @Column()
  type_of: string;

  @Column({ type: 'decimal' })
  value: number;

  @Column()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.books)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
