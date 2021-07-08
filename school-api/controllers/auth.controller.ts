import * as jwt from 'jsonwebtoken';
import { AuthService } from '../services/auth.service';
import { Request, Response } from 'express';
import { IRegisterUser, ISignUser } from '../models/user.model';
import { IRequest } from '../models/request.model';

export class AuthController {

    authService: AuthService

    constructor() {
        this.authService = new AuthService();
    }

    async signinUser(req: Request, res: Response) {
        const body = req.body as ISignUser;
        const token = await this.authService.signinUser(body);

        res.json({ token: token });
    }

    async registerUser(req: Request, res: Response) {
        const body = req.body as IRegisterUser
        const registerUser = await this.authService.registerUser(body);
        res.json({registerUser});
    }



}