"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const user_service_1 = require("./user.service");
const insertprofile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized');
    }
    // verify token
    let verifiedUser = null;
    verifiedUser = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt_secret);
    const id = verifiedUser.userId;
    const result = yield user_service_1.profileService.insertprofike(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'profile inserted successfully',
        data: result,
    });
}));
const getprofile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized');
    }
    // verify token
    let verifiedUser = null;
    verifiedUser = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt_secret);
    const id = verifiedUser.userId;
    const result = yield user_service_1.profileService.getprofile(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'profile data get successfully',
        data: result,
    });
}));
const updateprofile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized');
    }
    // verify token
    let verifiedUser = null;
    verifiedUser = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt_secret);
    const id = verifiedUser.userId;
    const result = yield user_service_1.profileService.updateprofile(req.body, id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'profile updated successfully',
        data: result,
    });
}));
const singleuseralldetails = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized');
    }
    // verify token
    let verifiedUser = null;
    verifiedUser = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt_secret);
    const id = verifiedUser.userId;
    const result = yield user_service_1.profileService.getfulluser(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'profile data get successfully',
        data: result,
    });
}));
exports.profileController = {
    insertprofile,
    getprofile,
    updateprofile,
    singleuseralldetails,
};
