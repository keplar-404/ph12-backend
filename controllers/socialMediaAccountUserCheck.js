import User from "../models/UserModel.js";

export const socialMediaAccountUserCheck = async (req, res, next) => {
  const { firebseUid } = req.body;

  try {
    const user = await User.findOne({ firebaseUid: firebseUid });

    if (!user) {
      const error = new Error("user doesn't exits");
      error.statusCode = 400;
      throw error;
    }

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
