export interface IUserRepository {
  create(data: any): any;
  findAll();
  findById(id: number);
}