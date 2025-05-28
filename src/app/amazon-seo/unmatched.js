    import React from 'react';
    import { Montserrat } from 'next/font/google';
                    
                    const monsterfont = Montserrat({
                      subsets: ['latin'],
                      weight: '400',
                      fallback: ["sans-serif"],
                    });


    const AmazonMarketingSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img 
                src="images/local-seo-audience-1.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue `}>
                Unmatched Amazon SEO & Listings Optimization
                </h1>
                
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                Your product listings are key to driving sales success on Amazon. As a leading Amazon SEO agency, we offer comprehensive Amazon SEO services that enhance visibility and boost conversion rates. With a dedicated Amazon SEO expert focused on your account, we ensure every listing is fully optimized for maximum exposure. Our approach goes beyond advertising, tapping into Amazon’s search algorithms to improve organic rankings. Just like with other search engines, a strategic SEO plan elevates your products to the top of search results. Partner with us to maximize your Amazon presence and drive substantial growth.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default AmazonMarketingSection;