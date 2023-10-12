import express from 'express';
import { AuthRoute } from '../modules/Auth/auth.router';
import { serviceRoute } from '../modules/Service/service.router';
import { servicecategoryRoute } from '../modules/servicecategory/servicecategory.router';

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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
