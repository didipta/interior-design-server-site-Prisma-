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
exports.notificationService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const notificationcreate = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.notification.create({
        data: {
            type: data.type,
            title: data.title,
            notification: data.notification,
            userId: data.userId,
        },
    });
    return result;
});
const notificationget = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.notification.findMany({
        where: {
            userId: id,
        },
    });
    const length = yield prisma_1.default.notification.count({
        where: {
            userId: id,
            status: 0,
        },
    });
    return {
        result,
        length,
    };
});
const notificationupdate = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.notification.updateMany({
        where: {
            userId: id,
            status: 0,
        },
        data: {
            status: 1,
        },
    });
    return result;
});
const notificationdelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.notification.delete({
        where: {
            id: id,
        },
    });
    return result;
});
exports.notificationService = {
    notificationget,
    notificationupdate,
    notificationdelete,
    notificationcreate,
};
