// api/index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "../my-backend/config/db.js";

// Routes
import adminauthRoutes from "../my-backend/routes/adminauthRoutes.js";
import careerRoutes from "../my-backend/routes/careerRoutes.js";
import contactRoutes from "../my-backend/routes/contactRoutes.js";

// Load environment variables
dotenv.config();

const app = express();

// ----------------- Middleware -----------------
app.use(express.json()); // Parse JSON request bodies
app.use(morgan("dev")); // HTTP request logger

// CORS configuration
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
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

// ----------------- Root + Health Check -----------------
app.get("/", (_req, res) => {
  res.send("🚀 Backend is running on Vercel. Use /api/* endpoints.");
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// ----------------- API Routes -----------------
app.use("/api/admin/auth", adminauthRoutes);
app.use("/api/admin/careers", careerRoutes);
app.use("/api/admin/contacts", contactRoutes);

// ----------------- Error Handling -----------------
app.use((_req, res) => {
  res.status(404).json({ message: "API route not found" });
});

app.use((err, _req, res, _next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({ message: "Internal server error" });
});

// ----------------- MongoDB Connection -----------------
let dbConnected = false;

const ensureDBConnection = async () => {
  if (!dbConnected) {
    try {
      await connectDB(process.env.MONGO_URI);
      dbConnected = true;
      console.log("✅ MongoDB connected");
    } catch (err) {
      console.error("❌ Failed to connect to MongoDB:", err.message);
    }
  }
};

// Connect once at cold start
await ensureDBConnection();

// ----------------- Export for Vercel -----------------
export default app;
