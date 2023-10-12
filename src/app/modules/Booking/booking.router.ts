import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { booking } from './booingvalidation';
import { bookingController } from './booking.controller';

const router = express.Router();

router.post('/', validateRequest(booking), bookingController.createbooking);

export const bookingRoute = router;
