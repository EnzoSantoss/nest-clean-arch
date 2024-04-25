type UserProps = {
  name: string;
  age: number;
  user_id?: string;
  createdAt?: Date;
};

export class UserEntity {
  constructor(
    public name: string,
    public age: number,
    public user_id?: string,
    public createdAt?: Date,
  ) {}

  create() {
    this.user_id = String(Date.now());
    this.createdAt = new Date();
  }
}
