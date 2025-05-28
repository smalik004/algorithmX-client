    import React from 'react';
    import { Montserrat } from 'next/font/google';
            
            const monsterfont = Montserrat({
              subsets: ['latin'],
              weight: '400',
              fallback: ["sans-serif"],
            });
    const   TechnicalLeaveSection = () => {
    return (
        <div className=" bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img 
                src="images/Technical-SEO-Audit.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue `}>
                Leave No Stone Unturned with a Comprehensive Technical SEO Audit
                </h1>
                
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                Our technical SEO services are designed to elevate your website's performance. We start with a brief consultation to understand your
                goals, followed by a detailed technical SEO audit covering site speed, crawlability, mobile usability, and more. Based on our 
                findings, we create a custom strategy to address your unique needs, whether it's enhancing mobile performance or recovering from
                penalties. Our technical SEO agency then executes this plan with precision, keeping you informed through regular updates. 
                As a trusted technical SEO audit consultancy in the USA, we deliver measurable results with expertise in SEO technical audits
                and optimization.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default TechnicalLeaveSection;