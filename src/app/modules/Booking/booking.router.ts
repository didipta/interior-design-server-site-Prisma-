import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { booking, bookingstatus } from './booingvalidation';
import { bookingController } from './booking.controller';

const router = express.Router();

router.post('/', validateRequest(booking), bookingController.createbooking);
router.get('/', bookingController.allbooking);
router.put(
  '/:id',
  validateRequest(bookingstatus),
  bookingController.bookingstatuschange
);

export const bookingRoute = router;
