import express from 'express';
import { TodoController } from '../controllers/todoController'; 

const router = express.Router();
const todoController = new TodoController();
router.get('/todo', todoController.getTodos);
router.post('/todo', todoController.createTodo);

export default router;
