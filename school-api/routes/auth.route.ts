import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';



export class AuthRoute {

    public static initRoutes(router: Router) {

        const authController = new AuthController();

        router.post('/signup', (req, res, next) => {
            const register = authController.registerUser(req, res);
        })

        router.post('/signin', (req, res, next) => {
            const sign = authController.signinUser(req, res);
        })



    }




}