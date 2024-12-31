import express from "express";
import { contactMessage } from "../controller/contactController.js";

const router = express.Router();

router.post("/message", contactMessage);

export default router;
