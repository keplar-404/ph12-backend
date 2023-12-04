import User from "../models/UserModel.js";

const registerUser = async (req, res, next) => {
  try {
    const { name, email, uid, profilePic } = req.body;

    const newUser = new User({
      name,
      email,
      firebaseUid: uid,
      profilePic
    });

    const savedUser = await newUser.save();

    return res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
};
export default registerUser;
