import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { authController } from './auth.controller';
import { authValidation, authsignupValidation } from './authvalidation';

const router = express.Router();

// router.post(
//   '/signup',
//   validateRequest(uservalidation),
//   UserController.createUser
// );

router.post('/signin', validateRequest(authValidation), authController.signin);
router.post(
  '/signup',
  validateRequest(authsignupValidation),
  authController.signup
);
// router.post(
//   '/refresh-token',
//   validateRequest(AuthValidation.refreshTokenZodSchema),
//   authController.refreshToken
// );
export const AuthRoute = router;
