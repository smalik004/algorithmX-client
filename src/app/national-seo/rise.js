    import React from 'react';
    import { Montserrat } from 'next/font/google';
                
                const monsterfont = Montserrat({
                  subsets: ['latin'],
                  weight: '400',
                  fallback: ["sans-serif"],
                });

    const NationalRiseSection  = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue `}>
                Rise through the ranks with National SEO
                </h1>

                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                AlgorithmX offers custom SEO strategies crafted to align with your business goals, industry, and audience, driving nationwide
                success. Our team uses advanced tools and proven techniques—from keyword research to technical audits—to elevate your rankings.
                With a commitment to transparent reporting, our national SEO experts provide regular updates on your site’s performance, ensuring
                you’re always informed on progress and next steps. Ready to grow your reach with SEO?
                </p>
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img
                src="images/Rise-through-the-ranks-with-National-SEO.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default NationalRiseSection;
