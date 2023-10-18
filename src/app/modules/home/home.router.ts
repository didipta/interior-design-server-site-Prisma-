import express from 'express';
import { homeController } from './home.controller';
const router = express.Router();

router.get('/', homeController.homedata);


export const homeRoute = router;
