/* eslint-disable prettier/prettier */
export interface IUserRepository {
  create(data: any): any;
  findAll();
  findById(id: string);
}
