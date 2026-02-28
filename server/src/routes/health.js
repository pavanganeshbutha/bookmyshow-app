// Import Express.js framework
const express = require("express");

// Create a router instance
const router = express.Router();

// Health check endpoint
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Received health check request",
  });
});

// Echo endpoint
router.get("/echo", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Echo received",
  });
});

// Export router for use in main app
module.exports = router;
