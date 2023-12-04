import mongoose from "mongoose"

const donationCampaignSchema = new mongoose.Schema({
  petname: { type: String, default: "" },
  petimage: { type: String, default: "" },
  shortDescription: { type: String, default: "" },
  longDescription: { type: String, default: "" },
  maximumDonationAmount: { type: Number, required: true },
  highestAmountUserCanDonate: { type: Number, required: true },
  lastDateOfDonation: { type: Date, default: null },
  ownerId: { type: String, required: true },
  completed: { type: Boolean, default: false },
  pause: { type: Boolean, default: false },
  refundUser: [
    {
      userId: { type: String, default: "" },
      amount: { type: Number, default: 0 },
    },
  ],
  donations: [
    {
      userId: { type: String, default: "" },
      amount: { type: Number, default: 0 },
    },
  ],
  donationCreationTime: { type: Date, default: Date.now },
});

const DonationCampaign = mongoose.model(
  "DonationCampaign",
  donationCampaignSchema
);

export default DonationCampaign;
