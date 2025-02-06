/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const baseRoute = (req, res) => {
  return res.status(200).json({
    success: true,
    message:
      'Carrier base route. Can only be accessed by users with Carrier role',
  });
};
