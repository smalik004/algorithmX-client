import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});
const TechnicalIdentifySection = () => {
  return (
    <div className=" bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Section - Content */}
          <div className="w-full lg:w-1/2 space-y-2">
            <h2 className={`text-[36px] leading-[1.1] font-helveticaneue  `}>
              Identify & Resolve Hidden SEO Issues with Precision
            </h2>

            <p
              className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}
            >
              Choose AlgorithmX for your technical SEO audit to uncover and
              resolve hidden issues holding your site back. Our technical SEO
              specialists leverage cutting-edge tools and proprietary software
              to ensure your site is fast, crawlable, and fully optimized. With
              a holistic approach, we address every detail, from site speed to
              structured data, for long-term success. Our commitment to full
              transparency means you’ll receive regular updates and reports, so
              you’re always informed of your progress and improvements. Whether
              you’re a growing business or an industry leader, our technical SEO
              services are designed to elevate your rankings and drive impactful
              results.
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <Image
              width={100}
              height={100}
              src="/images/SEO-Issues.webp"
              alt="Local SEO visualization showing map interface across devices"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalIdentifySection;
