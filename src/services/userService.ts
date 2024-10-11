// src/services/todo.service.ts
import { IUser } from '../entities/interfaces';
import { BaseRepository } from '../repositories/base.respository';
import User from '../entities/User.entity';

class UserService {
  private baseRepository: BaseRepository<IUser>;

  constructor() {
    this.baseRepository = new BaseRepository(User);
  }

  async createUser(todoData: Partial<IUser>): Promise<IUser> {
    return await this.baseRepository.create(todoData);
  }

  async getUsers(): Promise<IUser[]> {
    return await this.baseRepository.findAll();
  }

  async getUserById(id: string): Promise<IUser | null> {
    return await this.baseRepository.findById(id);
  }

  async getUserByEmail(email: string): Promise<IUser | null>{
    return await this.baseRepository.findByFilter({
        email: email
    })
  }

  async updateUser(id: string, todoData: Partial<IUser>): Promise<IUser | null> {
    return await this.baseRepository.update(id, todoData);
  }

  async deleteUser(id: string): Promise<boolean> {
    return await this.baseRepository.delete(id);
  }
}

const todoService = new UserService();
export default todoService; 



