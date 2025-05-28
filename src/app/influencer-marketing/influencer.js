import React from 'react';
import styles from '../social-media-audit/style.module.css'
import { Montserrat } from 'next/font/google';

    const monsterfont1 = Montserrat({
        subsets: ["latin"],
        weight: "400",
      });

const InfluencerMasterySection = () => {
return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 ">
        {/* Left Section - Content */}
        <div className="w-full lg:w-1/2  ">
            <h1 className={`${monsterfont1.className} leading-[1.125] text-[56px] mb-[30px] md:text-start text-center`}>
            Influencer Mastery Unleashed
            </h1>
            <p className={`${styles["what-description"]} font-helveticaneue text-semi-white`}>
            When it comes to influencer marketing, AlgorithmX is widely recognized as a leading player among influencer marketing agencies. We have distinguished ourselves by running influencer campaigns effectively and on a huge scale, repeatedly boosting ROI and positioning influencers as the foremost commerce channel for our brand partners.
            </p>


        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
            src="images/Influencer-Mastery-Unleashed-570x382.webp"
            alt="Google Penguin Penalty Recovery"
            className="w-full h-auto"
            />
        </div>
        </div>
    </div>
    </div>
);
};

export default InfluencerMasterySection;
