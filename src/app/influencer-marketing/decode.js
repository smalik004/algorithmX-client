import React from 'react';
import styles from '../social-media-audit/style.module.css'
import { Montserrat } from 'next/font/google';

    const monsterfont1 = Montserrat({
        subsets: ["latin"],
        weight: "700",
      });

const DecodeSection = () => {
return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left Section - Content */}
        <div className="w-full lg:w-1/2   max-w-[43.875rem] mx-auto px-[1rem]">
            <h1 className={`text-[35.2px] font-[600] leading-[1.08]  mb-[30px]`}>
            We’ve Decoded Influencer Profitability for You
            </h1>
            <p className={`text-[16px] leading-[28px] font-helveticaneue text-semi-white `}>
            The Business Intelligence and Data Science team at AlgorithmX has successfully tackled the challenges of measuring, evaluating, and attributing profitability in influencer marketing. We generate bespoke attribution models for clients to ensure that we measure the real profitability of influencer marketing using our advanced licensed technology.
            </p>


        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
            src="images/Decoded-Influencer-Profitability-for-You-570x388.webp"
            alt="Google Penguin Penalty Recovery"
            className="w-full h-auto"
            />
        </div>
        </div>
    </div>
    </div>
);
};

export default DecodeSection;
