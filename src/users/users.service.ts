import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'eric',
        password: 'chingalo',
      },
      {
        userId: 2,
        username: 'lisa',
        password: 'elissa04',
      },
      {
        userId: 3,
        username: 'arthur',
        password: '1107',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
