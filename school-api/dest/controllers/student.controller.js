"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_service_1 = require("../services/student.service");
class StudentController {
    studentService;
    constructor() {
        this.studentService = new student_service_1.StudentService();
    }
    async getStudent(req, res) {
        try {
            if (typeof (req.query.name) != "string") {
                res.status(400).send("Bad Request");
            }
            else {
                const query = { FirstName: req.query.name };
                const students = await this.studentService.getStudent(query);
                console.log(students.length);
                res.json({ Students: students });
            }
        }
        catch (err) {
            console.log(err);
            res.status(404)
                .send("Not Found");
        }
    }
    async createStudent(req, res) {
        try {
            const student = await this.studentService.createStudent(req.body);
            res.json({ Student: student });
        }
        catch (err) {
            console.log(err);
            res.status(400)
                .send("Error Occured");
        }
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map