import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { feedbackController } from './feedback.controller';
import { feedbackslice } from './feedbackvalidation';

const router = express.Router();

router.post(
  '/',
  validateRequest(feedbackslice),
  feedbackController.insertfeedback
);

router.get('/', feedbackController.getfeedback);

export const feedbackRoute = router;
