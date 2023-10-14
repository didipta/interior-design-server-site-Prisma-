import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { contentController } from './content.controller';
import { contentslice } from './contentvalidation';
const router = express.Router();

router.post(
  '/',
  validateRequest(contentslice),
  contentController.insertcontent
);
router.get('/', contentController.getcontent);
router.delete('/:id', contentController.deletecontent);

export const contentRoute = router;
