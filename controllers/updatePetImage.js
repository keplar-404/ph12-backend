import Pet from "../models/PetModel.js";

const updatePetImages = async (req, res, next) => {
  const { petimages, accessToken, refreshToken, _id } = req.body;

  try {
    const updatedPet = await Pet.findByIdAndUpdate(
      _id,
      { petimages: petimages },
      { new: true }
    );

    res.status(200).json({
      pet: updatedPet,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

export default updatePetImages;
