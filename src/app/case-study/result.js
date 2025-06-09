"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

export default function KFCResults({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Parse and transform API data
  const results = useMemo(() => {
    if (!data?.resultPointers) {
      return [];
    }

    try {
      const parsedPointers = JSON.parse(data.resultPointers);
      return parsedPointers.map((item, index) => ({
        id: item.id,
        number: String(index + 1).padStart(2, "0"), // Format as "01", "02", etc.
        highlight: item.title || `Result ${index + 1}`,
        description: `Description for ${item.title || "result"}`,
        image:
          item.img ||
          "https://placehold.co/400x600/000000/ffffff?text=No+Image",
      }));
    } catch (error) {
      console.error("Error parsing resultPointers:", error);
      return [];
    }
  }, [data?.resultPointers]);

  // Don't render if no results
  if (results.length === 0) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">No results available</p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="w-full max-w-6xl mx-auto p-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          {data?.resultTitle}
        </h1>

        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Results List - left side for both mobile and desktop */}
          <div className="w-full md:w-1/2 space-y-6">
            {results.map((result, index) => (
              <div
                key={result.id}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer transition-all duration-300 border-b border-gray-300 pb-6 ${
                  activeIndex === index
                    ? " p-4 text-white"
                    : "text-gray-500 hover:text-white  p-4"
                }`}
              >
                <div className="flex items-start">
                  <span className="text-lg mr-4">{result.number}.</span>
                  <div>
                    <span className="text-xl font-bold"></span>{" "}
                    <span>{result.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image section - right side for both mobile and desktop */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className=" w-full max-w-sm aspect-[5/4] ">
              <Image
                fill
                src={
                  results[activeIndex]?.image ||
                  "https://placehold.co/400x600/000000/ffffff?text=KFC+App"
                }
                alt={`KFC App - ${results[activeIndex]?.highlight || "Result"}`}
                className="w-full h-[300px] object-cover rounded-lg"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/400x600/000000/ffffff?text=Image+Not+Found";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
