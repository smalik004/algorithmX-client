import React from 'react';
import styles from '../social-media-audit/style.module.css'
import { Montserrat } from 'next/font/google';

    const monsterfont1 = Montserrat({
        subsets: ["latin"],
        weight: "500",
      });

const ElevateSection = () => {
return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 ">
        {/* Left Section - Content */}
        <div className="w-full lg:w-1/2  px-[1rem] max-w-[43.875rem] mx-auto ">
            <h1 className={`text-[35.2px] font-helveticaneue leading-[1.08] font-[600] mb-[1.8125rem]`}>
            Elevate your online presence and social media growth
            </h1>
            <p className={`text-[16px] leading-[25px] mb-[1.8125rem] font-helveticaneue  text-semi-white`}>
            Ever imagined your business appearing at the top of search results when potential customers search online? AlgorithmX makes this idea come true through our strategic franchise SEO.
            </p>
            <p className={`text-[16px] leading-[25px] mb-[1.8125rem] font-helveticaneue text-semi-white`}>
            Based on data from Ayzenberg Social Index, for multi-location retail brands, each Facebook follower translates to around $4.40 in revenue, with each franchise location possessing over 400 followers. Safeguard your future revenue and social media worth by optimizing your social media presence.
            </p>
            <p className={`text-[16px] leading-[25px]  font-helveticaneue text-semi-white`}>
            Improving your ranking on search engine results page (SERPs) holds the potential to increase your click-through rate (CTR) by a fascinating 31.7%.
            </p>


        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
            src="images/Franchise-social-media-last-570x388.webp"
            alt="Google Penguin Penalty Recovery"
            className="w-full h-auto"
            />
        </div>
        </div>
    </div>
    </div>
);
};

export default ElevateSection;
