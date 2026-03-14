const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
      minlength: 3,
      maxLength: 30,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamp: true },
);

const User = mongoose.model("User", userSchema);
module.exports = User;
