import express from 'express';
import { AuthRoute } from '../modules/Auth/auth.router';
import { bookingRoute } from '../modules/Booking/booking.router';
import { serviceRoute } from '../modules/Service/service.router';
import { cartRoute } from '../modules/cart/cart.router';
import { contentRoute } from '../modules/content/content.router';
import { notificationRoute } from '../modules/notification/notification.router';
import { reviewRouter } from '../modules/review/review.router';
import { servicecategoryRoute } from '../modules/servicecategory/servicecategory.router';
import { userRoute } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoute,
  },
  {
    path: '/category',
    route: servicecategoryRoute,
  },
  {
    path: '/service',
    route: serviceRoute,
  },
  {
    path: '/booking',
    route: bookingRoute,
  },
  {
    path: '/notification',
    route: notificationRoute,
  },
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/review',
    route: reviewRouter,
  },
  {
    path: '/cart',
    route: cartRoute,
  },
  {
    path: '/content',
    route: contentRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
