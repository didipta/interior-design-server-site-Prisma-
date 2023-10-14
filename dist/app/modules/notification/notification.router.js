"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationRoute = void 0;
const express_1 = __importDefault(require("express"));
const notification_controller_1 = require("./notification.controller");
const router = express_1.default.Router();
router.get('/', notification_controller_1.notificationController.getallnotificaton);
router.put('/', notification_controller_1.notificationController.updatenotification);
router.delete('/:id', notification_controller_1.notificationController.notificationdelete);
exports.notificationRoute = router;
