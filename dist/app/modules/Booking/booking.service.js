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
exports.bookingService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const notification_service_1 = require("../notification/notification.service");
const createbooking = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    data.userId = id;
    data.bookingdate = new Date(data.bookingdate);
    const result = yield prisma_1.default.booking.create({
        data,
        include: {
            service: true,
        },
    });
    if (result) {
        notification_service_1.notificationService.notificationcreate({
            type: 'booking',
            title: `${result.service.name} Booked`,
            notification: 'Received your booking',
            userId: id,
        });
    }
    return result;
});
const allbooking = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.booking.findMany();
});
const bookingstatuschange = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.update({
        where: {
            id: id,
        },
        data: {
            status: status,
        },
        include: {
            service: true,
        },
    });
    if (result) {
        notification_service_1.notificationService.notificationcreate({
            type: 'booking',
            title: `${result.service.name} Booking status changed to ${status}`,
            notification: 'Booking status changed',
            userId: result.userId,
        });
    }
    return result;
});
exports.bookingService = {
    createbooking,
    allbooking,
    bookingstatuschange,
};
