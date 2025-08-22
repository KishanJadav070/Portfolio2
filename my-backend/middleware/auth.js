import jwt from "jsonwebtoken";

/**
 * Middleware to protect routes and require JWT authentication
 */
export function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers["authorization"] || "";

    // Check if header exists and starts with 'Bearer '
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No token provided" });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    // Verify token
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Attach payload to request
    req.admin = payload;

    // Continue to next middleware or route
    next();
  } catch (err) {
    // Catch invalid or expired token
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
