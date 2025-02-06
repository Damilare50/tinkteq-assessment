import express from 'express';
import { auth } from '../middleware/auth.js';
import { USER_ROLE_SHIPPER } from '../constants/index.js';
import { baseRoute } from '../controllers/shipper.js';

const router = express.Router();

router.use(auth([USER_ROLE_SHIPPER]));

router.get('/', baseRoute);

export { router as shipperRouter };
