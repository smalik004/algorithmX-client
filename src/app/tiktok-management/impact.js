import React from 'react';
import styles from '../social-media-audit/style.module.css'
    import { Montserrat } from 'next/font/google'
    
    const monsterfont1 = Montserrat ({
      subsets : ["latin"],
      weight :"700",
    })

    const TiktokWorthySection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

             {/* Left Section - Image */}
             <div className="w-full lg:w-1/2">
                <img
                src="images/TikTok's-Business-Impact.webp"
                alt="Google Penguin Penalty Recovery"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 ">
                <h1 className={`${styles["what-title"]} font-helveticaneue font-[700]`}>
                TikTok's Business Impact
                </h1>
                <p className={`${styles["what-description"]} font-helveticaneue text-semi-white `}>
                Stuck scrolling on TikTok without a strategy? We get it. As a TikTok marketing company, we unleash your brand's potential with engaging content, targeted growth tactics, and influencer partnerships.
                </p>
                <p className={`${styles["what-description"]} font-helveticaneue text-[#DC3545] mt-[8px]`}>
                Turn casual viewers into raving fans.
                </p>
                <p className={`${styles["what-description"]} font-helveticaneue text-[#DC3545] mt-[8px]`}>
                Reach New Audiences, Build Real Connections
                </p>
                <p className={`${styles["what-description"]} font-helveticaneue text-semi-white mt-[8px]`}>
                TikTok’s got the viral magic. It’s where brands go big and make real connections with millions. Our tiktok marketing agency helps you ride the wave, grow your squad, and turn followers into superfans!
                </p>
            

            </div>

            </div>
        </div>
        </div>
    );
    };

    export default TiktokWorthySection;
