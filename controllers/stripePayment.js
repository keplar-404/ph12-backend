import Stripe from "stripe";
import config from "../config/config.js";
import User from "../models/UserModel.js";
import DonationCampaign from "../models/DonationCampaignModel.js";

const stripe = new Stripe(config.stripe_scret);

const processPayment = async (req, res, next) => {
  try {
    const { token, amount, _id, userId } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "USD",
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirmation_method: "manual",
      confirm: true,
      return_url: "http://test.com", // this URL is for testing purposes
    });

    // Update donation campaign model with donation information
    const result = await DonationCampaign.findOneAndUpdate(
      { _id: _id },
      {
        $push: {
          donations: {
            userId: userId,
            amount: amount,
          },
        },
      },
      { new: true }
    );

    const sumOfDonations = result.donations
      .map((data) => data.amount)
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0);

    if (sumOfDonations == result.maximumDonationAmount) {
      await DonationCampaign.findOneAndUpdate(
        { _id: _id },
        {
          completed: true,
        },
        { new: true }
      );
    }

    const donationId = result.donations[result.donations.length - 1]._id;

    // console.log(donationId)

    await User.findOneAndUpdate(
      { _id: userId },
      {
        $push: {
          donated: {
            donationCampaignId: _id,
            amount: amount,
            donationId: donationId,
          },
        },
      },
      { new: true }
    );

    // Return the client secret to the client
    res.status(200).json({ status: paymentIntent.status });
  } catch (error) {
    next(error);
  }
};

export default processPayment;
