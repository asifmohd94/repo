"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassController = void 0;
const class_service_1 = require("../services/class.service");
class ClassController {
    classService;
    constructor() {
        this.classService = new class_service_1.ClassService();
    }
    async getClassInfo(req, res) {
        try {
            if (typeof (req.query.grade) != "string") {
                res.status(400)
                    .send("Bad Request");
            }
            else {
                const query = { Grade: parseInt(req.query.grade) };
                const grade = await this.classService.getClassInfo(query);
                res.json({ Grade: grade });
            }
        }
        catch (err) {
            console.log(err);
            res.status(404)
                .send("Not Found");
        }
    }
}
exports.ClassController = ClassController;
//# sourceMappingURL=class.controller.js.map