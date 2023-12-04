import DonationCampaign from "../models/DonationCampaignModel.js";
const deleteDonationCampaingByAdmin = async (req, res, next) => {
  const { _id } = req.body;

  try {
    await DonationCampaign.findByIdAndDelete(_id);
    res.status(200).json({ message: "Successfully campaing deleted" });
  } catch (error) {
    next(error);
  }
};

export default deleteDonationCampaingByAdmin;
