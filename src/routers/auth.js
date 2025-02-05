import express from 'express';
import { login, register, whoami } from '../controllers/auth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/whoami', whoami);

export { router as authRouter };
