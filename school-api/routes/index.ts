import { Router } from 'express';
import { AuthRoute } from './auth.route';
import { ClassRoute } from './class.route';
import { StudentRoute } from './student.route'
import { TeacherRoute } from './teacher.route'

export function init(router: Router) {
    StudentRoute.initRoutes(router);
    TeacherRoute.initRoutes(router);
    ClassRoute.initRoutes(router);
    AuthRoute.initRoutes(router);
}