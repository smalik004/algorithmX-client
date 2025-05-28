import React from 'react';
import styles from '../social-media-audit/style.module.css'
    import { Montserrat } from 'next/font/google'
    
    const monsterfont1 = Montserrat ({
      subsets : ["latin"],
      weight :"300",
      fallback : ["sans-serif"],
    })

    const LandingSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

             {/* Left Section - Image */}
            <div className="w-full lg:w-1/2 space-y-4">
                <h1 className={`text-[46px] leading-[48px]  md:text-[64px] md:leading-[68px] text-center md:text-start ${monsterfont1.className}`}>
                Attract the right customer with the right message
                </h1>
                <p className={`${styles["what-description"]} font-helveticaneue text-semi-white mt-[30px]`}>
                We design landing pages that convert. With a deep understanding of ad formats and design principles, our landing page design services align perfectly with your marketing goals. As one of the best landing page design specialists, we focus on turning visitors into leads and leads into customers.
                </p>
            

            </div>
            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2">
                <img
                src="images/Attract-the-right-customer-with-the-right-message.webp"
                alt="Google Penguin Penalty Recovery"
                className="w-full h-auto"
                />
            </div>

            </div>
        </div>
        </div>
    );
    };

    export default LandingSection;
