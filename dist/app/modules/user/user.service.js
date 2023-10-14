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
exports.profileService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertprofike = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {};
    data.userId = id;
    data.address = ' ';
    data.phonenumber = ' ';
    data.profileimg =
        'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png';
    const result = yield prisma_1.default.profiledetails.create({
        data,
    });
    return result;
});
const getprofile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const result = yield prisma_1.default.profiledetails.findUnique({
        where: {
            userId: id,
        },
        include: {
            user: true,
        },
    });
    const data = {
        name: (_a = result === null || result === void 0 ? void 0 : result.user) === null || _a === void 0 ? void 0 : _a.name,
        email: (_b = result === null || result === void 0 ? void 0 : result.user) === null || _b === void 0 ? void 0 : _b.email,
        address: result === null || result === void 0 ? void 0 : result.address,
        phonenumber: result === null || result === void 0 ? void 0 : result.phonenumber,
        profileimg: result === null || result === void 0 ? void 0 : result.profileimg,
        role: (_c = result === null || result === void 0 ? void 0 : result.user) === null || _c === void 0 ? void 0 : _c.role,
    };
    return data;
});
const updateprofile = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.user.update({
        where: {
            id: id,
        },
        data: {
            name: data.name,
        },
    });
    const result = yield prisma_1.default.profiledetails.update({
        where: {
            userId: id,
        },
        include: {
            user: true,
        },
        data,
    });
    return result;
});
const getfulluser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findUnique({
        where: {
            id: id,
        },
        include: {
            review: true,
            booking: true,
            cart: true,
            feedback: true,
            notification: true,
        },
    });
    return result;
});
exports.profileService = {
    insertprofike,
    getprofile,
    updateprofile,
    getfulluser,
};
