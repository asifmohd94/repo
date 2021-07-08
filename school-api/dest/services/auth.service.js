"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const pool_1 = require("../config/pool");
const jwt = __importStar(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthService {
    async registerUser(userDetail) {
        if (!userDetail.username || !userDetail.email || !userDetail.password) {
            throw new Error("Invalid Request");
        }
        const password = await bcrypt_1.default.hash(userDetail.password, 10);
        const query = "INSERT INTO public.user(username,email,password) VALUES($1,$2,$3)";
        const values = [userDetail.username, userDetail.email, password];
        const res = await pool_1.pool.query(query, values);
        return res;
    }
    async signinUser(userDetail) {
        const query = "SELECT * FROM public.user WHERE username = $1 OR email = $2";
        const values = [userDetail.username, userDetail.email];
        const res = await pool_1.pool.query(query, values);
        const user = res.rows[0];
        if (typeof userDetail.password != 'undefined') {
            const isValid = await bcrypt_1.default.compare(userDetail.password, user.password);
            if (!isValid) {
                throw new Error("Invalid username or password");
            }
        }
        const token = jwt.sign({ user: user }, 'secret');
        return token;
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map