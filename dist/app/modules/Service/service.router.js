"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const service_controller_1 = require("./service.controller");
const servicevalidation_1 = require("./servicevalidation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(servicevalidation_1.service), service_controller_1.serviceController.createservice);
router.get('/', service_controller_1.serviceController.getservice);
router.get('/:id', service_controller_1.serviceController.getservicebyid);
router.put('/:id', service_controller_1.serviceController.updateservice);
router.delete('/:id', service_controller_1.serviceController.deleteservice);
exports.serviceRoute = router;
