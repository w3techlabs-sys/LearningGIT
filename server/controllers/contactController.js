import Contact from "../models/ContactMessage.js";

export const sendMessage = async (req, res) => {
  const msg = await Contact.create(req.body);
  console.log("BODY:", req.body);
  console.log("Headers:", req.headers);
  
  res.json(msg);
};

export const getMessages = async (req, res) => {
  const msgs = await Contact.find();
  res.json(msgs);
};