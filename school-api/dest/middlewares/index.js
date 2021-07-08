"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middlewares = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const index_1 = require("../routes/index");
class Middlewares {
    static init(app) {
        app.use(cors_1.default());
        const router = express_1.Router();
        app.use('/api', router);
        index_1.init(router);
    }
}
exports.Middlewares = Middlewares;
//# sourceMappingURL=index.js.map