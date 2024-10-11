// src/controllers/todo.controller.ts
import { Request, Response, NextFunction } from 'express';
import authService from '../services/auth.service';

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.body;
      payload.password = await authService.encryptPassword(payload.password);
      const user = await authService.register(payload);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction){
    try {
      const payload = req.body;
      const user = await authService.login(payload)
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

}
