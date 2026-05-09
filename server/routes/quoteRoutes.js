import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  createQuote,
  getQuotes,
  updateStatus
} from "../controllers/quoteController.js";

const router = express.Router();

router.post("/", createQuote);
router.get("/", protect, getQuotes);
router.put("/:id", protect, updateStatus);

export default router;