import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";

// Routes
import adminauthRoutes from "./routes/adminauthRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ----------------- Middleware -----------------
app.use(express.json()); // Parse JSON request bodies
app.use(morgan("dev")); // HTTP request logger

// CORS configuration
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map(origin => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ----------------- API Routes -----------------
app.use("/api/admin/auth", adminauthRoutes);
app.use("/api/admin/careers", careerRoutes);
app.use("/api/admin/contacts", contactRoutes); // ✅ contacts route

// ----------------- Health Check -----------------
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// ----------------- Error Handling -----------------
// 404 handler
app.use((_req, res) => {
  res.status(404).json({ message: "API route not found" });
});

// General error handler
app.use((err, _req, res, _next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({ message: "Internal server error" });
});

// ----------------- Start Server -----------------
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    process.exit(1);
  }
};

startServer();
