import { Router } from 'express';
import { ClassController } from '../controllers/class.controller'

export class ClassRoute {

    public static initRoutes(router: Router) {

        router.get('/class/info', (req, res, next) => {
            const grade = new ClassController().getClassInfo(req, res);
        })

    }
}