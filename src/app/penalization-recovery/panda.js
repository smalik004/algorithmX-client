    import React from 'react';
    import { Montserrat } from 'next/font/google';
                
                
                const monsterfont1 = Montserrat ({
                subsets : ["latin"],
                weight :"700",
                })

    const PenalizationSection = () => {
    return (
        <div className=" bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/3">
                <img 
                src="images/Google-Panda-Penalty-Recovery.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-2/3 ">
                <h1 className={`text-[36px] leading-[42px] mb-[30px] ${monsterfont1.className} md:text-start text-center`}>
                Google Panda Penalty Recovery
                </h1>
                
                <p className="text-[16px] leading-[1.5rem] mb-[20px] font-[Helvetica] font-[500] text-semi-white">
                Google Panda, introduced in 2011, targets sites with low-quality or duplicate content, often resulting in significant ranking and traffic drops. This algorithm penalizes sites immediately upon detecting duplicate content, which can cause an overnight decline in visibility.
                </p>
                <p className="text-[16px] leading-[1.5rem] mb-[0.25rem] font-[Helvetica] font-[500] text-semi-white">
                Our approach to Panda recovery involves a thorough content audit to locate duplicate or low-quality content. We pinpoint any unintentional duplication, whether from external sites or internal content reuse. Our recovery strategy includes replacing duplicates with unique, high-quality content, enhancing thin pages, refining existing text, and addressing keyword stuffing. By elevating content quality across your site, we’ll help restore your rankings and safeguard against future Panda penalties.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default PenalizationSection;