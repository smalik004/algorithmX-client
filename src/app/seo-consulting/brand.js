    import React from 'react';
     import { Montserrat } from 'next/font/google';
        
        const monsterfont = Montserrat({
          subsets: ['latin'],
          weight: '400',
          fallback: ['sans-serif'],
        });
    

    const   ConsultingBrandSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img 
                src="images/Brandstory.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue `}>
                Craft Your Brand’s Story Through Search
                </h1>
                
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                Effective SEO goes beyond keywords and rankings. Our certified SEO consultants work closely with you to
                build a strategy that conveys your brand’s unique narrative, connecting with your audience in meaningful ways.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default ConsultingBrandSection;