    import React from 'react';
    import { Montserrat } from 'next/font/google';
        
        const monsterfont = Montserrat({
          subsets: ['latin'],
          weight: '400',
          fallback : ["sans-serif"],
        });


    const   AudienceSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue font-[400] `}>
                Audience Retention
                </h1>
                
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                Due to the nature of the internet, it can become difficult to retain visitors on your website. We work to ensure your visitors are always coming back to see the latest deals and offerings. This gives you the best chance to convert them and keeps them in tune with your brand.
                </p>
            </div>
            <div className="w-full lg:w-1/2">
                <img 
                src="images/Audience-Retention.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default AudienceSection;