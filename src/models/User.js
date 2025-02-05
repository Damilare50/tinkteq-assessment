import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { USER_ROLES } from '../constants/index.js';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: USER_ROLES,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    // hash password
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

export const User = mongoose.model('User', UserSchema);
