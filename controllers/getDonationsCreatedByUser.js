import User from "../models/UserModel.js";
import DonationCampaign from "../models/DonationCampaignModel.js";

const getDonationsCreatedByUser = async (req, res, next) => {
  const { id } = req.body;
  try {
    const user = await User.findById(id);

    if (user.donationCampaignsCreationID.length === 0) {
      return res.status(200).json({ donations: [] });
    }

    const donations = await DonationCampaign.find({
      _id: { $in: user.donationCampaignsCreationID },
    });

    res.status(200).json({ donations: donations });
  } catch (error) {
    next(error);
  }
};

export default getDonationsCreatedByUser;
