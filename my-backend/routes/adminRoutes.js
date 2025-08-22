import express from "express";
import { requireAuth } from "../middleware/auth.js";
import Contact from "../models/Contact.js";
import Career from "../models/Career.js";
import { stringify } from "csv-stringify/sync";

const router = express.Router();

// Protect all admin routes
router.use(requireAuth);

// GET /api/admin/contacts
router.get("/contacts", async (req, res) => {
  const items = await Contact.find().sort({ createdAt: -1 }).lean();
  res.json({ success: true, data: items });
});

// GET /api/admin/careers
router.get("/careers", async (req, res) => {
  const items = await Career.find().sort({ createdAt: -1 }).lean();
  res.json({ success: true, data: items });
});

// GET detail by id
router.get("/contacts/:id", async (req, res) => {
  const item = await Contact.findById(req.params.id).lean();
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json({ success: true, data: item });
});
router.get("/careers/:id", async (req, res) => {
  const item = await Career.findById(req.params.id).lean();
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json({ success: true, data: item });
});

// DELETE
router.delete("/contacts/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});
router.delete("/careers/:id", async (req, res) => {
  await Career.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// Export CSV (contacts)
router.get("/export/contacts", async (req, res) => {
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
  const csv = stringify(records, { header: true });
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=contacts.csv");
  res.send(csv);
});

// Export CSV (careers)
router.get("/export/careers", async (req, res) => {
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
  const csv = stringify(records, { header: true });
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=careers.csv");
  res.send(csv);
});

export default router;
