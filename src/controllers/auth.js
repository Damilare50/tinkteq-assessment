import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';

/**
 * Create a new user
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(419)
        .json({ success: false, message: 'user already exist', data: null });
    }

    user = new User({ email, password, role });
    await user.save();

    return res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: { id: user.id, email: user.email, role: user.role },
    });
  } catch (e) {
    console.log('Auth.register error: ', e);
    return res
      .status(500)
      .json({ success: false, message: 'Unknown error occured', data: null });
  }
};

/**
 * Login user
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: 'invalid credentials', data: null });
    }

    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, message: 'invalid credentials', data: null });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return res.status(200).json({
      success: true,
      message: 'login success',
      data: { id: user.id, email: user.email, role: user.role, token },
    });
  } catch (e) {
    console.log('Auth.login error: ', e);
    return res
      .status(500)
      .json({ success: false, message: 'Unknown error occured', data: null });
  }
};

/**
 * Get user information
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const whoami = async (req, res) => {
  try {
    return res
      .status(200)
      .json({
        success: true,
        message: 'user data fetched',
        data: { id: req.user.id, email: req.user.email, role: req.user.role },
      });
  } catch (e) {
    console.log('Auth.whoami error: ', e);
    return res
      .status(500)
      .json({ success: false, message: 'Unknown error occured', data: null });
  }
};
