import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css"

const SEOStrategy = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Section with Images */}
        <div className={`md:w-1/2 flex flex-col gap-4  ${styles["opp"]}`}>
          {/* Top Row with Two Images */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <img src="images/i2.webp" alt="SEO Team Meeting" className="rounded-lg w-full h-[224px] object-cover" />
            </div>
            <div className="w-1/2">
              <img src="images/i1.webp" alt="SEO Strategy Diagram" className="rounded-lg w-full h-[202px] object-cover mt-3" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <img src="images/i3.webp" alt="SEO Analytics" className="rounded-lg w-full h-[251px] object-cover" />
          </div>
        </div>

        {/* Right Section with Content */}
        <div className={`md:w-1/2 flex flex-col justify-center ${styles["opp"]}`}>
          <div className="text-[12.8px] leading-[1.1] mb-[6px] font-[400] font-helveticaneue text-[#f857a6]">KEY POINT</div>
          <h1 className="text-[30.4px] leading-[1.25] mb-6 mt-2 font-[400] font-helveticaneue text-white">
            Turn Opportunities into Wins with a Tailored SEO Strategy
          </h1>
          <p className="text-[15px] leading-[24px] mb-[6px] font-[400] font-helveticaneue text-semi-white">
            Maximize your SEO potential with our comprehensive analysis. We thoroughly assess your site's current SEO performance, benchmarking it against competitors. Through in-depth research, we identify the best keywords for your business, strategically mapping them to create a website plan aimed at delivering measurable results. Our SEO audit includes:
          </p>

          {/* SEO Services Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              "Keyword Research",
              "Keyword Mapping",
              "Competitor Analysis",
              "Onsite SEO",
              "Site Crawler Review",
              "Site Architecture",
              "Google Analytics Analysis",
              "Google Search Console"
            ].map((service, index) => (
              <div key={index} className="text-[15px] leading-[24px] font-[400] font-helveticaneue text-semi-white flex items-center gap-2">
                <FontAwesomeIcon icon={faPen} className="text-gray-400" />
                <span className="text-gray-400">{service}</span>
              </div>
            ))}
          </div>

          <p className="text-[15px] leading-[24px] font-[400] font-helveticaneue text-semi-white">
            Each element in our process is crafted to enhance visibility, optimize your digital footprint, and drive meaningful outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SEOStrategy;
