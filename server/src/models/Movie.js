const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: String,
    posterURL: String,
    genre: String,
    description: String,
    runtime: Number,
    cast: [
      {
        name: String,
        alias: String,
        profilePicture: String,
      },
    ],
  },
  { timestamps: true },
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
