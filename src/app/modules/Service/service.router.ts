import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { serviceController } from './service.controller';
import { service } from './servicevalidation';
const router = express.Router();

router.post('/', validateRequest(service), serviceController.createservice);

export const serviceRoute = router;