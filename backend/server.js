// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const User = require("./user.model.js");

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json({ limit: "50kb" }));
app.use(cors());
app.use(morgan("dev"));

// Config
const PORT = process.env.PORT || 3000;
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://nallujeevanireddy_db_user:2JzJbLAn4dxR4XcW@cluster0.x8kscbo.mongodb.net/moneymitra?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

// Basic route
app.get("/", (req, res) => res.send("MoneyMitra Backend Running..."));

// Health check
app.get("/health", (req, res) => {
  const state = mongoose.connection.readyState; // 0 disconnected, 1 connected
  res.json({ status: "ok", mongoState: state });
});

// Save user
app.post("/save-user", async (req, res) => {
  try {
    const { name, phone } = req.body || {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return res.status(400).json({ error: "Name is required and must be at least 2 characters." });
    }
    if (phone === undefined || phone === null) {
      return res.status(400).json({ error: "Phone is required." });
    }

    // Normalize phone to digits only string
    const phoneStr = String(phone).replace(/\D/g, "");
    if (phoneStr.length < 7 || phoneStr.length > 15) {
      return res.status(400).json({ error: "Phone number looks invalid." });
    }

    const user = await User.create({ name: name.trim(), phone: phoneStr });
    return res.status(201).json({ message: "User saved successfully!", user });
  } catch (error) {
    console.error("Error in /save-user:", error);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }).lean();
    res.json({ users });
  } catch (err) {
    console.error("Error in GET /users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get user by id
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).lean();
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ user });
  } catch (err) {
    console.error("Error in GET /users/:id:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete user by id
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted", user: deleted });
  } catch (err) {
    console.error("Error in DELETE /users/:id:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Start server + graceful shutdown
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

const gracefulShutdown = (signal) => {
  console.log(`\nReceived ${signal}. Closing server and MongoDB connection...`);
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log("MongoDB connection closed.");
      process.exit(0);
    });
  });
  setTimeout(() => {
    console.error("Forcing shutdown...");
    process.exit(1);
  }, 10000);
};

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

module.exports = app;
