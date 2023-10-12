import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { servicecategoryController } from './servicecategory.controller';
import { category } from './servicecategoryvalidation';
const router = express.Router();

router.post(
  '/',
  validateRequest(category),
  servicecategoryController.createservecate
);

router.get('/', servicecategoryController.getcategory);
router.get('/:id', servicecategoryController.getcategorybyid);
router.put('/:id', servicecategoryController.updatecategory);
router.delete('/:id', servicecategoryController.deleteservicecate);
export const servicecategoryRoute = router;
