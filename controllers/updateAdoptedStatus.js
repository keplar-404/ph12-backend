import Pet from "../models/PetModel.js";

const updateAdoptedStatus = async (req, res, next) => {
  const petId = req.body._id || req.body.petId;

  try {
    const pet = await Pet.findById(petId);

    pet.adopted = {
      status: true,
    };

    const updatedPet = await pet.save();
    res.status(200).json({
      pet: updatedPet,
      message: "Adoption status updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

export default updateAdoptedStatus;
