    import React from 'react';
    import { Montserrat } from 'next/font/google';
                
                const monsterfont = Montserrat({
                  subsets: ['latin'],
                  weight: '400',
                });


    const EnterpriseMarketingSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img 
                src="images/Enterprise-SEO-That-Works-in-Tandem-with-Your-Marketing-Channels.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue `}>
                Enterprise SEO That Works in Tandem with Your Marketing Channels
                </h1>
                
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                Unlock the power of integrated digital marketing. Our enterprise SEO consultants collaborate with your team to 
                develop strategies that work across all channels—from social media to content marketing and beyond. This holistic
                approach aligns SEO efforts with your brand’s voice, ensuring consistent messaging and an optimized user experience.
                By coordinating SEO with other digital touchpoints, we enhance visibility, engagement, and drive more leads and sales
                for your business.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default EnterpriseMarketingSection;