import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  petname: { type: String, required: true },
  petimages: [{ type: [String], default: [] }],
  petlocation: { type: String, required: true },
  petage: { type: Number, required: true },
  adopted: {
    status: { type: Boolean, default: false },
    person: {
      phone: { type: String, default: "" },
      location: { type: String, default: "" },
      id: { type: String, default: "" },
      username: { type: String, default: "" },
    },
  },
  petType: { type: String, required: true },
  ownerId: { type: String, required: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  dateTime: { type: Date, default: Date.now },
  adoptionReqUserId: [
    {
      requestedUserId: { type: String, default: "" },
      phone: { type: String, default: "" },
      location: { type: String, default: "" },
      email: { type: String, default: "" },
      username: { type: String, default: "" },
    },
  ],
});

const Pet = mongoose.model("Pet", petSchema);

export default Pet;
