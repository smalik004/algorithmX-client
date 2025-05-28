    import React from 'react';
    import { Montserrat } from 'next/font/google';
            
            const monsterfont = Montserrat({
              subsets: ['latin'],
              weight: '400',
              fallback: ["sans-serif"],
            });

    const LinkTrafficSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue `}>
                Drive Traffic from Targeted Referrals and Keyword Optimization
                </h1>
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                Want to build your website’s credibility, boost your rankings, and drive more traffic? Our expert link building services do exactly that—no shortcuts, just real, impactful results that elevate your brand.
                As an SEO link building company, AlgorithmX’s strengthen your site’s domain authority and climb the ranks on Google.
                </p>

                <div className="py-6">
                <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4">
                    {/* 1/3 Section */}
                    <div className="col-span-1 flex justify-center">
                    <span className={`text-[45px] md:text-[56px] leading-[1] font-[800] font-helveticaneue text-[#DD9933]`}>100K+</span>
                    </div>
                    {/* 2/3 Section */}
                    <div className="col-span-1 md:col-span-2">
                    <span className={`text-[16px] md:text-[21.6px] leading-[1.1] font-[400] font-helveticaneue text-[#DD9933]`}>
                        backlinks acquired for our clients
                    </span>
                    </div>
                </div>
                </div>
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                With over 100K high-quality backlinks already secured for our clients, we’re not slowing down anytime soon. Whether you’re after white hat link-building services or outreach solutions, we’ve got the tools, expertise, and passion to get you the results you need. Let’s build your site’s authority and drive the traffic you deserve.
                </p>
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2">
                <img
                src="images/Drive Traffic.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default LinkTrafficSection;
