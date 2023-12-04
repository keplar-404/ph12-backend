import DonationCampaign from "../models/DonationCampaignModel.js";
import User from "../models/UserModel.js";

const createDonationCampaign = async (req, res, next) => {
  const {
    petname,
    petimage,
    shortDescription,
    longDescription,
    maximumDonationAmount,
    highestAmountUserCanDonate,
    lastDateOfDonation,
    ownerId,
    refreshToken,
    accessToken,
  } = req.body;

  try {
    // Create a new DonationCampaign instance
    const newDonationCampaign = new DonationCampaign({
      petname,
      petimage,
      shortDescription,
      longDescription,
      maximumDonationAmount,
      highestAmountUserCanDonate,
      lastDateOfDonation,
      ownerId,
    });

    const savedDonationCampaign = await newDonationCampaign.save();
    const user = await User.findOne({ _id: ownerId });

    user.donationCampaignsCreationID.push(savedDonationCampaign._id);
    await user.save();

    res.status(201).json({
      donationCampaign: savedDonationCampaign,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

export default createDonationCampaign;
