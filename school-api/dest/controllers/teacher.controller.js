"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherController = void 0;
const teacher_service_1 = require("../services/teacher.service");
class TeacherController {
    teacherService;
    constructor() {
        this.teacherService = new teacher_service_1.TeacherService();
    }
    async getTeacher(req, res) {
        try {
            if (typeof (req.query.name) != "string") {
                res.status(400)
                    .send("Bad Request");
            }
            else {
                const name = { FirstName: req.query.name };
                const teacher = await this.teacherService.getTeacher(name);
                res.json({ Teacher: teacher });
            }
        }
        catch (err) {
            console.log(err);
            res.status(400)
                .send("Error occured");
        }
    }
    async createTeacher(req, res) {
        try {
            const teacher = await this.teacherService.createTeacher(req.body);
            res.json({ Teacher: teacher });
        }
        catch (err) {
            console.log(err);
            res.status(400).send("Error Occured");
        }
    }
}
exports.TeacherController = TeacherController;
//# sourceMappingURL=teacher.controller.js.map