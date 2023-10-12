import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { serviceController } from './service.controller';
import { service } from './servicevalidation';
const router = express.Router();

router.post('/', validateRequest(service), serviceController.createservice);
router.get('/', serviceController.getservice);
router.get('/:id', serviceController.getservicebyid);
router.put('/:id', serviceController.updateservice);
router.delete('/:id', serviceController.deleteservice);

export const serviceRoute = router;
