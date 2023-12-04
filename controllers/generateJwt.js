// token.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import config from "../config/config.js";
dotenv.config();

const { jwt_secret, refresh_secret } = config;

const jwtGenerate = async (req, res, next) => {
  const { id, email } = req.body;

  try {
    // Generate access token
    const accessToken = await jwt.sign(
      { userId: id, email: email },
      jwt_secret,
      {
        expiresIn: "15m",
      }
    );
    // Generate refresh token
    const refreshToken = await jwt.sign(
      { userId: id, email: email },
      refresh_secret,
      { expiresIn: "7d" }
    );

    res
      .status(201)
      .json({ message: "jwt successfull", accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};

export default jwtGenerate;
