"use client";
import React from "react";
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const DiagonalGridWithText = () => {
  // Array of 36 unique image objects with paths and border colors
  const images = [
    { path: "/images/Twitter-X.png", border: "#F7DF1E" }, // JavaScript - yellow
    { path: "/images/DOTNET.png", border: "#3776AB" }, // Python - blue
    { path: "/images/AWS.png", border: "#61DAFB" }, // React - light blue
    { path: "/images/Azure.png", border: "#339933" }, // Node.js - green
    { path: "/images/Cplus.png", border: "#3178C6" }, // TypeScript - blue
    { path: "/images/ChatGPT (1).png", border: "#DD0031" }, // Angular - red
    { path: "/images/Adobe-GenStudio.png", border: "#4FC08D" }, // Vue - green
    { path: "/images/Angular.png", border: "#777BB4" }, // PHP - purple
    { path: "/images/Csharp.png", border: "#CC342D" }, // Ruby - red
    { path: "/images/Css3.png", border: "#007396" }, // Java - blue
    { path: "/images/Bing-Ads.png", border: "#239120" }, // C# - green
    { path: "/images/Bootstrap.png", border: "#00599C" }, // C++ - blue
    { path: "/images/Docker.png", border: "#FA7343" }, // Swift - orange
    { path: "/images/Dynamic-365.png", border: "#7F52FF" }, // Kotlin - purple
    { path: "/images/Etherium.png", border: "#00ADD8" }, // Go - blue
    { path: "/images/FB.png", border: "#7F52FF" }, // Rust - black
    { path: "/images/Flutter.png", border: "#DC322F" }, // Scala - red
    { path: "/images/Github.png", border: "#E34F26" }, // HTML5 - orange
    { path: "/images/Go.png", border: "#1572B6" }, // CSS3 - blue
    { path: "/images/google maps.png", border: "#CC6699" }, // Sass - pink
    { path: "/images/Google-Ads.png", border: "#8DD6F9" }, // Webpack - light blue
    { path: "/images/Google-Cloud.png", border: "#2496ED" }, // Docker - blue
    { path: "/images/Google-Firebase.png", border: "#326CE5" }, // Kubernetes - blue
    { path: "/images/HTML5 (1).png", border: "#FF9900" }, // AWS - orange
    { path: "/images/Hubspot.png", border: "#0078D4" }, // Azure - blue
    { path: "/images/Hyperledger.png", border: "#4285F4" }, // Google Cloud - blue
    { path: "/images/Illustrator (1).png", border: "#47A248" }, // MongoDB - green
    { path: "/images/Insta.png", border: "#336791" }, // PostgreSQL - blue
    { path: "/images/iOS.png", border: "#4479A1" }, // MySQL - blue
    { path: "/images/java.png", border: "#DC382D" }, // Redis - red
    { path: "/images/Javascript.png", border:  "#F7DF1E"  }, // GraphQL - pink
    { path: "/images/Kubernets.png", border: "#4285F4" }, // Firebase - yellow
    { path: "/images/MailChimp.png", border: "#F7DF1E"  }, // Git - orange
    { path: "/images/Meta.png", border: "#D24939" }, // Jenkins - red
    { path: "/images/Moz.png", border: "#F24E1E" }, // Figma - orange
    { path: "/images/MSSQL.png", border: "#007ACC" }, // VSCode - blue
  ];

  return (
    <div className="min-h-screen bg-black w-full flex flex-col md:flex-row md:p-16">
      {/* Left Section: Centered Grid Container */}
      <div className="w-full p-4 flex-1 flex items-center justify-center xxl:w-4/5 my-10 md:h-auto ">
        <div className="transform rotate-45 xxl:w-1/2 xxl:h-1/2">
          <div className="grid grid-cols-6 gap-1 md:gap-4 w-full mr-1 ml-1 justify-items-center content-center items-center">
            {images.map((imageData, index) => (
              <div
                key={index}
                className="w-10 h-10 md:w-12 md:h-12 p-2 flex items-center justify-center relative overflow-hidden hover:bg-gray-800"
                style={{ border: `1px solid ${imageData.border}` }}
              >
                <img
                  src={imageData.path}
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
        <div className="container px-10 mt-3 max-w-screen-sm text-center md:text-left">
          <h2 className={`text-[36px] leading-[42px] ${monsterfont1.className} text-white`}>
            Empowered by Cutting-Edge
          </h2>
          <h1 className={`text-[36px] leading-[42px] ${monsterfont2.className} bg-black text-white mb-5`}>
            Tech Stack
          </h1>

          <p className={`text-[15px] leading-[24px] font-opensans font-[400] text-semi-white mt-[20px]`}>
            At AlgorithmX, our tech stack is designed to deliver powerful and scalable solutions. We leverage
            powerful technologies like Java, Kotlin, Flutter, React-Native, and Android SDK for seamless app and
            website development. Our creative processes are powered by Adobe Creative Cloud and Webflow, ensuring
            visually stunning and user-friendly designs.
          </p>
          <p className={`text-[15px] leading-[24px] font-opensans font-[400] text-semi-white mt-[20px]`}>
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