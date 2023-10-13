import express from 'express';
import { profileController } from './user.controller';

const router = express.Router();

router.post('/', profileController.insertprofile);
router.get('/profile', profileController.getprofile);
router.put('/', profileController.updateprofile);
router.get('/userdetails', profileController.singleuseralldetails);

export const userRoute = router;
