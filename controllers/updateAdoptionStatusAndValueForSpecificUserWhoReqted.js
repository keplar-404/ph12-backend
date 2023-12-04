import Pet from "../models/PetModel.js";

const acceptOrRejectReqPet = async (req, res, next) => {
  const {
    petId,
    status,
    requestedUserId,
    phone,
    requserlocation,
    requsername,
  } = req.body;

  try {
    if (status === "accept") {
      await Pet.findByIdAndUpdate(
        { _id: petId },
        {
          adopted: {
            status: true,
            person: {
              phone: phone,
              location: requserlocation,
              id: requestedUserId,
              username: requsername,
            },
          },
          adoptionReqUserId: [{}],
        },
        { new: true }
      );
    } else {
      await Pet.findByIdAndUpdate(
        { _id: petId },
        {
          adopted: {
            status: false,
            person: {
              phone: "",
              location: "",
              id: "",
            },
          },
          $pull: {
            adoptionReqUserId: { requestedUserId: requestedUserId },
          },
        },
        { new: true }
      );
    }
    res.status(201).json({ message: "Operation successful" });
  } catch (error) {
    next(error);
  }
};

export default acceptOrRejectReqPet;
