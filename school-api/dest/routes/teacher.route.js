"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherRoute = void 0;
const teacher_controller_1 = require("../controllers/teacher.controller");
class TeacherRoute {
    static initRoutes(router) {
        router.get('/teacher/info', (req, res, next) => {
            const teacher = new teacher_controller_1.TeacherController().getTeacher(req, res);
        });
        router.post('/teacher/create', (req, res, next) => {
            const teacher = new teacher_controller_1.TeacherController().createTeacher(req, res);
        });
    }
}
exports.TeacherRoute = TeacherRoute;
//# sourceMappingURL=teacher.route.js.map