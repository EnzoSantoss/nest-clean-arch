import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from 'src/users/domain/repositories/user.repository';
import { User } from './user.model';
import { Repository } from 'typeorm';
import { Connection } from 'mysql2';

@Injectable()
export class UserTypeOrmRepository implements IUserRepository {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectDataSource() private readonly connection: Connection,
  ) {}

  async create(data: any) {
    const newUser = new User();

    newUser.user_id = String(Date.now());
    newUser.name = data?.name;
    newUser.age = data?.age;
    newUser.createdAt = new Date();

    await this.userRepository.save(newUser);
  }
  async findAll() {
    const allUsers = await this.connection.query(`
    SELECT 
    user.user_id AS u_id,
    user.name,
    user.age,
    book.*,

    CASE 
    WHEN user.age > 10
      THEN 'older than 10'
    WHEN user.age = 10
      THEN 'equals 10'
    ELSE
      'some other option'    

    END AS 'teste_colum'
    
    FROM user
    LEFT JOIN book
    ON user.user_id = book.user_id
    `);

    return allUsers;
  }
  async findById(id: string) {
    const user = await this.userRepository.findOne({
      where: {
        user_id: id,
      },
    });

    // const user = this.connection.query(`
    // SELECT
    // user.user_id AS u_id,
    // user.name,
    // user.age,
    // book.*

    // LEFT JOIN book
    // ON user.user_id = book.user_id
    // `);

    return user;
  }
}
