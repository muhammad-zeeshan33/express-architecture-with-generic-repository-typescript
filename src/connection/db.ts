// src/config/db.ts
import mongoose from 'mongoose';
import config from '../loadEnv';
import * as colors from 'colors'

const connectDB = async (): Promise<void> => {
    const mongoURI = config.MONGO_URI!
    
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

export default connectDB;
