import Pet from "../models/PetModel.js";
import User from "../models/UserModel.js";

const addPetAdoptionReq = async (req, res, next) => {
  const { _id, requestedUserId, phone, location } = req.body;

  try {
    const user = await User.findById(requestedUserId);

    const updatedPet = await Pet.updateOne(
      { _id: _id },
      {
        $push: {
          adoptionReqUserId: {
            requestedUserId,
            phone,
            location,
            username: user.name,
            email: user.email,
          },
        },
      }
    );

    await User.updateOne(
      { _id: requestedUserId },
      {
        $push: {
          adoptionReqId: _id,
        },
      }
    );

    res.status(200).json({
      message: "Request adoption is successfull",
      updatedPet,
    });
  } catch (error) {
    next(error);
  }
};

export default addPetAdoptionReq;
