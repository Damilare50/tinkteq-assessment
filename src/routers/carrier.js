import express from 'express';
import { auth } from '../middleware/auth.js';
import { USER_ROLE_CARRIER } from '../constants/index.js';

const router = express.Router();

router.use(auth([USER_ROLE_CARRIER]));

router.get('/');

export { router as carrierRouter };
