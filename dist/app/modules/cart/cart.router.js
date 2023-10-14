"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const cart_controller_1 = require("./cart.controller");
const cartvalidation_1 = require("./cartvalidation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(cartvalidation_1.cartslice), cart_controller_1.cartController.insertcart);
router.get('/', cart_controller_1.cartController.getcart);
router.delete('/:id', cart_controller_1.cartController.deletecart);
router.get('/all', cart_controller_1.cartController.getallcart);
exports.cartRoute = router;
