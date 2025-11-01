import { handleError } from "../helpers/handleError.js";
import cloudinary from "../config/cloudinary.js";
import Blog from "../models/blog.model.js";
import Category from "../models/category.model.js";
import { encode } from "entities";

export const addBlog = async (req, res, next) => {
  try {
    const data = JSON.parse(req.body.data);
    let featuredImage = "";
    if (req.file) {
      // Upload an image
      const uploadResult = await cloudinary.uploader
        .upload(req.file.path, { folder: "blogapp", resource_type: "auto" })
        .catch((error) => {
          next(handleError(500, error.message));
        });

      featuredImage = uploadResult.secure_url;
    }

    const blog = new Blog({
      author: data.author,
      category: data.category,
      title: data.title,
      slug: data.slug,
      featuredImage: featuredImage,
      blogContent: encode(data.blogContent),
    });

    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog added successfully.",
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const editBlog = async (req, res, next) => {
    try {
        const { blogid } = req.params
        const blog = await Blog.findById(blogid).populate('category', 'name')
        if (!blog) {
            next(handleError(404, 'Data not found.'))
        }
        res.status(200).json({
            blog
        })
    } catch (error) {
        next(handleError(500, error.message))
    }
}

export const updateBlog = async (req, res, next) => {
  try {
    const { blogid } = req.params;
    const data = JSON.parse(req.body.data);

    const blog = await Blog.findById(blogid);

    blog.category = data.category;
    blog.title = data.title;
    blog.slug = data.slug;
    blog.blogContent = encode(data.blogContent);

    let featuredImage = blog.featuredImage;

    if (req.file) {
      // Upload an image
      const uploadResult = await cloudinary.uploader
        .upload(req.file.path, {
          folder: "blogapp",
          resource_type: "auto",
        })
        .catch((error) => {
          next(handleError(500, error.message));
        });

      featuredImage = uploadResult.secure_url;
    }

    blog.featuredImage = featuredImage;

    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog updated successfully.",
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const { blogid } = req.params;
    await Blog.findByIdAndDelete(blogid);
    res.status(200).json({
      success: true,
      message: "Blog Deleted successfully.",
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const showAllBlog = async (req, res, next) => {
  try {
    const blog = await Blog.find()
      .populate("author", "name")
      .populate("category", "name")
      .sort({ created_at: -1 })
      .lean()
      .exec();
    res.status(200).json({
      blog,
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const getBlog = async (req, res, next) => {
  try {
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const getRelatedBlog = async (req, res, next) => {
  try {
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const getBlogByCategory = async (req, res, next) => {
  try {
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const search = async (req, res, next) => {
  try {
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const getAllBlogs = async (req, res, next) => {
  try {
  } catch (error) {
    next(handleError(500, error.message));
  }
};
