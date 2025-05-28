    import React from 'react';
    import { Montserrat } from 'next/font/google';
                
                const monsterfont = Montserrat({
                  subsets: ['latin'],
                  weight: '400',
                });


    const EnterpriseReachSection  = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue `}>
                Quantifying Success: KPIs and ROI in Enterprise SEO
                </h1>

                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                As a top enterprise SEO company, we prioritize metrics that drive results. Key indicators like organic traffic, keyword rankings, conversion rates, and bounce rates guide our enterprise SEO experts in refining strategies for maximum impact.
                </p>
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                When calculating ROI, we evaluate revenue from organic search, acquisition costs, and long-term customer value. Working with the best enterprise SEO agency in California, your business gains increased visibility and measurable authority in the industry—ensuring SEO investments deliver sustained growth aligned with your goals.
                </p>
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img
                src="images/KPIs-and-ROI.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default EnterpriseReachSection;
