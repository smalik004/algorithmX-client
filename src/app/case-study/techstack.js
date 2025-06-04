import React from "react";

const TechnologyStack = ({ data }) => {
  // Get images from API response, limit to maximum 7 images
  const techStackImages = data?.techStackURLs?.slice(0, 7) || [];

  // Don't render the component if no images are available
  if (techStackImages.length === 0) {
    return null;
  }

  return (
    <div className="bg-black py-[80px]">
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center md:text-start">
          {data?.techStackTitle}
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-6">
          {techStackImages.map((imageUrl, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                <img
                  src={imageUrl}
                  alt={`Technology ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    // Handle image load errors gracefully
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
