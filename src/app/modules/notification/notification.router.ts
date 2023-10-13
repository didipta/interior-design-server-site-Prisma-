import express from 'express';
import { notificationController } from './notification.controller';

const router = express.Router();

router.get('/', notificationController.getallnotificaton);
router.put('/', notificationController.updatenotification);
router.delete('/:id', notificationController.notificationdelete);

export const notificationRoute = router;
