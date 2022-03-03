"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("./api/post"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', post_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
    next();
});
app.listen(5000, () => {
    console.log('5000 서버가 켜졌습니다.');
});
//# sourceMappingURL=app.js.map