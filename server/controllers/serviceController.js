import Service from "../models/Service.js";
import cloudinary from "../config/cloudinary.js";

export const createService = async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);

  const service = await Service.create({
    ...req.body,
    image: result.secure_url
  });

  res.json(service);
};

export const getServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

export const getService = async (req, res) => {
  const service = await Service.findById(req.params.id);
  res.json(service);
};  