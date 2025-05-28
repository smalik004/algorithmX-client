    import React from 'react';
    import { Montserrat } from 'next/font/google';
    
    const monsterfont = Montserrat({
      subsets: ['latin'],
      weight: '400',
      fallback: ['sans-serif'],
      
    });

    const LocalAudienceSection = () => {
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
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue  `}>
                Attract the appropriate local audience.
                </h1>
                
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                With AlgorithmX's Local SEO services, your business will capture high-intent, 
                ready-to-convert customers right in your area. Our expert approach boosts 
                your visibility, helping you climb to the top of local search results and 
                outperform competitors. Make it easy for customers to find you.
                </p>

                <div className="py-6">
  <div className="grid grid-cols-3 items-center gap-4">
    {/* 1/3 Section */}
    <div className="col-span-1 flex ">
      <span className={`text-[56px] leading-[1] font-[800] font-helveticaneue text-[#DD9933]`}>78%</span>
    </div>
    {/* 2/3 Section */}
    <div className="col-span-2">
      <span className={`text-[21.6px] leading-[1.1] font-[400] font-helveticaneue text-[#DD9933]`}>
      of local mobile searches result in offline purchases.
      </span>
    </div>
  </div>
</div>

                <div className="space-y-0">
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                    Don't miss out on the easiest wins—customers actively searching for your 
                    services nearby.
                </p>
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                    Looking for an affordable local SEO company that delivers? We offer 
                    solutions that fit your budget, without sacrificing quality.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default LocalAudienceSection;