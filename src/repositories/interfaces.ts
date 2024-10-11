import { Document } from 'mongoose';

export interface IBaseRepository<T extends Document> {
  create(item: Partial<T>): Promise<T>;
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  update(id: string, item: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<boolean>;
}