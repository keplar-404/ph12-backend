import Pet from "../models/PetModel.js";
import User from "../models/UserModel.js";

const addPet = async (req, res, next) => {
  const {
    petname,
    petimages,
    petlocation,
    petage,
    petType,
    ownerId,
    shortDescription,
    longDescription,
    accessToken,
    refreshToken,
  } = req.body;

  try {
    // Check if the petname is already taken
    const existingPet = await Pet.findOne({ petname });

    if (existingPet) {
      return res.status(200).json({ message: "Petname is already taken" });
    }

    // Create a new Pet instance
    const newPet = new Pet({
      petname,
      petimages,
      petlocation,
      petage,
      petType,
      ownerId: ownerId,
      shortDescription,
      longDescription,
    });

    // Save the new pet to the database
    const savedPet = await newPet.save();

    // Find the user by ownerId
    const user = await User.findOne({ _id: ownerId });

    // Add the _id of the created pet to the user's petsCreationID array
    user.petsCreationID.push(savedPet._id);
    await user.save();

    res.status(201).json({
      pet: savedPet,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

export default addPet;
