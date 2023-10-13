import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { reviewController } from './review.controller';
import { reviewslice } from './reviewvalidation';

const router = express.Router();

router.post('/', validateRequest(reviewslice), reviewController.insertreview);

export const reviewRouter = router;
