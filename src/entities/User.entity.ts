import { Schema, model } from 'mongoose';
import { IUser } from './interfaces';

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,       
        minlength: 10,
        maxlength: 100,
    },
    todoItems: [{
        type: Schema.Types.ObjectId,
        ref: 'Todo'
    }] 
    
},{
    timestamps: true 
})

const User = model<IUser>('User', userSchema);
export default User;