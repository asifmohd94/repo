"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRoute = void 0;
const class_controller_1 = require("../controllers/class.controller");
class ClassRoute {
    static initRoutes(router) {
        router.get('/class/info', (req, res, next) => {
            const grade = new class_controller_1.ClassController().getClassInfo(req, res);
        });
    }
}
exports.ClassRoute = ClassRoute;
//# sourceMappingURL=class.route.js.map