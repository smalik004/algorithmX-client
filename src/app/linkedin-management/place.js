import React from 'react';
import styles from '../social-media-audit/style.module.css'
import { Montserrat } from 'next/font/google'

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"700",
  fallback: ["sans-serif"],
})

const BusinessSection = () => {
return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

         {/* Left Section - Image */}
         <div className="w-full lg:w-1/2">
            <img
            src="images/The-Place-for-Professional-Networking.webp"
            alt="Google Penguin Penalty Recovery"
            className="w-full h-auto"
            />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 space-y-0">
            <h1 className={`${styles["what-title"]} font-helveticaneue font-[700]`}>
            The Place for Professional Networking
            </h1>
            <p className={`${styles["what-description"]} font-helveticaneue text-semi-white `}>
            LinkedIn is the world’s largest professional network, with over 850 million members across 200 countries. It’s the ultimate platform for building brand awareness, reaching key decision-makers, and driving revenue growth through strategic social media marketing.
            </p>
            <p className={`${styles["what-description"]} text-semi-white  font-helveticaneue`}>
            What sets LinkedIn apart is its audience: a large portion of users can directly make or influence purchasing decisions, making it the top choice for B2B marketing. Unlike other platforms, LinkedIn has a unique, business-focused language and etiquette, meaning that content here acts as a digital business card for your company.
            </p>
            <p className={`${styles["what-description"]} text-semi-white  font-helveticaneue`}>
            Our LinkedIn social media consultants understand the nuances of this platform and specialize in crafting content that resonates with your industry’s decision-makers. With tailored LinkedIn marketing services, we amplify your brand, nurturing leads through the sales funnel—from connection to conversion—by aligning LinkedIn strategies with your broader digital marketing campaigns.
            </p>



        </div>

        </div>
    </div>
    </div>
);
};

export default BusinessSection;
