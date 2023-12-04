import Pet from "../models/PetModel.js";
const removeAdoptionStatus = async (req, res, next) => {
  const { _id } = req.body;

  try {
    await Pet.findByIdAndUpdate(
      { _id: _id },
      {
        adopted: {
          status: false,
        },
      },
      { new: true }
    );

    res.status(200).json({ message: "Adoption req sucessfully remove" });
  } catch (error) {
    next(error);
  }
};

export default removeAdoptionStatus;
