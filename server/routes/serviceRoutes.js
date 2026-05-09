import express from "express";
import multer from "multer";
import protect from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

import {
  createService,
  getServices,
  getService
} from "../controllers/serviceController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", getServices);
router.get("/:id", getService);

router.post(
  "/",
  protect,
  authorize("admin"),
  upload.single("image"),
  createService
);

export default router;