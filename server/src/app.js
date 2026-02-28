// Import Express.js framework
const express = require("express");
const healthCheckRoutes = require("./routes/health");

// Create Express application instance
const app = express();

app.use(healthCheckRoutes);

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
