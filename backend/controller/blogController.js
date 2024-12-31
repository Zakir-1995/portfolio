import Blog from "../models/blogModel.js";
import cloudinary from "../helper/cloudinary.js";

export const createBlog = async (req, res, next) => {
  const { blogData } = req.body;
  const { image, ...rest } = blogData;

  const result = await cloudinary.uploader.upload(image, {
    folder: "portfolio",
  });

  try {
    const blog = await Blog.create({
      ...rest,
      image: {
        public_id: result?.public_id,
        url: result?.secure_url,
      },
    });
    return res.status(201).json({
      message: "New Blog created!",
      error: false,
      success: true,
      data: blog,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllBlog = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    return res.status(201).json({
      error: false,
      success: true,
      data: blogs,
    });
  } catch (err) {
    console.log(err);
  }
};
