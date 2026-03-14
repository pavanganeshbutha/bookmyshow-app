const { AuthenticationError } = require("../core/ApiError");
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "P8YyTpUZV44Q2RL1ycdDFyBbDJ4cfU7wdS0p0kSvPhpbuWYwyRPMHjwB0Vkm76pT";

const isLoggedIn = (req, res, next) => {
  const authHeader = req.headers("Authorization");
  if (!authHeader) {
    throw new AuthenticationError("Plese login to continue");
  }
  const token = authHeader.replace("Bearer ", "");
  const { userID } = jwt.verify(token, JWT_SECRET);
  req.userID = userID;
  next();
};

module.exports = {
  isLoggedIn,
};
