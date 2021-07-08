import { pool } from '../config/pool';
import { IRegisterUser, ISignUser } from '../models/user.model';
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
export class AuthService {

    public async registerUser(userDetail: IRegisterUser) {
        if (!userDetail.username || !userDetail.email || !userDetail.password) {
            throw new Error("Invalid Request");
        }
     
        const password = await bcrypt.hash(userDetail.password, 10);

        const query = "INSERT INTO public.user(username,email,password) VALUES($1,$2,$3)";
        const values = [userDetail.username, userDetail.email, password];

        const res = await pool.query(query, values);

        return res;

    }

    public async signinUser(userDetail: ISignUser) {
        const query = "SELECT * FROM public.user WHERE username = $1 OR email = $2";
        const values = [userDetail.username, userDetail.email];
        const res = await pool.query(query, values)
        const user = res.rows[0];
        if (typeof userDetail.password != 'undefined') {
            const isValid = await bcrypt.compare(userDetail.password, user.password);
            if (!isValid) {
                throw new Error("Invalid username or password");
            }
        }

        const token = jwt.sign({ user: user }, 'secret');
        return token;
    }

}