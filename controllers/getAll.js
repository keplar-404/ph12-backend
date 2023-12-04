import User from "../models/UserModel.js";
import Pet from "../models/PetModel.js";
import DonationCampaign from "../models/DonationCampaignModel.js";

const getAll = async (req, res, next) => {
  try {
    const users = await User.find();
    const pets = await Pet.find();
    const donationsCampaign = await DonationCampaign.find();

    res.status(200).json({
      users,
      pets,
      donationsCampaign,
    });
  } catch (error) {
    next(error);
  }
};

export default getAll;
