    import React from 'react';
    import { Montserrat } from 'next/font/google';
                        
    const monsterfont = Montserrat({
    subsets: ['latin'],
    weight: '400',
    fallback: ["sans-serif"],
    });

    const MobileReachSection  = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue`}>
                Maximize Your Reach by Going Mobile!
                </h1>

                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                Our mobile SEO strategies are tailored for impact—no cookie-cutter solutions here. We craft clear, concise content optimized
                for mobile users, ensuring it ranks higher in search results while keeping readers engaged on the go. With a team of experienced
                mobile SEO specialists, we cover every detail, from keyword targeting to technical enhancements, so your strategy performs at its
                best. Plus, we believe in transparency; you’ll receive easy-to-understand, daily reports to track progress, keeping you informed
                every step of the way.
                </p>
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img
                src="images/Maximize-Your-Reach-by-Going-Mobile!.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default MobileReachSection;
