import express from 'express';
import { login, register, whoami } from '../controllers/auth.js';
import { validate } from '../middleware/validator.js';
import { loginValidator, registerValidator } from '../validators/auth.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', validate(registerValidator), register);
router.post('/login', validate(loginValidator), login);
router.get('/whoami', auth([]), whoami);

export { router as authRouter };
