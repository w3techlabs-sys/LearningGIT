import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  budget: String,
  details: String,
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  }
}, { timestamps: true });

export default mongoose.model("QuoteRequest", quoteSchema);