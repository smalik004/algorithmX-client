"use client";
import React, { useState, useEffect } from "react";
import axiosHttp from "../utils/httpConfig";
const BlogCardsLayout = ({ axiosHttp }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRandomBlogs = (blogArray, count = 3) => {
    if (!blogArray || blogArray.length === 0) return [];

    // Create a copy of the array and shuffle it
    const shuffled = [...blogArray].sort(() => 0.5 - Math.random());

    // Return first 'count' items (up to available blogs)
    return shuffled.slice(0, Math.min(count, blogArray.length));
  };

  const getBlogData = async () => {
    try {
      setLoading(true);
      const response = await axiosHttp.get("/blog/get-blogs");

      const blogData = response?.data?.data || [];

      // Get 3 random blogs from the data
      const randomBlogs = getRandomBlogs(blogData, 3);
      setBlogs(randomBlogs);
      setError(null);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (axiosHttp) {
      getBlogData();
    }
  }, [axiosHttp]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
            >
              <div className="w-full h-48 bg-gray-300"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-6 bg-gray-300 rounded mb-3"></div>
                <div className="h-3 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
          <button
            onClick={getBlogData}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-500">No blogs available</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={blog.id || index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Blog Image */}
            <div className="w-full h-48 overflow-hidden">
              {blog.image ? (
                <Image
                  fill
                  src={blog.image}
                  alt={blog.title || "Blog post"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x200/f3f4f6/9ca3af?text=Blog+Image";
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No Image</span>
                </div>
              )}
            </div>

            {/* Blog Content */}
            <div className="p-4">
              {/* Category */}
              {blog.category && (
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                  {blog.category}
                </span>
              )}

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer">
                {blog.title || "Untitled Blog"}
              </h3>

              {/* Author/Created By */}
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium">
                  By {blog.createdBy || blog.author || "Unknown Author"}
                </span>
                {blog.createdAt && (
                  <span className="ml-2">
                    • {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                )}
              </div>

              {/* Description/Excerpt if available */}
              {blog.description && (
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {blog.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Refresh Button */}
      <div className="text-center mt-8">
        <button
          onClick={getBlogData}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
        >
          Load New Random Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogCardsLayout;
