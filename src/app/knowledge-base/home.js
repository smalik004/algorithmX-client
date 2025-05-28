"use client";
import { useState, useRef, useEffect } from "react";

export default function AlphabeticalGlossary({ data }) {
  const [activeAlphabet, setActiveAlphabet] = useState("A");
  const sectionRefs = useRef({});
  const scrollingByClick = useRef(false);
  const userManuallyScrollingSidebar = useRef(false);
  const userManuallyScrollingMobile = useRef(false);
  const sidebarScrollTimeout = useRef(null); // Timeout to reset manual scrolling flag
  const mobileScrollTimeout = useRef(null); // Timeout to reset mobile manual scrolling flag
  const alphabetSidebarRef = useRef(null);
  const mobileAlphabetBarRef = useRef(null);

  // Generate alphabet array A-Z
  const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  // Process API data and organize alphabetically
  const processGlossaryData = () => {
    if (!data || !Array.isArray(data)) {
      return {};
    }

    const organizedData = {};

    // Initialize all alphabet keys with empty arrays
    alphabets.forEach((letter) => {
      organizedData[letter] = [];
    });

    // Process each item from API data
    data.forEach((item) => {
      if (item.keyword && typeof item.keyword === "string") {
        const firstLetter = item.keyword.charAt(0).toUpperCase();

        // Only add if it's a valid alphabet letter
        if (alphabets.includes(firstLetter)) {
          organizedData[firstLetter].push({
            title: item.keyword,
            id: item.id || "#", // Use item.link if available, otherwise default to '#'
            // You can add more properties here if your API provides them
            id: item.id || null,
            description: item.description || null,
          });
        }
      }
    });

    // Sort items within each alphabet group
    Object.keys(organizedData).forEach((letter) => {
      organizedData[letter].sort((a, b) => a.title.localeCompare(b.title));
    });

    return organizedData;
  };

  const glossaryData = processGlossaryData();

  const handleAlphabetClick = (alphabet) => {
    setActiveAlphabet(alphabet);
    scrollingByClick.current = true;

    const element = sectionRefs.current[alphabet];
    if (element) {
      const yOffset = -200; // Offset for navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    // Sync both desktop and mobile alphabet navigation
    syncAlphabetNavigation(alphabet);

    setTimeout(() => {
      scrollingByClick.current = false;
    }, 1000);
  };

  // Handle manual sidebar scrolling
  const handleSidebarScroll = () => {
    userManuallyScrollingSidebar.current = true;

    // Clear existing timeout
    if (sidebarScrollTimeout.current) {
      clearTimeout(sidebarScrollTimeout.current);
    }

    // Reset the flag after user stops scrolling for 2 seconds
    sidebarScrollTimeout.current = setTimeout(() => {
      userManuallyScrollingSidebar.current = false;
    }, 2000);
  };

  // Handle manual mobile alphabet bar scrolling
  const handleMobileScroll = () => {
    userManuallyScrollingMobile.current = true;

    // Clear existing timeout
    if (mobileScrollTimeout.current) {
      clearTimeout(mobileScrollTimeout.current);
    }

    // Reset the flag after user stops scrolling for 2 seconds
    mobileScrollTimeout.current = setTimeout(() => {
      userManuallyScrollingMobile.current = false;
    }, 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollingByClick.current) return;

        // Filter for elements that are intersecting
        const intersectingEntries = entries.filter(
          (entry) => entry.isIntersecting
        );

        if (intersectingEntries.length > 0) {
          const viewportHeight = window.innerHeight;
          const targetPosition = viewportHeight * 0.33; // Target position at 1/3 down

          let bestMatch = intersectingEntries[0];
          let smallestDistance = Infinity;

          intersectingEntries.forEach((entry) => {
            const rect = entry.boundingClientRect;
            const elementMiddle = rect.top + rect.height / 2;
            const distanceFromTarget = Math.abs(elementMiddle - targetPosition);

            if (distanceFromTarget < smallestDistance) {
              smallestDistance = distanceFromTarget;
              bestMatch = entry;
            }
          });

          const newActiveAlphabet = bestMatch.target.id;
          setActiveAlphabet(newActiveAlphabet);

          // Sync alphabet navigation - but only if user is not manually scrolling sidebar or mobile
          if (
            !userManuallyScrollingSidebar.current &&
            !userManuallyScrollingMobile.current
          ) {
            syncAlphabetNavigation(newActiveAlphabet);
          }
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5], // Multiple thresholds for smoother detection
        rootMargin: "-15% 0px -50% 0px", // Prioritize upper-middle area of viewport
      }
    );

    Object.keys(sectionRefs.current).forEach((key) => {
      if (sectionRefs.current[key]) {
        observer.observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.keys(sectionRefs.current).forEach((key) => {
        if (sectionRefs.current[key]) {
          observer.unobserve(sectionRefs.current[key]);
        }
      });
    };
  }, [alphabets]);

  // Helper function to sync alphabet navigation in both desktop and mobile views
  const syncAlphabetNavigation = (alphabet) => {
    // Sync desktop sidebar - only if user is not manually scrolling
    if (alphabetSidebarRef.current && !userManuallyScrollingSidebar.current) {
      const alphabetIndex = alphabets.findIndex((a) => a === alphabet);
      if (alphabetIndex !== -1) {
        const buttonHeight = 40; // Approximate height of each alphabet button
        const scrollPosition = Math.max(0, alphabetIndex * buttonHeight - 150);
        alphabetSidebarRef.current.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }

    // Sync mobile horizontal alphabet bar - only if user is not manually scrolling
    if (mobileAlphabetBarRef.current && !userManuallyScrollingMobile.current) {
      const alphabetIndex = alphabets.findIndex((a) => a === alphabet);
      if (alphabetIndex !== -1) {
        const buttonWidth = 42; // Approximate width of each alphabet button including margins
        const scrollPosition = Math.max(
          0,
          alphabetIndex * buttonWidth - window.innerWidth / 2 + buttonWidth / 2
        );
        mobileAlphabetBarRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="flex justify-center bg-black text-white pt-[100px] pb-[100px] min-h-screen">
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl">
        {/* Alphabet sidebar - enhanced with better styling */}
        <div className="hidden md:flex flex-col sticky top-[100px] h-[500px] pt-[80px] pr-4  bg-opacity-70 backdrop-blur-sm rounded-r-lg shadow-lg">
          <div
            ref={alphabetSidebarRef}
            onScroll={handleSidebarScroll} // Add scroll event listener
            className="flex flex-col space-y-1 overflow-y-auto h-full pr-2 scrollbar-thin"
          >
            {alphabets.map((alphabet) => (
              <button
                key={alphabet}
                onClick={() => handleAlphabetClick(alphabet)}
                className={`py-2 px-4 text-center font-medium transition-all duration-300 ${
                  activeAlphabet === alphabet
                    ? "text-red-500  rounded-md shadow-md transform scale-105"
                    : "text-gray-300 hover:text-red-400 hover:bg-gray-800 hover:bg-opacity-50 rounded-md"
                }`}
              >
                {alphabet}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal alphabet bar for mobile */}
        <div
          ref={mobileAlphabetBarRef}
          onScroll={handleMobileScroll} // Add scroll event listener for mobile
          className="md:hidden sticky top-0 z-10 pt-[100px] bg-black bg-opacity-90 backdrop-blur-sm px-4 py-3 overflow-x-auto whitespace-nowrap shadow-md scrollbar-thin-x"
        >
          {alphabets.map((alphabet) => (
            <button
              key={alphabet}
              onClick={() => handleAlphabetClick(alphabet)}
              className={`inline-block mx-1 min-w-[36px] py-2 px-3 text-center font-medium transition-all duration-200 ${
                activeAlphabet === alphabet
                  ? "text-red-500 rounded-md shadow-md"
                  : "text-gray-300 hover:text-red-400 rounded-md"
              }`}
            >
              {alphabet}
            </button>
          ))}
        </div>

        {/* Main content area with custom scrollbar */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto scrollbar-custom">
          {alphabets.map((alphabet) => (
            <section
              key={alphabet}
              id={alphabet}
              ref={(el) => (sectionRefs.current[alphabet] = el)}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold border-b-2 border-red-500 border-opacity-40 pb-3 mb-8 text-red-500 flex items-center">
                <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                  {alphabet}
                </span>
                <div className="ml-4 h-px flex-grow bg-gradient-to-r from-red-500 to-transparent"></div>
              </h2>

              {glossaryData[alphabet] && glossaryData[alphabet].length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {glossaryData[alphabet].map((item, index) => (
                    <a
                      key={index}
                      href={`/knowledge-base-internal/${item.id}`}
                      className="text-gray-300 hover:text-red-400 transition-colors block p-3 rounded-lg "
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic p-4 bg-gray-800 bg-opacity-20 rounded-lg border border-gray-800">
                  No entries for this letter yet.
                </p>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* Add global styles for custom scrollbars */}
      <style jsx global>{`
        /* Custom scrollbar styles */
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(31, 31, 31, 0.5);
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(220, 38, 38, 0.5);
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(220, 38, 38, 0.7);
        }

        .scrollbar-thin-x::-webkit-scrollbar {
          height: 4px;
        }

        .scrollbar-thin-x::-webkit-scrollbar-track {
          background: rgba(31, 31, 31, 0.5);
        }

        .scrollbar-thin-x::-webkit-scrollbar-thumb {
          background: rgba(220, 38, 38, 0.5);
          border-radius: 10px;
        }

        .scrollbar-custom::-webkit-scrollbar {
          width: 8px;
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(31, 31, 31, 0.3);
          border-radius: 10px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: rgba(220, 38, 38, 0.4);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: rgba(220, 38, 38, 0.6);
        }
      `}</style>
    </div>
  );
}
