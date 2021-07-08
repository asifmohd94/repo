"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const auth_route_1 = require("./auth.route");
const class_route_1 = require("./class.route");
const student_route_1 = require("./student.route");
const teacher_route_1 = require("./teacher.route");
function init(router) {
    student_route_1.StudentRoute.initRoutes(router);
    teacher_route_1.TeacherRoute.initRoutes(router);
    class_route_1.ClassRoute.initRoutes(router);
    auth_route_1.AuthRoute.initRoutes(router);
}
exports.init = init;
//# sourceMappingURL=index.js.map