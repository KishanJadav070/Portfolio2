import express from "express";
import { requireAuth } from "../middleware/auth.js";
import Contact from "../models/Contact.js";
import Career from "../models/Career.js";
import { stringify } from "csv-stringify/sync";

const router = express.Router();

// 🔒 Protect all admin routes
router.use(requireAuth);

// ----------------------
// Utility: Export CSV
// ----------------------
function exportToCSV(res, items, filename) {
  const csv = stringify(items, { header: true });
  res.setHeader("Content-Type", "text/csv");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${filename}.csv`
  );
  res.send(csv);
}

// ----------------------
// Contacts Routes
// ----------------------

// GET all contacts
router.get("/contacts", async (req, res) => {
  try {
    const items = await Contact.find().sort({ createdAt: -1 }).lean();
    res.json({ success: true, data: items });
  } catch (err) {
    console.error("Contacts fetch error:", err);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// GET contact detail
router.get("/contacts/:id", async (req, res) => {
  try {
    const item = await Contact.findById(req.params.id).lean();
    if (!item) return res.status(404).json({ error: "Contact not found" });
    res.json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contact" });
  }
});

// DELETE contact
router.delete("/contacts/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
});

// Export contacts CSV
router.get("/export/contacts", async (req, res) => {
  try {
    const items = await Contact.find().sort({ createdAt: -1 }).lean();
    const records = items.map(i => ({
      id: i._id.toString(),
      name: i.name,
      email: i.email,
      company: i.company || "",
      phone: i.phone || "",
      service: i.service || "",
      budget: i.budget || "",
      message: i.message || "",
      createdAt: i.createdAt?.toISOString?.() || ""
    }));
    exportToCSV(res, records, "contacts");
  } catch (err) {
    res.status(500).json({ error: "Failed to export contacts" });
  }
});

// ----------------------
// Careers Routes
// ----------------------

// GET all careers
router.get("/careers", async (req, res) => {
  try {
    const items = await Career.find().sort({ createdAt: -1 }).lean();
    res.json({ success: true, data: items });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch careers" });
  }
});

// GET career detail
router.get("/careers/:id", async (req, res) => {
  try {
    const item = await Career.findById(req.params.id).lean();
    if (!item) return res.status(404).json({ error: "Career not found" });
    res.json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch career" });
  }
});

// DELETE career
router.delete("/careers/:id", async (req, res) => {
  try {
    await Career.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete career" });
  }
});

// Export careers CSV
router.get("/export/careers", async (req, res) => {
  try {
    const items = await Career.find().sort({ createdAt: -1 }).lean();
    const records = items.map(i => ({
      id: i._id.toString(),
      name: i.name,
      email: i.email,
      phone: i.phone || "",
      position: i.position || "",
      message: i.message || "",
      createdAt: i.createdAt?.toISOString?.() || ""
    }));
    exportToCSV(res, records, "careers");
  } catch (err) {
    res.status(500).json({ error: "Failed to export careers" });
  }
});

export default router;
