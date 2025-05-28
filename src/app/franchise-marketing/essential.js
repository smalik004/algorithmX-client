import React from 'react';
import styles from '../social-media-audit/style.module.css'
import { Montserrat } from 'next/font/google'

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"700",
})

const EssentialSection = () => {
return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 ">

         {/* Left Section - Image */}
         <div className="w-full lg:w-1/2 ">
            <img
            src="images/franchise-SEO-services-570x388-last.webp"
            alt="Google Penguin Penalty Recovery"
            className="w-full h-auto "
            />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 max-w-[43.875rem] mx-auto px-[2rem] ">
            <h1 className={`text-[35.2px] font-helveticaneue font-[600] leading-[1.08] mb-[1.8125rem] `}>
            Franchise SEO: an essential key to operate thriving multi-location businesses
            </h1>
            <p className={`text-[16px] leading-[25px] font-helveticaneue text-semi-white `}>
            Top franchises are implementing Search Engine Marketing (SEO) to maximize their potential in this age of technology. Stay ahead of them and match your franchise with those innovatively using SEO to improve their business operations with the help of our franchise digital marketing agency.
            </p>
            <p className={`text-[16px] leading-[25px] font-helveticaneue text-semi-white mt-[30px]`}>
            Search Engine Optimization strategies have yielded profits of more than $58,000 per location for U.S commercial enterprises. Focusing on optimizing and managing your Google My Business Account is essential because 50% of Google users look for local information.
            </p>


        </div>

        </div>
    </div>
    </div>
);
};

export default EssentialSection;
