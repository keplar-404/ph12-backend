// authMiddleware.js
import jwt from "jsonwebtoken";
import config from "../config/config.js";

const { jwt_secret, refresh_secret } = config;

const verifyToken = (req, res, next) => {
  const { accessToken, refreshToken } = req.body;

  //   check is any token exits
  if (!accessToken || !refreshToken) {
    const error = new Error("You are not logged");
    error.statusCode = 401;
    throw error;
  } else {
    //   verify accesstoken
    jwt.verify(accessToken, jwt_secret, (err, user) => {
      if (err) {
        // Access token has expired, check the refresh token
        jwt.verify(refreshToken, refresh_secret, (refreshErr, refreshUser) => {
          if (refreshErr) {
            const error = new Error("Session expired please login");
            error.statusCode = 401;
            throw error;
          } else {
            // refresh token is valid, generate a new access token
            const newAccessToken = jwt.sign(
              { userId: req.body.id, email: req.body.email },
              jwt_secret,
              { expiresIn: "15m" }
            );
            // send the new token to the next controller
            req.body.accessToken = newAccessToken;
            // contiune to the api endpoint
            next();
          }
        });
      } else {
        // Access token is valid, continue to the protected route
        next();
      }
    });
  }
};

export default verifyToken;
