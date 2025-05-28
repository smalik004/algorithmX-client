import React from "react";
import styles from "../contentcreation/style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});

const FranchiseSection = () => {
  return (
    <div className="min-h-screen bg-black pt-[100px]">
      <div className="  md:max-w-[1200px] mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row md:items-center  ">
          {/* Left side - Image */}
          <div className="w-full md:w-2/5">
            <div className="relative">
              {/* Main Image */}
              <img
                src="images/Franchise.webp"
                alt="Branding process with color swatches"
                className={`w-[290px] h-auto md:h-[400px] shadow-lg mx-auto ${styles["custom-rounded-tr"]} filter grayscale-[30%] sepia-[20%]   `}
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
                  href="#explore"
                  className={`text-white font-size-20 letter-spacing-8 ${monsterfont.className} tracking-widest text-lg hover:text-white transition`}
                >
                  EXPLORE
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Graphics and description */}
          <div className="w-full md:w-3/5  md:items-start items-center text-center md:text-left">
            {/* Cylindrical image above branding (hidden on phones) */}
            <img
              src="images/g1.png"
              alt="Cylindrical Branding Icon"
              className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full shadow-lg hidden md:block"
            />
          <div>
        <span
          className={` ${styles["title"]} ${monsterfont2.className} tracking-wider text-white block`}
      >
        FRANCHISE
  </span>
  <span
    className={`  ${styles["title"]} ${monsterfont1.className} tracking-wider bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent ml-2`}
  >
   MARKETING
  </span>
</div>

          </div>
        </div>
        {/* Description below */}
        <div className="mt-8 md:mt-12">
          <p
            className={`text-semi-white  ${styles["description-text"]} ${monsterfont1.className} text-center`}
          >
          AlgorithmX is a premier franchise marketing agency that boosts the development of franchises by implementing customized marketing strategies crafted to enhance the brand’s reach and establish a strong market presence across diverse locations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FranchiseSection;
