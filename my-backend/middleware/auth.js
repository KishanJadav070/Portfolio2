import jwt from "jsonwebtoken";

/**
 * Middleware to protect routes with JWT authentication
 */
export function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];

    // Check if header exists and starts with Bearer
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Authorization token required" });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    // Verify token
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded payload (admin info) to request
    req.admin = payload;

    // Proceed to next route
    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
