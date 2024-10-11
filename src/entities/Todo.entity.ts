// todo.model.ts
import { Schema, model, Document } from 'mongoose';
import { ITodo } from './interfaces';

const todoSchema = new Schema<ITodo>({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100,
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
    default: null,
  }
}, {
  timestamps: true 
});

const Todo = model<ITodo>('Todo', todoSchema);
export default Todo;
