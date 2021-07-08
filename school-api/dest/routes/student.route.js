"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoute = void 0;
const student_controller_1 = require("../controllers/student.controller");
class StudentRoute {
    static initRoutes(router) {
        router.get('/student/info', (req, res, next) => {
            const student = new student_controller_1.StudentController().getStudent(req, res);
        });
        router.post('/student/addmission', (req, res, next) => {
            const student = new student_controller_1.StudentController().createStudent(req, res);
        });
    }
}
exports.StudentRoute = StudentRoute;
//# sourceMappingURL=student.route.js.map