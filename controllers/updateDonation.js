import DonationCampaign from "../models/DonationCampaignModel.js";

const updateDonation = async (req, res, next) => {
  const donationData = req.body;

  try {
    const donation = await DonationCampaign.findById(donationData._id);

    // Update each field
    for (const [key, value] of Object.entries(donationData)) {
      if (key in donation._doc) {
        // Check if the field exists in the donation schema
        donation[key] = value;
      }
    }

    const updatedDonation = await donation.save();

    res.status(200).json({
      donation: updatedDonation,
      accessToken: donationData.accessToken,
      refreshToken: donationData.refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

export default updateDonation;
