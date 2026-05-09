import express from "express";

import authRoutes from "./authRoutes.js";
import serviceRoutes from "./serviceRoutes.js";
import quoteRoutes from "./quoteRoutes.js";
import contactRoutes from "./contactRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/services", serviceRoutes);
router.use("/quotes", quoteRoutes);
router.use("/contact", contactRoutes);

export default router;