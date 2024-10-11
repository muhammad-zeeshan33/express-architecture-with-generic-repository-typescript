import express from 'express';
import authRoutes from './authRoutes';
import todoRoutes from './todoRoutes';

const router = express.Router();

router.use('/auth', authRoutes);  
router.use('/', todoRoutes); 

export default router;
