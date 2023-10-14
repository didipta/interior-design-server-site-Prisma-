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
exports.feedbackService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const notification_service_1 = require("../notification/notification.service");
const insertfeedback = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    data.userId = id;
    const result = yield prisma_1.default.feedback.create({
        data,
        include: {
            user: true,
        },
    });
    if (result) {
        notification_service_1.notificationService.notificationcreate({
            type: 'feedback',
            title: `Your feedback is ${result.subject}`,
            notification: 'feedback added successfully',
            userId: id,
        });
    }
    return result;
});
const getfeedback = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.feedback.findMany({
        where: {
            userId: id,
        },
    });
});
const deletefeedback = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.feedback.delete({
        where: {
            id: id,
        },
    });
});
const getallfeedback = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.feedback.findMany();
});
exports.feedbackService = {
    insertfeedback,
    getfeedback,
    deletefeedback,
    getallfeedback,
};
