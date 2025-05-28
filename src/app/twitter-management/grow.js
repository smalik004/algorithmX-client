import React from 'react';
import styles from '../social-media-audit/style.module.css'
import { Montserrat } from 'next/font/google'

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"700",
  fallback : ["sans-serif"],
})

const TwitterBusinessSection = () => {
return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

         {/* Left Section - Image */}
         <div className="w-full lg:w-1/2">
            <img
            src="images/Grow-Your-Business-with-Tweets.webp"
            alt="Google Penguin Penalty Recovery"
            className="w-full h-auto"
            />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 ">
            <h1 className={`${styles["what-title"]} font-helveticaneue font-[700]`}>
            Grow Your Business with Tweets
            </h1>
            <p className={`${styles["what-description"]} font-helveticaneue text-semi-white`}>
            Tired of scrolling through endless Twitter feeds without making a dent? Maximize your brand’s visibility, engagement, and growth with tailored Twitter social media management services. Let our Full-Service Twitter Management team craft a personalized Twitter strategy that sets your brand apart.
            </p>
            <p className={`${styles["what-description"]} font-helveticaneue text-semi-white mt-[2px]`}>
            X allows you to share impactful, engaging content with millions of users. Our dedicated team helps you craft posts that resonate, driving traffic to your website and increasing conversions. By developing a unique brand voice, you’ll attract a loyal audience and foster community engagement.
            </p>

        </div>

        </div>
    </div>
    </div>
);
};

export default TwitterBusinessSection;
