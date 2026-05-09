import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number
}, { timestamps: true });

export default mongoose.model("Service", serviceSchema);