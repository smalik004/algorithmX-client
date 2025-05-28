import React from 'react';
import styles from '../social-media-audit/style.module.css'
import './square.css'
import { Montserrat } from 'next/font/google'

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"700",
  fallback : ["sans-serif"],
})

const WhatSection = () => {
    return (
        <div className="bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="container max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Left Section - Image */}
                    <div className="w-full lg:w-1/3 relative">
                        <div className="relative">
                            <img
                                src="images/Google-Ads-suspension.webp"
                                alt="Local SEO visualization showing map interface across devices"
                                className="w-auto h-auto"
                            />
                            <div className="square"></div>
                        </div>
                    </div>

                    {/* Right Section - Content */}
                    <div className="w-full lg:w-2/3 ">
                        <h1 className={`${styles["what-title"]} ${monsterfont1.className}`}>
                        What is Google Ads suspension?
                        </h1>

                        <p className={`${styles["what-description"]} font-helveticaneue text-semi-white  mt-[30px]`}>
                        Google Ads suspension is a temporary pause on your online ads due to policy violation. If your ads break rules, like promoting inappropriate content, they won't be shown. But no stress – follow Google's guidelines to resolve issues and get your ads back up. We're here to cover all account suspension reactivation and ensure a safe and fair online experience for everyone!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatSection;