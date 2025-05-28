import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from "./styles.module.css";

const monsterfont1 = Montserrat({
subsets: ["latin"],
weight: "600",
});


const PublicSeizeSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Section - Content */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className={`${styles["press-title"]} font-helveticaneue font-[600]`}>
              Seize PR Opportunities
            </h1>
            <p className={`${styles["press-description"]} font-helveticaneue text-semi-white`}>
              At AlgorithmX, we have a dedicated team of experts in organic public relations who handle all aspects of your digital PR efforts as part of our public relations services, including but not limited to:
            </p>
            {/* Unordered List */}
            <ul className={`list-disc pl-5 text-semi-white font-helveticaneue ${styles["press-description"]} `}>
              <li>Working together with bloggers and social media influencers to reach more audiences.</li>
              <li>Generating valuable content to secure top-notch backlinks and build credibility.</li>
              <li>Managing testimonials and online reviews.</li>
              <li>Developing and sharing press releases.</li>
            </ul>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src="images/PR-opportunities.webp"
              alt="Google Penguin Penalty Recovery"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicSeizeSection;
