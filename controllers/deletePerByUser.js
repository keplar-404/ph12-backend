import Pet from "../models/PetModel.js";
import User from "../models/UserModel.js";

const deletePetByUser = async (req, res, next) => {
  const petId = req.body._id;

  try {
    // Find the pet by ID
    const pet = await Pet.findById(petId);
    const ownerId = pet.ownerId;

    await Pet.findByIdAndDelete(petId);

   
    const user = await User.findById(ownerId);

    user.petsCreationID = user.petsCreationID.filter((id) => id !== petId);
    await user.save();

    res.status(200).json({ message: "Pet deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export default deletePetByUser;
