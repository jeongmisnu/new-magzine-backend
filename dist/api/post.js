"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/post');
router.get('/post');
router.put('/post/:id');
router.delete('/post/:id');
exports.default = router;
//# sourceMappingURL=post.js.map