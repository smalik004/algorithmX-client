import React from 'react';
import styles from '../social-media-audit/style.module.css'
import { Montserrat } from 'next/font/google'

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"700",
})

const YoutubeBusinessSection = () => {
return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

         {/* Left Section - Image */}
         <div className="w-full lg:w-1/2">
            <img
            src="images/Why-Your-Company-Needs-a-YouTube-Channel.webp"
            alt="Google Penguin Penalty Recovery"
            className="w-full h-auto"
            />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 ">
            <h1 className={`${styles["what-title"]} font-helveticaneue font-[700]`}>
            Why Your Company Needs a YouTube Channel
            </h1>
            <p className={`${styles["what-description"]} font-helveticaneue  text-semi-white mt-[2px]`}>
            Join the Digital Giants with a YouTube Presence
            </p>
            <p className={`${styles["what-description"]} font-helveticaneue text-semi-white mt-[8px]`}>
            With over 122 million daily users, YouTube is a vital platform for reaching your audience. Brands like Red Bull, Old Spice, Grammarly, Patreon, and many others experienced unparalleled engagement, encouraging discussions and driving brand loyalty through YouTube. Don’t miss the opportunity to connect with a vast audience—partner with a YouTube management agency to tap into the full potential of this platform.
            </p>

        </div>

        </div>
    </div>
    </div>
);
};

export default YoutubeBusinessSection;
