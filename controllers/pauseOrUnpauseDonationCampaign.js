import DonationCampaign from "../models/DonationCampaignModel.js";

const togglePauseDonationCampaign = async (req, res, next) => {
  const donationCampaignId = req.body._id;

  try {
    const donationCampaign = await DonationCampaign.findById(
      donationCampaignId
    );

    donationCampaign.pause = !donationCampaign.pause;

    const updatedDonationCampaign = await donationCampaign.save();

    res.status(200).json({
      donationCampaign: updatedDonationCampaign,
      message: "Pause status updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

export default togglePauseDonationCampaign;
