    import React from 'react';
    import { Montserrat } from 'next/font/google';
                    
                    
                    const monsterfont1 = Montserrat ({
                    subsets : ["latin"],
                    weight :"300",
                    })

    const PenguinSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 ">
                <h1 className={`text-[48px] leading-[52px] mb-[30px] ${monsterfont1.className}  md:text-start text-center`}>
                Google Penguin Penalty Recovery
                </h1>
                <p className="text-[16px] leading-[1.75rem] mb-[5px] font-[Helvetica] font-[500] text-semi-white">
                Launched in 2012, Google Penguin targets websites with spammy or manipulative backlinks that don’t align with Google’s quality guidelines. This penalty can affect either specific pages or the entire site if suspicious links dominate the backlink profile.
                </p>
                <p className="text-[16px] leading-[1.75rem] mb-[5px] font-[Helvetica] font-[500] text-semi-white">
                Our Penguin recovery strategy begins with a detailed link audit to identify and address problematic backlinks, including:
                </p>

                {/* List of Points */}
                <ul className="">
                {[
                    'Over-optimized anchor text',
                    'Low-quality links',
                    'Comment spam links',
                    'Spun article links',
                    'Site-wide links',
                    'Reciprocal links',
                    'Template and widget links',
                    'Paid links',
                ].map((point, index) => (
                    <li key={index} className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-semi-white rounded-full flex-shrink-0 mt-3"></div>
                    <span className="text-[16px] leading-[1.75rem]  font-[Helvetica] font-[500] text-semi-white">{point}</span>
                    </li>
                ))}
                </ul>
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img
                src="images/Google-Penguin-Penalty-Recovery.webp"
                alt="Google Penguin Penalty Recovery"
                className="w-full h-auto"
                />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default PenguinSection;
