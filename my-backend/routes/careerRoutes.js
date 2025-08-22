import express from "express";
import multer from "multer";
import Career from "../models/Career.js";

const router = express.Router();

// Multer config for storing file in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ---------------- POST: Submit career application ----------------
router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, position, message } = req.body;
    const resume = req.file;

    const newApplication = new Career({
      name,
      email,
      phone,
      position,
      message,
      resume: resume?.buffer,
      resumeName: resume?.originalname,
      resumeType: resume?.mimetype,
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------------- GET: All career applications ----------------
router.get("/", async (req, res) => {
  try {
    const applications = await Career.find().sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------------- DELETE: Career application by ID ----------------
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Career.findByIdAndDelete(id);
    res.status(200).json({ message: "Application deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------------- GET: Download resume by ID ----------------
router.get("/resume/:id", async (req, res) => {
  try {
    const app = await Career.findById(req.params.id);
    if (!app || !app.resume) return res.status(404).send("Resume not found");

    res.set({
      "Content-Type": app.resumeType,
      "Content-Disposition": `attachment; filename="${app.resumeName}"`,
    });
    res.send(app.resume);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
