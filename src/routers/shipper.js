import express from 'express';
import { auth } from '../middleware/auth.js';
import { USER_ROLE_SHIPPER } from '../constants/index.js';

const router = express.Router();

router.use(auth([USER_ROLE_SHIPPER]));

router.get('/');

export { router as shipperRouter };
