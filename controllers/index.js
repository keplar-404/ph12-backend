import { home } from "./homeController.js";
import registerUser from "./registerUser.js";
import jwtGenerate from "./generateJwt.js";
import { login } from "./login.js";
import { socialMediaAccountUserCheck } from "./socialMediaAccountUserCheck.js";
import addPet from "./addPet.js";
import updatePet from "./updatePetInformation.js";
import getPetsCreatedByUser from "./getPetsCreatedByUser.js";
import updatePetImages from "./updatePetImage.js";
import deletePetByUser from "./deletePerByUser.js";
import updateAdoptedStatus from "./updateAdoptedStatus.js";
import createDonationCampaign from "./createDonationCampaign.js";
import updateDonation from "./updateDonation.js";
import getDonationsCreatedByUser from "./getDonationsCreatedByUser.js";
import togglePauseDonationCampaign from "./pauseOrUnpauseDonationCampaign.js";
import userDonations from "./userDonations.js";
import getPetsByAdoptionRequests from "./getPetsByAdoptionRequests.js";
import getAll from "./getAll.js";
import removeDonation from "./refund.js";
import addPetAdoptionReq from "./addPetAdoptionReq.js";
import processPayment from "./stripePayment.js";
import { userRoleUpdate } from "./userRoleUpdate.js";
import removeAdoptionStatus from "./removeAdoption.js";
import deleteDonationCampaingByAdmin from "./deleteDonationCampignByAdmin.js";
import getUserWithAdoptedPets from "./getAdoptionReqByUser.js";
import acceptOrRejectReqPet from "./updateAdoptionStatusAndValueForSpecificUserWhoReqted.js";

const allControllers = {
  home,
  registerUser,
  jwtGenerate,
  login,
  socialMediaAccountUserCheck,
  addPet,
  updatePet,
  getPetsCreatedByUser,
  updatePetImages,
  deletePetByUser,
  updateAdoptedStatus,
  createDonationCampaign,
  updateDonation,
  getDonationsCreatedByUser,
  togglePauseDonationCampaign,
  userDonations,
  getPetsByAdoptionRequests,
  getAll,
  removeDonation,
  addPetAdoptionReq,
  processPayment,
  userRoleUpdate,
  removeAdoptionStatus,
  deleteDonationCampaingByAdmin,
  getUserWithAdoptedPets,
  acceptOrRejectReqPet
};

export default allControllers;
