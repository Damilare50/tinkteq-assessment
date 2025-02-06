/**
 *
 * @param {*} req
 * @param {*} res
 */
export const baseRoute = (req, res) => {
  return res.status(200).json({
    success: true,
    message:
      'Shipper base route. Can only be accessed by users with Shipper role',
  });
};
