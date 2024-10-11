import * as bcrypt from 'bcryptjs'
import userService from './userService'
import jwtService from '../utils/jwt.service'
import { IUser } from '../entities/interfaces';

interface Login {
    email: string,
    password: string
}

class AuthService {

    constructor(){}

    async register(payload: IUser) : Promise<any>{
        const existingUser = await userService.getUserByEmail(payload.email);
        if(existingUser){
            throw new Error("User already registered");
        }
        const user = await userService.createUser(payload);
        const jwtToken = jwtService.generateToken({
            userId: user.id,
            email: user.email,
        })

        return {
            ...user,
            accessToken: jwtToken
        }
    }

    async login(payload: Login): Promise<any>{
        const existingUser = await userService.getUserByEmail(payload.email);
        if(!existingUser){
            throw new Error("User does not exist");
        }

        const isMatch = this.comparePassword(payload.password, existingUser.password)
        if(!isMatch){
            throw new Error("Password is incorrect");
        }

        const jwtToken = jwtService.generateToken({
            userId: existingUser.id,
            email: existingUser.email
        });

        return {
            ...existingUser,
            accessToken: jwtToken
        }

    }

    async encryptPassword(password: string): Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    async comparePassword(password: string, userPassword: string){
        return await bcrypt.compare(password, userPassword);
    }

}

export default new AuthService();