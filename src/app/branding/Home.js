import React from "react";
import styles from "./style.module.css";

import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});

const GraphicsSection = () => {
  return (
    <div className="min-h-screen bg-black pt-[100px]">
      <div className="max-w-[1200px] mx-auto px-4 md:py-0 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center ">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Main Image */}
              <img
                src="images/Branding.webp"
                alt="Branding process with color swatches"
                className={`w-[290px] h-auto md:h-[400px] shadow-lg mx-auto ${styles["custom-rounded-tr"]}  `}
              />
              {/* Rectangular Image */}
              <img
                src="images/a3.png"
                alt="Rectangular Branding Image"
                className="w-[290px] h-auto shadow-lg mx-auto mt-1"
              />
              {/* Explore Section - Centered */}
              <div className="flex justify-center items-center mt-4 md:absolute md:bottom-[180px] md:left-7">
                <div className="w-8 h-8 border border-white/60 rounded-full flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
                <a
                  href="#"
                  className={`text-white font-size-20 letter-spacing-8 ${monsterfont.className} tracking-widest text-lg hover:text-white transition`}
                >
                  EXPLORE
                </a>
              </div>
            </div>
          </div>

          {/* Right side - BRANDING and description */}
          <div className="w-full md:w-1/2 flex flex-col md:items-start items-center text-center ">
            {/* Cylindrical image above branding (hidden on phones) */}
            <img
              src="images/g1.png"
              alt="Cylindrical Branding Icon"
              className="w-12 h-12 md:w-[94px] md:h-[70px] object-cover rounded-full shadow-lg hidden md:block"
            />
            <h1
  className={`text-4xl md:text-[85px] md:leading-[90px] md:tracking-[8px] ${monsterfont1.className} bg-clip-text text-transparent`}
  style={{
    backgroundImage: "linear-gradient(90deg, #ffbd12 0, #e03d3d 53.72%, #cd21e9 101.11%)"
  }}
>
  BRANDING
</h1>

          </div>
        </div>
        {/* Description below */}
        <div className="mt-8 md:mt-12">
          <p
            className={`text-semi-white ${styles["description-text"]} ${monsterfont1.className} text-center`}
          >
            AlgorithmX develops unforgettable brand identities that deeply connect with your target audience, boost brand awareness, and foster customer loyalty. Our brand-building services involve crafting brand narratives, logos, and guidelines to guarantee impactful messaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraphicsSection;
