import User from "../models/UserModel.js";
import DonationCampaign from "../models/DonationCampaignModel.js";

const removeDonation = async (req, res, next) => {
  const { userId, donationCampaignId, donationID } = req.body;

  try {
    const user = await User.findById(userId);

    const donationCampaign = await DonationCampaign.findById(
      donationCampaignId
    );

    user.donated = user.donated.filter(
      (donation) => donation.donationId !== donationID
    );

    donationCampaign.donations = donationCampaign.donations.filter(
      (donation) => donation._id.toString() !== donationID
    );

    await user.save();
    await donationCampaign.save();

    res.status(200).json({ message: "Donation removed successfully." });
  } catch (error) {
    next(error);
  }
};

export default removeDonation;
