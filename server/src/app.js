const express = require("express");
const cors = require("cors");

// Routes
const healthcheckRoutes = require("./routes/health");
const moviesRoutes = require("./routes/movie");
const userRoutes = require("./routes/User");
const { ApiError } = require("./core/ApiError");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
  }),
);

app.use(healthcheckRoutes);
app.use("/api/v1/movies", moviesRoutes);
app.use("/api/v1/users", userRoutes);

// Global Exception handler
app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    const { status = 500, message = "Internal server error" } = err;
    return res.status(status).json({
      success: false,
      message: message,
    });
  }
  return res
    .status(500)
    .json({ success: false, message: "Something went wrong" });
});

module.exports = app;
