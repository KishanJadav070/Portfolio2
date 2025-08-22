import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  const adminUser = process.env.ADMIN_USER;
  const adminPass = process.env.ADMIN_PASS;
  const jwtSecret = process.env.JWT_SECRET;

  if (!adminUser || !adminPass || !jwtSecret) {
    return res.status(500).json({ error: "Server misconfiguration" });
  }

  if (username !== adminUser || password !== adminPass) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  try {
    const token = jwt.sign({ username }, jwtSecret, { expiresIn: "8h" });
    return res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Error generating token:", err);
    return res.status(500).json({ error: "Could not generate token" });
  }
});

export default router;
