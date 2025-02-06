import { body, header } from 'express-validator';
import { USER_ROLES } from '../constants/index.js';

export const registerValidator = [
  body('email').isEmail().withMessage('Invalid email format').normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('role').isIn(USER_ROLES).withMessage('Invalid role'),
];

export const loginValidator = [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
];
