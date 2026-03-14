const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const ApiResponse = require("../utils/ApiResponse");
const { BadRequestError, AuthenticationError } = require("../core/ApiError");
const { isLoggedIn } = require("../middlewares/User");

const router = express.Router();
const JWT_SECRET =
  "P8YyTpUZV44Q2RL1ycdDFyBbDJ4cfU7wdS0p0kSvPhpbuWYwyRPMHjwB0Vkm76pT";

router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    throw new BadRequestError("Username already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = await User.create({
    email,
    username,
    password: hashedPassword,
  });
  res.json(
    ApiResponse.build(
      true,
      { email: newUser.email, username: newUser.username },
      "User registered successfully",
    ),
  );
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    throw new BadRequestError("Invalid username or password");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new BadRequestError("Invalid username or password");
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET);
  res.json(ApiResponse.build(true, { token }, "Login successful"));
});

router.get("/secret", isLoggedIn, (req, res) => {
  res.send("This is a secret route accessible only to authenticated users.");
});

module.exports = router;
