import {  Document, Types } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser extends Document {
    name: string,
    email: string,
    password: string,
    todoItems: Types.ObjectId[];
    createdAt: Date,
    updatedAt: Date
}
