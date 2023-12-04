import User from "../models/UserModel.js";
import Pet from "../models/PetModel.js";

const getUserWithAdoptedPets = async (req, res, next) => {
  const { userId } = req.body;
  const result = [];

  try {
    // Find user by userId
    const user = await User.findOne({ _id: userId });

    // Find pets based on petsCreationID
    const pets = await Pet.find({ _id: { $in: user.petsCreationID } });

    pets
      .filter((data) => data.adopted.status == false)
      .map((_data) =>
        _data?.adoptionReqUserId?.map((data) => {
          result.push({
            petId: _data._id,
            petname: _data.petname,
            petlocation: _data.petlocation,
            requestedUserId: data.requestedUserId,
            phone: data.phone,
            requserlocation: data.location,
            requseremail: data.email,
            requsername: data.username,
          });
        })
      );

    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};

export default getUserWithAdoptedPets;
