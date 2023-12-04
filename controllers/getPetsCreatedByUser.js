import User from "../models/UserModel.js";
import Pet from "../models/PetModel.js";

const getPetsCreatedByUser = async (req, res, next) => {
  const { id } = req.body;
  try {
    const user = await User.findById(id);

    if (user.petsCreationID.length === 0) {
      return res.status(200).json({ pets: [] });
    }

    const pets = await Pet.find({ _id: { $in: user.petsCreationID } });

    res.status(200).json({ pets: pets });
  } catch (error) {
    next(error);
  }
};

export default getPetsCreatedByUser;
