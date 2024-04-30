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
    newUser.name = 'teste';
    newUser.age = 888;
    newUser.createdAt = new Date();

    await this.userRepository.save(newUser);
  }
  async findAll() {
    // const users = await this.userRepository.find({});
    // console.log(users);
    // return users;
    const teste = await this.connection.query(`SELECT * FROM user`);
    console.log(teste);
  }
  async findById(id: string) {
    const user = await this.userRepository.findOne({
      where: {
        user_id: id,
      },
    });

    return user;
  }
}
