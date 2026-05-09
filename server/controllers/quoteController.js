import Quote from "../models/QuoteRequest.js";

export const createQuote = async (req, res) => {
  const quote = await Quote.create(req.body);
  console.log("BODY:", req.body);
  res.json(quote);
};

export const getQuotes = async (req, res) => {
  const quotes = await Quote.find().populate("service");
  res.json(quotes);
};

export const updateStatus = async (req, res) => {
  const quote = await Quote.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(quote);
};