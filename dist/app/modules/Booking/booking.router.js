"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const booingvalidation_1 = require("./booingvalidation");
const booking_controller_1 = require("./booking.controller");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(booingvalidation_1.booking), booking_controller_1.bookingController.createbooking);
router.get('/', booking_controller_1.bookingController.allbooking);
router.put('/:id', (0, validateRequest_1.default)(booingvalidation_1.bookingstatus), booking_controller_1.bookingController.bookingstatuschange);
exports.bookingRoute = router;
