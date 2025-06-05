"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import useFetchBlogs from "../hooks/fetchblogs";

export default function BlogCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [carouselBlogs, setCarouselBlogs] = useState([]);
  const [currentFeaturedSlide, setCurrentFeaturedSlide] = useState(0);

  const result = useFetchBlogs();

  // Filter and set blogs when result changes
  useEffect(() => {
    if (result && result.length > 0) {
      // Get top 3 blogs for carousel
      const topThreeBlogs = result.slice(0, 3);
      setCarouselBlogs(topThreeBlogs);

      // Filter featured blogs (where is_featured is true)
      const filteredFeaturedBlogs = result.filter(
        (blog) => blog.is_featured === true
      );
      setFeaturedBlogs(filteredFeaturedBlogs);
    }
  }, [result]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselBlogs.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselBlogs.length - 1 : prev - 1
    );
  };

  const nextFeaturedSlide = () => {
    if (featuredBlogs.length > 2) {
      setCurrentFeaturedSlide((prev) =>
        prev >= featuredBlogs.length - 2 ? 0 : prev + 1
      );
    }
  };

  const prevFeaturedSlide = () => {
    if (featuredBlogs.length > 2) {
      setCurrentFeaturedSlide((prev) =>
        prev === 0 ? featuredBlogs.length - 2 : prev - 1
      );
    }
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get current featured blogs to display (2 at a time)
  const getCurrentFeaturedBlogs = () => {
    if (featuredBlogs.length <= 2) {
      return featuredBlogs;
    }
    return featuredBlogs.slice(currentFeaturedSlide, currentFeaturedSlide + 2);
  };

  return (
    <div className="min-h-screen bg-black pt-[100px] p-[20px]">
      <div className="max-w-[1200px] mx-auto my-8 ">
        {/* Main Carousel with Featured Post desktop hidden*/}
        <div className="relative mb-16 md:hidden">
          {/* Wrapper to change layout in mobile */}
          <div className="flex flex-col md:flex-row items-start relative">
            {/* Main image container */}
            <div className="relative h-[12rem] rounded-lg overflow-hidden w-full md:w-1/2">
              {carouselBlogs?.map((blog, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={blog.image_url || "/images/gallery-post-01.jpg"}
                    alt={blog.image_alt || `Carousel slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Carousel Indicator - centered dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {carouselBlogs.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content box */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 relative">
              <div className="w-full bg-white shadow-lg rounded-lg p-4 md:p-6">
                <p className="text-red-500 text-sm font-medium mb-4">
                  {carouselBlogs[currentSlide]?.category?.title || ""}
                </p>
                <h2 className="text-black md:text-2xl font-bold mb-6">
                  <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_2px] hover:bg-[length:100%_2px] transition-all duration-500">
                    {carouselBlogs[currentSlide]?.title || "Blog Title"}
                  </span>
                </h2>

                <div className="flex items-center mt-6 flex-wrap">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-3 bg-gray-300">
                    <img
                      src="/api/placeholder/32/32"
                      alt="Author"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-black font-medium">
                      {carouselBlogs[currentSlide]?.author_name || "Anonymous"}
                    </p>
                    <p className="text-black text-sm">
                      {formatDate(carouselBlogs[currentSlide]?.post_date)} •{" "}
                      {carouselBlogs[currentSlide]?.views || 0} Views
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  {carouselBlogs[currentSlide] && (
                    <Link
                      href={`/blogs-internal/${carouselBlogs[currentSlide].id}`}
                    >
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium">
                        Read Post
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls positioned at bottom left for desktop and mobile centered */}
          <div className="mt-6 md:mt-0 flex justify-center md:justify-start space-x-4 md:absolute md:-bottom-12 md:left-0">
            <button
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700"
              onClick={prevSlide}
            >
              ←
            </button>
            <button
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700"
              onClick={nextSlide}
            >
              →
            </button>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="relative mb-16 md:block hidden">
          {/* Main image container */}
          <div className="relative h-[520px] w-full rounded-lg overflow-hidden">
            {carouselBlogs.map((blog, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={blog.image_url || "/images/gallery-post-01.jpg"}
                  alt={blog.image_alt || `Carousel slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Carousel Indicator - centered dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {carouselBlogs.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content box that overlaps from right */}
          {carouselBlogs[currentSlide] && (
            <Link href={`/blogs-internal/${carouselBlogs[currentSlide].id}`}>
              <div className="absolute top-0 right-0 md:w-1/2 w-[90%]">
                <div className="absolute top-0 md:right-[50px] w-full bg-white shadow-lg rounded-lg transform translate-y-[120%]">
                  <div className="md:p-6 p-[5px]">
                    <p className="text-red-500 text-sm font-medium mb-4">
                      {carouselBlogs[currentSlide]?.category?.title || ""}
                    </p>
                    <h2 className="text-black md:text-2xl font-bold mb-6">
                      <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_2px] hover:bg-[length:100%_2px] transition-all duration-500">
                        {carouselBlogs[currentSlide]?.title || "Blog Title"}
                      </span>
                    </h2>

                    <div className="flex items-center mt-6">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-3 bg-gray-300">
                        <img
                          src="/api/placeholder/32/32"
                          alt="Author"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-black font-medium">
                          {carouselBlogs[currentSlide]?.author_name ||
                            "Anonymous"}
                        </p>
                        <p className="text-black text-sm">
                          {formatDate(carouselBlogs[currentSlide]?.post_date)}{" "}
                          {/* {carouselBlogs[currentSlide]?.views || 0} Views */}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium">
                        Read Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Carousel Controls positioned at bottom left */}
          <div className="absolute -bottom-12 left-0 flex space-x-4">
            <button
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700"
              onClick={prevSlide}
            >
              ←
            </button>
            <button
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700"
              onClick={nextSlide}
            >
              →
            </button>
          </div>
        </div>

        {/* More Featured Posts - Only show if there are featured blogs */}
        {featuredBlogs.length > 0 ? (
          <div className="mt-[120px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">
                More Featured Posts.
              </h3>
              {featuredBlogs.length > 2 && (
                <div className="flex space-x-4">
                  <button
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 bg-white hover:bg-gray-100"
                    onClick={prevFeaturedSlide}
                  >
                    ←
                  </button>
                  <button
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 bg-white hover:bg-gray-100"
                    onClick={nextFeaturedSlide}
                  >
                    →
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getCurrentFeaturedBlogs().map((blog, index) => (
                <Link
                  href={`/blogs-internal/${blog.id}`}
                  key={index}
                  className="rounded-lg overflow-hidden shadow-md bg-white h-full group"
                >
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="sm:w-2/5 h-40 sm:h-auto relative overflow-hidden">
                      <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                        <img
                          src={blog.image_url || "/images/post-images-1.jpg"}
                          alt={blog.image_alt || "Featured post"}
                          className="w-full h-full object-cover rounded-full p-[10px]"
                        />
                      </div>
                    </div>
                    <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                      <div>
                        <p className="text-red-500 text-xs font-semibold mb-2">
                          {blog.category.title}
                        </p>
                        <h4 className="text-lg font-bold">
                          <span className="text-black bg-left-bottom bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-all duration-500">
                            {blog.title}
                          </span>
                        </h4>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="w-6 h-6 rounded-full overflow-hidden mr-3 bg-gray-300">
                          <img
                            src="/api/placeholder/24/24"
                            alt="Author"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-black text-xs">
                            {blog.author_name || "Anonymous"}
                          </p>
                          <p className="text-black text-xs">
                            {formatDate(blog.post_date)}
                            {/* • {blog.views || 0}{" "} */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
