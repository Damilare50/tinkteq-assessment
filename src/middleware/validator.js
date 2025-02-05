import { validationResult } from 'express-validator';

export const validate = (rulesArray) => {
  return async (req, res, next) => {
    await Promise.all(rulesArray.map((rule) => rule.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  };
};
