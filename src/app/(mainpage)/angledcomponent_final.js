"use client";
import React from "react";

const DiagonalGridWithText = () => {
  // Array of image URLs or icons
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", // JS
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg", // Flask
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/Visual_Studio_Code_1.35_icon.svg", // VSCode
    "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png", // C
    "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", // HTML5
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", // CSS3
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", // GitHub
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", // Figma
  ];

  return (
    <div className="min-h-screen bg-black w-full overflow-y-scroll flex flex-col md:flex-row ">
      
      {/* Left Section: Centered Grid Container */}
      <div className="w-full p-4 flex-1 flex items-center justify-center xxl:w-4/5 my-10 md:h-auto overflow-y ">
        <div className="transform rotate-45 xxl:w-4/5 xxl:h-4/5  ">
          {/* Reduced size of the container */}
          <div className="grid grid-cols-6  gap-1 md:gap-5 w-full mr-1 ml-1 justify-items-center content-center items-center">
            {Array.from({ length: 36 }, (_, index) => (
              <div
                key={index}
                className="w-10 h-10 md:w-10 md:h-10 p-1 flex items-center justify-center border border-white relative overflow-hidden"
              >
                <img
                  src={images[index % images.length]}
                  alt={`Icon ${index}`}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section: Text Block */}
      <div className="w-full text-white py-4 px-6 flex-1 flex items-center justify-center md:w-1/2 ">
        <div className="container px-10  mt-3 max-w-screen-sm text-center md:text-left">
          {/* Added max-width and alignment */}
          <h2 className="text-3xl md:text-4xl ">
            Empowered by Cutting-Edge
          </h2>
          <h1 className="text-2xl md:text-3xl font-extrabold mb-5">
            Tech Stack
          </h1>

          <p className=" text-sm md:text-md mb-4">
            At AlgorithmX, our tech stack is designed to deliver powerful and scalable solutions. We leverage
            powerful technologies like Java, Kotlin, Flutter, React-Native, and Android SDK for seamless app and
            website development. Our creative processes are powered by Adobe Creative Cloud and Webflow, ensuring
            visually stunning and user-friendly designs.
          </p>
          <p className="text-sm md:text-md">
            To drive marketing excellence, we utilize tools like Google Analytics, SEMrush, and Moz for in-depth
            insights and optimization. Platforms like HubSpot streamline our CRM and marketing automation, while
            Midjourney and ChatGPT enhance our content creation, and Hootsuite facilitates social media management.
            With Gartner PPC and Google Search Console, we ensure your digital presence is always at its peak.
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default DiagonalGridWithText;
