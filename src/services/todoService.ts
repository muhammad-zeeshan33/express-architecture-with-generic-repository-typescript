// src/services/todo.service.ts
import { ITodo } from '../entities/interfaces';
import { BaseRepository } from '../repositories/base.respository';
import Todo from '../entities/Todo.entity';

class TodoService {
  private baseRepository: BaseRepository<ITodo>;

  constructor() {
    this.baseRepository = new BaseRepository(Todo);
  }

  async createTodo(todoData: Partial<ITodo>): Promise<ITodo> {
    return await this.baseRepository.create(todoData);
  }

  async getTodos(): Promise<ITodo[]> {
    return await this.baseRepository.findAll();
  }

  async getTodoById(id: string): Promise<ITodo | null> {
    return await this.baseRepository.findById(id);
  }

  async updateTodo(id: string, todoData: Partial<ITodo>): Promise<ITodo | null> {
    return await this.baseRepository.update(id, todoData);
  }

  async deleteTodo(id: string): Promise<boolean> {
    return await this.baseRepository.delete(id);
  }
}

const todoService = new TodoService();
export default todoService; 



