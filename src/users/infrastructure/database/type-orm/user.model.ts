import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Book } from 'src/books/infrastructure/database/type-orm/book.model';

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

  @OneToMany(() => Book, (book) => book.user)
  books: Book[];
}
