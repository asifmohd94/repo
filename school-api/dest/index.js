"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./middlewares/index");
const app = express_1.default();
app.use(express_1.default.json());
index_1.Middlewares.init(app);
app.listen(3500, () => {
    console.log("Server is running on port 3500");
});
//# sourceMappingURL=index.js.map