"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const auth_controller_1 = require("../controllers/auth.controller");
class AuthRoute {
    static initRoutes(router) {
        const authController = new auth_controller_1.AuthController();
        router.post('/signup', (req, res, next) => {
            const register = authController.registerUser(req, res);
        });
        router.post('/signin', (req, res, next) => {
            const sign = authController.signinUser(req, res);
        });
    }
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=auth.route.js.map