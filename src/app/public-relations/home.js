import React from "react";
import Image from "next/image";
import styles from "../crm-development-services/style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});
const PublicContentSection = () => {
  return (
    <div className="min-h-screen bg-black pt-[100px]">
      <div className="max-w-[1200px] mx-auto px-4 ">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 md:ml-[100px]">
          {/* Left side - Image */}
          <div className="w-full md:w-[35%]">
            <div className="relative">
              <Image
                width={800}
                height={800}
                src="/images/public-relation.webp"
                alt="Branding process with color swatches"
                className={`w-4/5  h-auto md:h-[400px] shadow-lg mx-auto ${styles["custom-rounded-tr"]} filter grayscale-[30%] sepia-[20%]`}
              />
              {/* Rectangular image below the main image (hidden on phones) */}
              <Image
                width={800}
                height={800}
                src="/images/a3.png"
                alt="Rectangular Branding Image"
                className="w-4/5 h-auto shadow-lg mx-auto"
              />
              {/* Explore Section */}
              <div className="flex justify-center items-center mt-4 md:absolute md:bottom-[150px] md:-ml-[100px]">
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
                  className={`text-white font-size-20 letter-spacing-8 ${monsterfont2.className} tracking-widest text-lg hover:text-white transition `}
                >
                  EXPLORE
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Branding and description */}
          <div className="w-full md:w-[65%] flex flex-col  space-y-2">
            {/* Cylindrical image above branding (hidden on phones) */}
            <Image
              width={48}
              height={48}
              src="/images/g1.png"
              alt="Cylindrical Branding Icon"
              className="w-12 h-12 md:w-24 md:h-20 object-cover rounded-full shadow-lg hidden md:block"
            />
            <h1
              className={`${styles["crm-text"]} ${monsterfont2.className} text-white`}
            >
              PUBLIC
            </h1>
            <h1
              className={`${styles["development-text"]} ${monsterfont.className} bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent `}
            >
              RELATIONS
            </h1>
          </div>
        </div>
        {/* Description below branding */}
        <div className="mt-8 md:mt-12 text-center">
          <p
            className={`${styles["crm-description"]} ${monsterfont.className} text-semi-white `}
          >
            At AlgorithmX, we craft a unique narrative for your brand and boost
            its voice to build trust and strong relationships in the
            marketplace. Our public relations services include press release
            writing, influencer outreach, media relations, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicContentSection;
