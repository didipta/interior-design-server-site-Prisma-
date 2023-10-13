import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { cartController } from './cart.controller';
import { cartslice } from './cartvalidation';
const router = express.Router();

router.post('/', validateRequest(cartslice), cartController.insertcart);
router.get('/', cartController.getcart);
router.delete('/:id', cartController.deletecart);
router.get('/all', cartController.getallcart);

export const cartRoute = router;
