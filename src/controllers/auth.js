import { User } from '../models/User.js';

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

export const login = async (req, res) => {
  return res.status(200).json({ success: true });
};

export const whoami = async (req, res) => {
  return res.status(200).json({ success: true });
};
