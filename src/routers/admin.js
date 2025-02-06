import express from 'express';
import { auth } from '../middleware/auth.js';
import { USER_ROLE_ADMIN } from '../constants/index.js';
import { baseRoute } from '../controllers/admin.js';

const router = express.Router();

router.use(auth([USER_ROLE_ADMIN]));

router.get('/', baseRoute);

export { router as adminRouter };
