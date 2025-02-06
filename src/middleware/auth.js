import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const auth = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      const auth = req.header('Authorization');
      if (!auth) {
        return res
          .status(401)
          .json({ success: false, message: 'Unauthorized' });
      }

      const token = auth.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.userId);
      if (!user) {
        return res
          .status(401)
          .json({ success: false, message: 'Unauthorized' });
      }

      // role validation
      if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
        return res.status(403).json({ success: false, message: 'Forbidden' });
      }

      req.user = user;
      next();
    } catch (err) {
      console.log('Auth middleware error: ', err);
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
  };
};
