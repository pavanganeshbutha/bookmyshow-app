// Import Express.js framework
const express = require("express");
const healthCheckRoutes = require("./routes/health");
const movieRoutes = require("./routes/movie");
const cors = require("cors");

// Create Express application instance
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
  }),
);

app.use(healthCheckRoutes);
app.use("/api/v1/movies", movieRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  // Destructure error with default statusCode and message
  const { statusCode = 500, message = "Something went wrong!" } = err;

  // Send error response as JSON
  res.status(statusCode).json({
    success: false,
    message: message,
  });
});

// Export app instance
module.exports = app;
