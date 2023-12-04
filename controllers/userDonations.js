import User from "../models/UserModel.js";
import DonationCampaign from "../models/DonationCampaignModel.js";

const userDonations = async (req, res, next) => {
  const { id } = req.body;

  try {
    const user = await User.findById(id);

    if (user.donated.length === 0) {
      return res.status(200).json({ donations: [] });
    }

    const donationDetails = [];

    for (const donation of user.donated) {
      const donationCampaign = await DonationCampaign.findById(
        donation.donationCampaignId
      );

      const donationRecord = {
        amount: donation.amount,
        donationId: donation.donationId,
        ...donationCampaign.toObject(),
      };

      donationDetails.push(donationRecord);
    }

    res.status(200).json({ donations: donationDetails });
  } catch (error) {
    next(error);
  }
};

export default userDonations;
