import React from 'react';
import styles from '../social-media-audit/style.module.css'
import { Montserrat } from 'next/font/google'

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"600",
})

const EssentialSection = () => {
return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center md:items-start gap-8 ">

         {/* Left Section - Image */}
         <div className="w-full lg:w-1/2">
            <img
            src="images/Influencer-Marketing-Strategies-and-Enhancements-570x388.webp"
            alt="Google Penguin Penalty Recovery"
            className="w-full h-auto"
            />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 max-w-[43.875rem] mx-auto px-[1rem] ">
            <h1 className={`text-[35.2px] font-[600] leading-[1.08] font-helveticaneue mb-[1.8125rem]`}>
            Influencer Marketing Strategies and Enhancements
            </h1>
            <h1 className='text-[24px] font-helveticaneue leading-[1.1]'>What We Do</h1>
            <p className={`text-[16px] leading-[28px] font-helveticaneue text-semi-white `}>
            Influencer Marketing Strategies: Embrace micro-influencers to celebrities
            </p>
            <p className={`text-[16px] leading-[28px] font-helveticaneue text-semi-white `}>
            Ambassador Initiatives: Migrate from manual management to technology-driven systems
            </p>
            <p className={`text-[16px] leading-[28px] font-helveticaneue text-semi-white `}>
            Influencer Content Creation: Utilize social media content produced by creators
            </p>
            <p className={`text-[16px] leading-[28px] font-helveticaneue text-semi-white `}>
            Influencer Performance Marketing: Leverage Ad content created by creators
            </p>
            <h1 className='text-[24px] font-helveticaneue leading-[1.1] mt-[30px]'>Campaign Accelerators</h1>
            <p className={`text-[16px] leading-[28px] font-helveticaneue text-semi-white `}>
            Integrated Paid Media & Amplification
            </p>
            <p className={`text-[16px] leading-[28px] font-helveticaneue text-semi-white `}>
            Influencer and Experiential Event Fusion
            </p>
            <p className={`text-[16px] leading-[28px] font-helveticaneue text-semi-white `}>
            Influencer and Brand Social Collaboration
            </p>
            <p className={`text-[16px] leading-[28px] font-helveticaneue text-semi-white `}>
            Creative Recycling and Comprehensive Marketing Fusion
            </p>
            


        </div>

        </div>
    </div>
    </div>
);
};

export default EssentialSection;
