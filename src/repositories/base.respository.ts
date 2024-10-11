// src/repositories/base.repository.ts
import { Model, Document } from 'mongoose';
import { IBaseRepository } from './interfaces';
import logger from '../logger';

export class BaseRepository<T extends Document> implements IBaseRepository<T> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(item: Partial<T>): Promise<T> {
    logger.info(`Creating new document in ${this.model.modelName}`);
    const newItem = new this.model(item);
    return await newItem.save();
  }

  async findById(id: string): Promise<T | null> {
    logger.info(`Finding document by ID in ${this.model.modelName}: ${id}`);
    return await this.model.findById(id).exec();
  }

  async findByFilter(filter: object): Promise<T | null>{
    logger.info(`Finding document against filter ${filter} in ${this.model.modelName}`)
    return await this.model.findOne(filter);
  }

  async findAll(): Promise<T[]> {
    logger.info(`Fetching all documents from ${this.model.modelName}`);
    return await this.model.find().exec();
  }

  async update(id: string, item: Partial<T>): Promise<T | null> {
    logger.info(`Updating document in ${this.model.modelName} with ID: ${id}`);
    return await this.model.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    logger.info(`Deleting document from ${this.model.modelName} with ID: ${id}`);
    const result = await this.model.findByIdAndDelete(id).exec();
    return result !== null;
  }
}
