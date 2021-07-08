"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
class AuthController {
    authService;
    constructor() {
        this.authService = new auth_service_1.AuthService();
    }
    async signinUser(req, res) {
        const body = req.body;
        const token = await this.authService.signinUser(body);
        res.json({ token: token });
    }
    async registerUser(req, res) {
        const body = req.body;
        const registerUser = await this.authService.registerUser(body);
        res.json({ registerUser });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map