import User from "../models/UserModel.js";
export const userRoleUpdate = async (req, res, next) => {
  const { _id, role } = req.body;

  try {
    await User.findByIdAndUpdate({ _id: _id }, { role: role }, { new: true });
    res.status(200).json({ message: "successfully updated uset to admin" });
  } catch (error) {
    next(error);
  }
};
