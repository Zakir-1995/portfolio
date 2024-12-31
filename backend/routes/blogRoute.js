import express from "express";
import { createBlog, getAllBlog } from "../controller/blogController.js";

const router = express.Router();

router.get("/blogs", getAllBlog);
router.post("/create", createBlog);

export default router;
