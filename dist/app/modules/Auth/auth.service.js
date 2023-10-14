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
exports.authService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const user_service_1 = require("../user/user.service");
const signup = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const emailexit = yield prisma_1.default.user.findUnique({
        where: {
            email: data.email,
        },
    });
    if (emailexit) {
        throw new Error('Email already exist');
    }
    if (data.password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
    }
    const passwordHash = yield bcryptjs_1.default.hash(data.password, Number(config_1.default.bcrypt_salt));
    data.password = passwordHash;
    data.defaultpassword = '1';
    const result = yield prisma_1.default.user.create({
        data: Object.assign(Object.assign({}, data), { password: passwordHash }),
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true,
        },
    });
    yield user_service_1.profileService.insertprofike(result.id);
    return result;
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isuserExist = yield prisma_1.default.user.findUnique({
        where: {
            email: email,
        },
    });
    if (!isuserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    const isPasswordMatch = yield bcryptjs_1.default.compare(password, isuserExist.password);
    if (!isPasswordMatch) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password is incorrect');
    }
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({
        userId: isuserExist.id,
        role: isuserExist.role,
    }, config_1.default.jwt_secret, config_1.default.jwt_expires_in);
    // const refreshToken = jwtHelpers.createToken(
    //   { email, role: isuserExist.role },
    //   config.jwt_refresh_secret as Secret,
    //   config.jwt_refresh_expires_in as string
    // );
    return {
        accessToken,
        isuserExist,
    };
});
exports.authService = {
    signup,
    login,
};
