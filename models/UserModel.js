import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firebaseUid: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  profilePic: String,
  role: {
    type: String,
    default: "user",
  },
  petsCreationID: [String],
  adoptionReqId: [String],
  donationCampaignsCreationID: [String],
  donated: [
    {
      donationCampaignId: String,
      amount: Number,
      donationId: String,
    },
  ],
  refundedDonated: [
    {
      donationCampaignId: String,
      amount: Number,
    },
  ],
  ban: { type: Boolean, default: false },
  dateTime: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export default User;
