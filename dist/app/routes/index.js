"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_router_1 = require("../modules/Auth/auth.router");
const booking_router_1 = require("../modules/Booking/booking.router");
const service_router_1 = require("../modules/Service/service.router");
const cart_router_1 = require("../modules/cart/cart.router");
const content_router_1 = require("../modules/content/content.router");
const notification_router_1 = require("../modules/notification/notification.router");
const review_router_1 = require("../modules/review/review.router");
const servicecategory_router_1 = require("../modules/servicecategory/servicecategory.router");
const user_routes_1 = require("../modules/user/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_router_1.AuthRoute,
    },
    {
        path: '/category',
        route: servicecategory_router_1.servicecategoryRoute,
    },
    {
        path: '/service',
        route: service_router_1.serviceRoute,
    },
    {
        path: '/booking',
        route: booking_router_1.bookingRoute,
    },
    {
        path: '/notification',
        route: notification_router_1.notificationRoute,
    },
    {
        path: '/user',
        route: user_routes_1.userRoute,
    },
    {
        path: '/review',
        route: review_router_1.reviewRouter,
    },
    {
        path: '/cart',
        route: cart_router_1.cartRoute,
    },
    {
        path: '/content',
        route: content_router_1.contentRoute,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
