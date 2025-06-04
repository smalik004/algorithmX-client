// components/TabbedContent.jsx
"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import useFetchBlogs from "../hooks/fetchblogs";

export default function TabbedContent() {
  const result = useFetchBlogs();
  console.log("result-response", result);

  // Get top 3 blogs based on views
  const top3Blogs = useMemo(() => {
    if (!result || !Array.isArray(result)) return [];

    return [...result]
      .sort((a, b) => b.views - a.views) // Sort by views in descending order
      .slice(0, 3); // Take only top 3
  }, [result]);

  if (!result || result.length === 0) {
    return (
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-6 text-white">Most Popular</h1>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6 text-white">Most Popular</h1>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Article (First blog - Left Side) */}
          {top3Blogs.length > 0 && (
            <div className="lg:col-span-1 relative">
              <Link
                href={`/blogs-internal/${top3Blogs[0].id}`}
                className="block h-full"
              >
                <div className="relative mb-[40px] md:mb-0 md:h-[540px] h-64 w-full overflow-hidden rounded-lg group">
                  <div className="relative h-full w-full">
                    <img
                      src={top3Blogs[0].image_url}
                      alt={top3Blogs[0].image_alt || top3Blogs[0].title}
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
                  </div>
                </div>

                <div className="absolute bottom-[20px] left-[74px] md:-bottom-[20px] md:left-[70px] p-2 md:p-6 w-3/4 bg-white rounded-lg shadow-md">
                  <span className="text-red-500 text-sm font-semibold">
                    {top3Blogs[0].category?.title || "BLOG"}
                  </span>
                  <h2 className="md:text-xl text-black font-bold mt-1">
                    {top3Blogs[0].title}
                  </h2>

                  <div className="flex items-center mt-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                      <img
                        src="/api/placeholder/40/40"
                        alt="Author"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-black font-medium">
                        {top3Blogs[0].author_name || "Author"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(top3Blogs[0].post_date).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}{" "}
                        {/* • {top3Blogs[0].views} Views */}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Right Side Column (Second and Third blogs) */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {top3Blogs.slice(1, 3).map((blog, index) => (
                <Link
                  key={blog.id}
                  href={`/blogs-internal/${blog.id}`}
                  className="block relative mb-16"
                >
                  <div className="relative h-64 w-full overflow-hidden rounded-lg group">
                    <div className="relative h-full w-full">
                      <img
                        src={blog.image_url}
                        alt={blog.image_alt || blog.title}
                        className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-6 w-2/3 bg-white p-4 rounded-lg shadow-md transform translate-y-[20%]">
                    <span className="text-red-500 text-sm font-semibold">
                      {blog.category?.title || "BLOG"}
                    </span>
                    <h3 className="text-lg text-black font-semibold mt-1">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(blog.post_date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}{" "}
                      {/* • {blog.views} Views */}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
