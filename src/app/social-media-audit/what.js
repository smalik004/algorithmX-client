import React from 'react';
import styles from './style.module.css'
import { Montserrat } from 'next/font/google'

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"700",
  fallback: ["sans-serif"],
})

const WhatSection = () => {
    return (
        <div className="bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="container max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8 ">
                    {/* Left Section - Image */}
                    <div className="w-full lg:w-1/3 relative">
            <div className="relative">
              <img 
                src="images/what-social-media.webp"
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
                    <div className="w-full lg:w-2/3 ">
                        <h1 className={`${styles["what-title"]}  ${monsterfont1.className}`}>
                            What is a social media audit?
                        </h1>

                        <p className={`${styles["what-description"]} font-opensans text-semi-white  mt-[30px]`}>
                            A social media audit analyzes the effectiveness of your current strategies across platforms like Facebook, Instagram, and TikTok. It highlights strengths, uncovers weaknesses, and identifies growth opportunities, offering clear insights to enhance your social media efforts.
                            At AlgorithmX, we provide:
                        </p>

                        <ul className={`${styles["what-subtitle"]} text-semi-white mt-[30px] font-helveticaneue`}>
                            <li><span className="text-[#dc3545]">1)Technical Report:</span>  In-depth analysis of your paid social media accounts.</li>
                            <li><span className="text-[#dc3545]">2)Expert Review:</span>  A seasoned social media expert presents actionable recommendations.</li>
                            <li><span className="text-[#dc3545]">3)Expert Q&A:</span>  Get answers to your key questions from our experienced team.</li>
                        </ul>

                        <p className={`${styles["what-description"]} text-semi-white mt-[30px] font-opensans`}>
                            Our Social Media Audit Services optimize your campaigns through targeted keyword research, enhanced product listings, and refined ad strategies. By aligning keywords with audience interests, optimizing product descriptions and visuals, and fine-tuning ad targeting, we help boost engagement, increase conversions, and maximize ROI on your ad spend.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatSection;
