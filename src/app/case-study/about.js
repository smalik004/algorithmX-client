// components/AboutSection.jsx

import React from "react";
import Image from "next/image";

const AboutSection = ({ data }) => {
  // Get images from API data
  const images = data?.aboutImgURLs || [];
  const productType = data?.productType;

  const getMaxImages = () => {
    if (productType === "web") return 2;
    if (productType === "app" || productType === "mobile") return 4;
    return images.length; // Default: show all available images
  };

  // Get images to display (limited by product type)
  const imagesToShow = images.slice(0, getMaxImages());

  // Don't render image section if no images
  if (imagesToShow.length === 0) {
    return (
      <div className="w-full bg-black">
        {/* Top Content Section */}
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="flex flex-col-reverse md:flex-row md:justify-start">
            {/* Right: Description */}
            <div className="md:w-1/2">
              <p className="text-white text-base md:text-lg md:text-start text-center">
                {data?.brandAboutDesc}
              </p>
            </div>
            {/* Left: About Heading */}
            <div className="md:w-1/2 mb-6 md:mb-0 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                About
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Generate alternating positioning classes for mobile/app images
  const getImagePositioning = (index, totalImages) => {
    if (productType === "web") {
      // For web: simple side-by-side layout
      return totalImages === 1 ? "w-full md:w-1/2 mx-auto" : "w-full md:w-1/2";
    }

    // For mobile/app: alternating up/down positioning
    const positions = ["md:-mt-12", "md:mt-12", "md:-mt-8", "md:mt-16"];
    const widthClass =
      totalImages === 1
        ? "w-full md:w-1/4 mx-auto"
        : totalImages === 2
        ? "w-full sm:w-1/2 md:w-1/2"
        : totalImages === 3
        ? "w-full sm:w-1/2 md:w-1/3"
        : "w-full sm:w-1/2 md:w-1/4";

    return `${widthClass} px-2 ${positions[index]}`;
  };

  return (
    <div className="w-full bg-black">
      {/* Top Content Section */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col-reverse md:flex-row md:justify-start">
          {/* Right: Description */}
          <div className="md:w-1/2">
            <p className="text-white text-base md:text-lg md:text-start text-center">
              {data?.brandAboutDesc}
            </p>
          </div>
          {/* Left: About Heading */}
          <div className="md:w-1/2 mb-6 md:mb-0 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white">About</h1>
          </div>
        </div>
      </div>

      {/* Dynamic Images Section */}
      <div className="w-full bg-black relative py-[10px] overflow-hidden">
        {/* Images Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`flex justify-center items-center ${
              imagesToShow.length === 1
                ? "justify-center"
                : productType === "web"
                ? "gap-8 md:gap-16"
                : "flex-wrap md:flex-nowrap gap-4 md:gap-8"
            }`}
          >
            {imagesToShow.map((imageUrl, index) => (
              <div
                key={index}
                className={getImagePositioning(index, imagesToShow.length)}
              >
                <div className="relative h-96 w-full">
                  <Image
                    fill
                    src={imageUrl}
                    alt={`${data?.brandName || "Product"} Interface ${
                      index + 1
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: "contain" }}
                    className=""
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
