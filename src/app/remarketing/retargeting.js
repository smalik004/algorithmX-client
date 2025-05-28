    import React from 'react';
    import { Montserrat } from 'next/font/google';
        
        const monsterfont = Montserrat({
          subsets: ['latin'],
          weight: '400',
          fallback : ["sans-serif"],
        });


    const   RemarketingSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img 
                src="images/Retargeting-Competition-Analysis.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue font-[400] `}>
                Retargeting Competition Analysis
                </h1>
                
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                We analyze the competition to understand what they’re doing to bring their visitors back. Not only does this give us insight into new avenues to target, we can also identify holes in their plan to help you obtain a competitive advantage. By understanding the different channels they’re advertising on, we can place your brand in a competitive position while targeting the low-cost channels they aren't using with a different strategy. We continue to analyze your competition and the industry as a whole to adapt your retargeting campaign to new trends and developments.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default RemarketingSection;