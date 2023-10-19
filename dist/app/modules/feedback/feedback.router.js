"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const feedback_controller_1 = require("./feedback.controller");
const feedbackvalidation_1 = require("./feedbackvalidation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(feedbackvalidation_1.feedbackslice), feedback_controller_1.feedbackController.insertfeedback);
router.get('/', feedback_controller_1.feedbackController.getfeedback);
exports.feedbackRoute = router;
