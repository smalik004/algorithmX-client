import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from "./styles.module.css";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const PublicEnhancedSection = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Section - Image with Square Border */}
          <div className="w-full lg:w-1/3 relative">
            <div className="relative">
              <img 
                src="images/Enhanced-digital-branding-370x370.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto relative z-1"
              />
              <div 
                className="absolute top-4 left-4 right-4 bottom-4 border-[5px] border-[#f7f5ef] z-2 pointer-events-none"
                aria-hidden="true"
              ></div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="w-full lg:w-2/3">
            <h1 className={`${styles["enhanced-title"]} ${monsterfont1.className}`}>
              Enhanced Digital Branding
            </h1>
            
            <p className={`${styles["enhanced-description"]} font-opensans text-semi-white`}>
              AlgorithmX's comprehensive public relations services provide assistance in creating and distributing your press release, helping you secure premium links and placements that support your marketing efforts. Press releases play a significant role in journalism as more than 90% of journalists state that they use PR releases as their first source to unearth new stories. Effectively utilizing this channel can improve your credibility and visibility within your industry.
            </p>
            <p className={`${styles["enhanced-description"]} font-opensans text-semi-white`}>
              By relying on AlgorithmX for your press release strategy, you gain access to expertise that ensures your message connects effectively with your target market and captures the interest of major media outlets. With our best public relations services, we not only enhance your brand awareness but also lay a strong foundation for fostering enduring relationships with media professionals and journalists. At AlgorithmX, we turn your press release an influential instrument for shaping narratives and driving engagement in your field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicEnhancedSection;