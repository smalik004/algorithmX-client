    import React from 'react';
    import { Montserrat } from 'next/font/google';
        
        const monsterfont = Montserrat({
          subsets: ['latin'],
          weight: '400',
          fallback: ["sans-serif"],
        });


    const   LinkBuildingSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img 
                src="images/Why Link Building Matters for SEO.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue `}>
                Why Link Building Matters for<br/> SEO
                </h1>
                
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                In the SEO world, link building is like building bridges—each link is a bridge that connects your site to high-quality, reputable sites, telling search engines, "Hey, this website knows what it’s doing." And Google loves that.
                Two critical factors in determining your site's ranking? The quality of your content and the strength of your link building strategy. Let us help you nail both.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default LinkBuildingSection;