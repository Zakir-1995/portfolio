import mongoose from "mongoose";

// MongoDB Schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { 
    type: Object,
    required: true 
},
  date: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
