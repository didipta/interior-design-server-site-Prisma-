"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicecategoryRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const servicecategory_controller_1 = require("./servicecategory.controller");
const servicecategoryvalidation_1 = require("./servicecategoryvalidation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(servicecategoryvalidation_1.category), servicecategory_controller_1.servicecategoryController.createservecate);
router.get('/', servicecategory_controller_1.servicecategoryController.getcategory);
router.get('/:id', servicecategory_controller_1.servicecategoryController.getcategorybyid);
router.put('/:id', servicecategory_controller_1.servicecategoryController.updatecategory);
router.delete('/:id', servicecategory_controller_1.servicecategoryController.deleteservicecate);
exports.servicecategoryRoute = router;
