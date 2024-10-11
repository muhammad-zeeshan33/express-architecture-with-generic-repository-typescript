// src/controllers/todo.controller.ts
import { Request, Response, NextFunction } from 'express';
import todoService from '../services/todoService';

export class TodoController {
  async createTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = await todoService.createTodo(req.body);
      res.status(201).json(todo);
    } catch (error) {
      next(error);
    }
  }

  async getTodos(req: Request, res: Response, next: NextFunction) {
    try {
      const todos = await todoService.getTodos();
      res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  }

  async getTodoById(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = await todoService.getTodoById(req.params.id);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  }

  async updateTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = await todoService.updateTodo(req.params.id, req.body);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  }

  async deleteTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const success = await todoService.deleteTodo(req.params.id);
      if (!success) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.status(200).json({ message: 'Todo deleted' });
    } catch (error) {
      next(error);
    }
  }
}
