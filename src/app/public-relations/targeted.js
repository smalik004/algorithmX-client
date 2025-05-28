import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from "./styles.module.css";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});

const PublicTargetedSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Section - Content */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className={`${styles["targeted-title"]} ${monsterfont1.className} text-center md:text-left`}>
              Targeted Audience Engagement
            </h1>
            <p className={`${styles["targeted-description"]} font-helveticaneue text-semi-white`}>
              AlgorithmX’s top-notch public relations services help your brand connect with millions of viewers/readers, placing your business as a leading player in the industry building trust and ownership. By utilizing more than 450 top news websites, our platform offers exquisite visibility and exposure, magnifying the impact of brand’s message across diverse audiences, leading to increased growth and recognition within your sector.
            </p>
            <p className={`${styles["targeted-description"]} font-helveticaneue text-semi-white`}>
              Our Penguin recovery strategy begins with a detailed link audit to identify and address problematic backlinks, including:
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="images/Targeted-Audience-Engagement-570x382.webp"
              alt="Google Penguin Penalty Recovery"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicTargetedSection;
