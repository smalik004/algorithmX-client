"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import useFetchBlogs from "../hooks/fetchblogs";

const TabsContent = () => {
  const result = useFetchBlogs(); // API call
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [contentByCategory, setContentByCategory] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Organize blogs by category
  useEffect(() => {
    if (result && result.length > 0) {
      const categoryMap = {};

      result.forEach((blog, index) => {
        const categoryTitle = blog.category?.title || "Uncategorized";

        if (!categoryMap[categoryTitle]) {
          categoryMap[categoryTitle] = [];
        }

        // Format the ID to be 2 digits (01, 02, etc.)
        const formattedIndex = (categoryMap[categoryTitle].length + 1)
          .toString()
          .padStart(2, "0");

        categoryMap[categoryTitle].push({
          id: formattedIndex,
          category: blog.category?.title?.toUpperCase() || "UNCATEGORIZED",
          title: blog.title || "Untitled Blog",
          author: blog.author_name || "Unknown Author",
          date: blog.created_at
            ? new Date(blog.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : "Unknown date",
          readTime: blog.read_time || "3 min read",
          link: `/blog/${blog.blog_id}`,
          image: blog.image_url || "/images/default.jpg",
          tags: blog.tags || [],
        });
      });

      const uniqueCategories = Object.keys(categoryMap);
      setCategories(uniqueCategories);
      setContentByCategory(categoryMap);
      setActiveCategory(uniqueCategories[0] || "");
    }
  }, [result]);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
    if (contentByCategory[activeCategory]?.length > 0) {
      setSelectedItem("01");
      setHoveredItem(null);
    }
  }, [activeCategory]);

  // Get current items based on active category and pagination
  const allItems = contentByCategory[activeCategory] || [];
  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allItems.slice(startIndex, endIndex);

  // Handle hover events
  const handleItemHover = (id) => {
    setHoveredItem(id);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  // Set selected item when hover ends
  useEffect(() => {
    if (hoveredItem) {
      setSelectedItem(hoveredItem);
    }
  }, [hoveredItem]);

  // Reset selected item when changing pages
  useEffect(() => {
    if (currentItems.length > 0) {
      setSelectedItem(currentItems[0].id);
      setHoveredItem(null);
    }
  }, [currentPage]);

  // Get the item to display image for
  const getItemForImage = () => {
    const itemId = hoveredItem || selectedItem;
    const foundItem = currentItems.find((item) => item.id === itemId);
    return foundItem || currentItems[0];
  };

  // Current item to display image for
  const currentDisplayItem = getItemForImage();

  // Get the appropriate top margin based on item position in current page
  const getImageMarginTop = (itemId) => {
    const itemIndex = currentItems.findIndex((item) => item.id === itemId);
    switch (itemIndex) {
      case 0:
        return "0"; // 1st item
      case 1:
        return "150px"; // 2nd item
      case 2:
      case 3:
        return "200px"; // 3rd-4th item
      default:
        return "0";
    }
  };

  // Pagination handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Show loading state if no data yet
  if (!result || result.length === 0) {
    return (
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Categories</h1>
          <div className="text-center py-8">
            <p className="text-gray-400">Loading content...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Categories</h1>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md border ${
                activeCategory === category
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-gray-200 text-gray-300 hover:border-gray-300"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content grid - desktop view */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            {currentItems.map((item) => (
              <Link href={item.link} key={item.id} className="block">
                <div
                  className="relative pb-6"
                  onMouseEnter={() => handleItemHover(item.id)}
                  onMouseLeave={handleItemLeave}
                >
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-blue-400 text-sm bg-gray-800 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold mb-2">{item.title}</h2>

                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                    <span className="font-medium">{item.author}</span>
                    <div className="flex items-center gap-2 text-gray-500">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 text-gray-400">
                    <span>f</span>
                    <span>i</span>
                    <span>x</span>
                    <span>l</span>
                  </div>

                  {/* Animated blue line on hover/selected */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200">
                    <div
                      className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
                      style={{
                        width:
                          hoveredItem === item.id || selectedItem === item.id
                            ? "100%"
                            : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Image column - displays image for current hovered/selected item */}
          <div
            className="hidden md:block self-start"
            style={{
              marginTop: getImageMarginTop(currentDisplayItem?.id),
            }}
          >
            {currentDisplayItem && (
              <Link href={currentDisplayItem.link}>
                <div className="rounded-xl overflow-hidden aspect-square flex items-center justify-center">
                  <img
                    src={currentDisplayItem.image}
                    alt={currentDisplayItem.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile view */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {currentItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              className="block relative rounded-xl border border-gray-700 p-4 shadow-sm bg-gray-900 hover:shadow-md hover:bg-gray-800 transition-all duration-200"
            >
              {/* Image */}
              <div className="mb-4 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex gap-4 mb-2 text-sm">
                <span className="text-gray-500">{item.id}</span>
                <span className="text-red-500 uppercase">{item.category}</span>
              </div>

              <h2 className="text-xl font-bold mb-2">{item.title}</h2>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 text-sm text-gray-400">
                <span className="text-white">{item.author}</span>
                <div className="flex items-center gap-2">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>
              </div>

              <div className="flex gap-4 text-gray-400 text-xs">
                <span>f</span>
                <span>i</span>
                <span>x</span>
                <span>l</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination - Show only if there are more than 4 items */}
        {allItems.length > itemsPerPage && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-md border transition-colors ${
                currentPage === 1
                  ? "border-gray-600 text-gray-600 cursor-not-allowed"
                  : "border-gray-400 text-gray-300 hover:border-gray-300 hover:bg-gray-800"
              }`}
            >
              Previous
            </button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 rounded-md border transition-colors ${
                      currentPage === page
                        ? "bg-blue-500 text-white border-blue-500"
                        : "border-gray-400 text-gray-300 hover:border-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-md border transition-colors ${
                currentPage === totalPages
                  ? "border-gray-600 text-gray-600 cursor-not-allowed"
                  : "border-gray-400 text-gray-300 hover:border-gray-300 hover:bg-gray-800"
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Page info */}
        {allItems.length > itemsPerPage && (
          <div className="text-center mt-4 text-gray-400 text-sm">
            Showing {startIndex + 1}-{Math.min(endIndex, allItems.length)} of{" "}
            {allItems.length} articles
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsContent;
