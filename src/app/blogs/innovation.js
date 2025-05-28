// src/app/page.js
"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useFetchBlogs from "../hooks/fetchblogs";

export default function Innovation() {
  const [activeTab, setActiveTab] = useState("");
  const [activeItems, setActiveItems] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [blogCategories, setBlogCategories] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [tabs, setTabs] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const result = useFetchBlogs();
  console.log("result-response", result);

  // Extract blogs and categories from the API response
  useEffect(() => {
    if (result && result.length > 0) {
      setAllBlogs(result);

      // Extract unique categories from blogs
      const uniqueCategories = [
        ...new Set(result?.map((blog) => blog.category)),
      ];
      setBlogCategories(uniqueCategories);
      console.log("Extracted categories:", uniqueCategories);
    }
  }, [result]);

  // Generate tabs based on categories and blogs
  useEffect(() => {
    if (blogCategories.length > 0 && allBlogs.length > 0) {
      const generatedTabs = blogCategories?.map((category) => ({
        id: category?.toLowerCase().replace(/\s+/g, "-"),
        name: category,
        items: allBlogs
          .filter((blog) => blog.category === category)
          .map((blog) => ({
            title: blog.title,
            category: blog.category,
            image: blog.image_url, // fallback image
            link: `/blog/${blog.slug || blog._id}`, // adjust path as needed
          })),
      }));

      setTabs(generatedTabs);

      // Set first category as active if no active tab is set
      if (!activeTab && generatedTabs.length > 0) {
        setActiveTab(generatedTabs[0].id);
      }

      console.log("Generated tabs:", generatedTabs);
    }
  }, [blogCategories, allBlogs, activeTab]);

  // Update active items when tab changes
  useEffect(() => {
    const currentTabItems =
      tabs.find((tab) => tab.id === activeTab)?.items || [];

    // Filter out duplicates (based on a key like title, slug, or id)
    const seen = new Set();
    const uniqueItems = currentTabItems.filter((item) => {
      const key = item.link || item.title; // Choose unique key
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    // Set only unique items (no circular repetition)
    setActiveItems(uniqueItems);
    console.log("Active items for tab", activeTab, ":", uniqueItems);
  }, [activeTab, tabs]);

  const getItemsToShow = () => {
    if (windowWidth < 768) {
      return 1; // Show 1 on mobile
    } else {
      return 3; // Show 3 on desktop
    }
  };

  const itemsPerView = getItemsToShow();
  const originalLength = activeItems.length;
  const baseIndex = 0; // Start from 0 since we're not doing circular scroll with duplicates
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset current index when switching tabs
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  // Handle next/prev item navigation with animation
  const showNext = () => {
    if (isAnimating || activeItems.length <= itemsPerView) return;

    setDirection("right");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, originalLength - itemsPerView);
        return Math.min(prevIndex + 1, maxIndex);
      });
      setIsAnimating(false);
    }, 300);
  };

  const showPrev = () => {
    if (isAnimating || activeItems.length <= itemsPerView) return;

    setDirection("left");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      setIsAnimating(false);
    }, 300);
  };

  // Calculate items to display
  const visibleItems = activeItems.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  // Show loading state
  if (!result) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading blogs...</div>
      </main>
    );
  }

  // Show empty state
  if (tabs.length === 0 && result && result.length === 0) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">No blog categories found</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Innovation & Tech Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Banner Section */}
        <Link href="/graphics" className="block relative mb-[10px]">
          <div className="w-full h-[11rem] relative overflow-hidden">
            <Image
              src="/images/banner-03.png"
              alt="Kitchen Appliances"
              fill
              className="object-cover"
            />
          </div>
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-white">
          Innovation & Tech
        </h1>

        {/* Tabs Navigation */}
        <div className="flex space-x-4 mb-8 overflow-x-auto no-scrollbar">
          {tabs?.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-md border transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-white bg-transparent text-white"
                  : "border-gray-700 text-gray-400 hover:border-gray-400"
              }`}
            >
              {tab.name} ({tab.items.length})
            </button>
          ))}
        </div>

        {/* Tab Content with Carousel */}
        {activeItems.length > 0 ? (
          <div className="relative overflow-hidden" ref={carouselRef}>
            {/* Left Arrow - Show only if there are items to scroll */}
            {activeItems.length > itemsPerView && currentIndex > 0 && (
              <button
                onClick={showPrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-2 shadow-lg z-10 hover:bg-white/40 transition"
                aria-label="Scroll left"
                disabled={isAnimating}
              >
                <ChevronLeft size={24} className="text-black" />
              </button>
            )}

            {/* Right Arrow - Show only if there are more items to scroll */}
            {activeItems.length > itemsPerView &&
              currentIndex < activeItems.length - itemsPerView && (
                <button
                  onClick={showNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-2 shadow-lg z-10 hover:bg-white/40 transition"
                  aria-label="Scroll right"
                  disabled={isAnimating}
                >
                  <ChevronRight size={24} className="text-black" />
                </button>
              )}

            {/* Carousel Container */}
            <div className="flex transition-transform duration-300">
              {visibleItems?.map((item, index) => (
                <Link
                  href={item.link}
                  key={`${activeTab}-${currentIndex}-${index}`}
                  className={`flex-shrink-0 ${
                    itemsPerView === 1 ? "w-full" : "w-1/3"
                  } px-3`}
                >
                  <div className="bg-white rounded-xl overflow-hidden h-full group">
                    <div className="p-6 text-center">
                      <p className="text-red-500 font-medium text-sm tracking-wide mb-2">
                        {item.category}
                      </p>
                      <h3 className="text-black inline-block relative">
                        <span className="relative inline-block text-center">
                          {item.title}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></span>
                        </span>
                      </h3>
                    </div>
                    <div className="h-64 relative overflow-hidden">
                      <div className="relative h-full transform group-hover:scale-105 transition duration-300">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain"
                          onError={(e) => {
                            e.target.src = "/images/default-blog.jpg"; // Fallback image
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination Dots - Show only if there are multiple pages */}
            {activeItems.length > itemsPerView && (
              <div className="flex justify-center space-x-2 mt-6">
                {Array.from({
                  length: Math.ceil(activeItems.length / itemsPerView),
                })?.map((_, i) => (
                  <button
                    key={`dot-${i}`}
                    className={`h-2 rounded-full transition-all ${
                      Math.floor(currentIndex / itemsPerView) === i
                        ? "w-6 bg-white"
                        : "w-2 bg-gray-600"
                    }`}
                    onClick={() => {
                      if (isAnimating) return;
                      setCurrentIndex(i * itemsPerView);
                    }}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            <p>No blogs found for the selected category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
