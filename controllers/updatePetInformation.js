import Pet from "../models/PetModel.js";

const updatePet = async (req, res, next) => {
  const petData = req.body;

  try {
    const pet = await Pet.findById(petData._id);

    // Update each field
    for (const [key, value] of Object.entries(petData)) {
      if (key in pet._doc) {
        // Check if the field exists in the pet schema
        pet[key] = value;
      }
    }

    const updatedPet = await pet.save();

    res.status(200).json({
      pet: updatedPet,
      accessToken: petData.accessToken,
      refreshToken: petData.refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

export default updatePet;
