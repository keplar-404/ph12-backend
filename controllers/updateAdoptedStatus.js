import Pet from "../models/PetModel.js";

const updateAdoptedStatus = async (req, res, next) => {
  const petId = req.body._id || req.body.petId;

  try {
    const pet = await Pet.findById(petId);
    const adoptionRequests = pet.adoptionReqUserId;

    if (adoptionRequests.length > 0) {
      pet.adopted = {
        status: true,
      };

      const updatedPet = await pet.save();
      res.status(200).json({
        pet: updatedPet,
        message: "Adoption status updated successfully",
      });
    } else {
      res.status(200).json({
        message: "No adoption requests found for this pet",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default updateAdoptedStatus;
