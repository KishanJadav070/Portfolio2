import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    position: { type: String, required: true },
    message: { type: String },
    resume: { type: Buffer },        // store file as buffer
    resumeName: { type: String },
    resumeType: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Career", careerSchema);
