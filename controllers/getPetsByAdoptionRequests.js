import User from "../models/UserModel.js";
import Pet from "../models/PetModel.js";

const getPetsByAdoptionRequests = async (req, res, next) => {
  const { id } = req.body;

  try {
    const user = await User.findById(id);

    if (user.adoptionReqId.length === 0) {
      return res.status(200).json({ pets: [] });
    }

    const petDetails = await Pet.find({
      _id: { $in: user.adoptionReqId },
    });

    res.status(200).json({ pets: petDetails });
  } catch (error) {
    next(error);
  }
};

export default getPetsByAdoptionRequests;
