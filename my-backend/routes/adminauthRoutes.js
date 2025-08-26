import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // 🔹 1. Validate input
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  // 🔹 2. Load env variables
  const adminUser = process.env.ADMIN_USER;
  const adminPass = process.env.ADMIN_PASS;
  const jwtSecret = process.env.JWT_SECRET;

  // 🔹 3. Check server config
  if (!adminUser || !adminPass || !jwtSecret) {
    console.error("❌ Missing environment variables:", {
      ADMIN_USER: !!adminUser,
      ADMIN_PASS: !!adminPass,
      JWT_SECRET: !!jwtSecret,
    });
    return res.status(500).json({ error: "Server misconfiguration: missing env variables" });
  }

  // 🔹 4. Check credentials
  if (username !== adminUser || password !== adminPass) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // 🔹 5. Generate token
  try {
    const token = jwt.sign({ username }, jwtSecret, { expiresIn: "8h" });
    return res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("❌ Error generating token:", err);
    return res.status(500).json({ error: "Could not generate token" });
  }
});

export default router;
