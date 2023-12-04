import express from "express";
import allControllers from "../controllers/index.js";
import verifyToken from "../middleware/validateJwt.js";

const router = express.Router();
const {
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
} = allControllers;

//all router operation
router.get("/", home);

// user operation route
router.post("/register", registerUser);
router.post("/jwtgenerate", jwtGenerate);
router.post("/login", login);
router.post("/checkUserSocialAccount", socialMediaAccountUserCheck);
router.post("/updaterole", userRoleUpdate);

// pet routs
router.post("/addpet", verifyToken, addPet);
router.post("/update", verifyToken, updatePet);
router.post("/getuserpets", verifyToken, getPetsCreatedByUser);
router.post("/updatepetimg", verifyToken, updatePetImages);
router.post("/deletepetbyuser", deletePetByUser);
router.post("/updateadoptionstatus", updateAdoptedStatus);
router.post("/addreqpetadoption", addPetAdoptionReq);
router.post("/removeadoptionstatus", removeAdoptionStatus);
router.post("/reqadoption", getUserWithAdoptedPets);
router.post("/petreqstatusupdate", acceptOrRejectReqPet);

// donation route
router.post("/donationadd", verifyToken, createDonationCampaign);
router.post("/donationupdate", verifyToken, updateDonation);
router.post("/getuserdonationcampaign", getDonationsCreatedByUser);
router.post("/pauseorunpausedonationcampaigns", togglePauseDonationCampaign);
router.post("/getuserdonations", userDonations);
router.post("/getpetadoptsreq", getPetsByAdoptionRequests);
router.post("/refund", removeDonation);
router.post("/deldonactioncampaingbyadmin", deleteDonationCampaingByAdmin);

// get
router.get("/getall", getAll);

// other
router.post("/payment", processPayment);


export default router;
