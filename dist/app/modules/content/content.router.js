"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const content_controller_1 = require("./content.controller");
const contentvalidation_1 = require("./contentvalidation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(contentvalidation_1.contentslice), content_controller_1.contentController.insertcontent);
router.get('/', content_controller_1.contentController.getcontent);
router.delete('/:id', content_controller_1.contentController.deletecontent);
exports.contentRoute = router;
