import User from "../models/UserModel.js";
export const login = async (req, res, next) => {
  const { firebseUid } = req.body;

  try {
    const user = await User.findOne({ firebaseUid: firebseUid });

    if (!user) {
      res.status(200).json("user doesn't exits");
      return
      
    }

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
