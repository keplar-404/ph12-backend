import dotenv from "dotenv";
dotenv.config();

// const port = process.env.PORT;
// const db_local = process.env.DB_LOCAL;

const config = {
  port: process.env.PORT,
  db_local: process.env.DB_LOCAL,
  jwt_secret: process.env.SECRET_KEY,
  refresh_secret: process.env.REFRESH_SCRET_KEY,
  stripe_scret: process.env.STRIPE_SECRET_KEY,
};
export default config;
