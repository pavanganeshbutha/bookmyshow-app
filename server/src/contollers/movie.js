const Movie = require("../models/Movie");
const ApiResponse = require("../core/ApiResponse");

const getAllMovies = async (req, res) => {
  const movies = await Movie.find({});
  res.json(ApiResponse.build(true, "Movies retrieved successfully", movies));
};

module.exports = {
  getAllMovies,
};
