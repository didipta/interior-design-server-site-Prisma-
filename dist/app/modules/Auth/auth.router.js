"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_controller_1 = require("./auth.controller");
const authvalidation_1 = require("./authvalidation");
const router = express_1.default.Router();
// router.post(
//   '/signup',
//   validateRequest(uservalidation),
//   UserController.createUser
// );
router.post('/signin', (0, validateRequest_1.default)(authvalidation_1.authValidation), auth_controller_1.authController.signin);
router.post('/signup', (0, validateRequest_1.default)(authvalidation_1.authsignupValidation), auth_controller_1.authController.signup);
// router.post(
//   '/refresh-token',
//   validateRequest(AuthValidation.refreshTokenZodSchema),
//   authController.refreshToken
// );
exports.AuthRoute = router;
