const express = require("express");
const rateLimit = require("express-rate-limit");

const router = express.Router();

const { register, login } = require("../controllers/authController");

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    message: "Too many login attempts. Try again later."
  }
});

// AUTH ROUTES
router.post("/register", register);
router.post("/login", loginLimiter, login);

module.exports = router;
