    import React from 'react';
    import { Montserrat } from 'next/font/google';
                    
                    const monsterfont = Montserrat({
                      subsets: ['latin'],
                      weight: '400',
                      fallback: ["sans-serif"],
                    });
    const MobileMarketingSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img 
                src="images/Optimized-for-Speed-Responsiveness-and-Crawlability.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue `}>
                Optimized for Speed, Responsiveness, and Crawlability
                </h1>
                
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                Our mobile SEO specialists focus on mobile-first strategies that enhance your site’s crawlability, responsiveness,
                and loading speed. By refining these key areas, we ensure a seamless mobile experience that keeps visitors engaged
                and maximizes conversion potential. Our Mobile SEO Agency brings years of experience and advanced tools to the table.
                From keyword optimization to technical fixes, we handle all aspects of your mobile SEO strategy to ensure your success.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default MobileMarketingSection;