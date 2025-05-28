    import React from 'react';
    import { Montserrat } from 'next/font/google';
            
            const monsterfont = Montserrat({
              subsets: ['latin'],
              weight: '400',
              fallback: ["sans-serif"],
            });


    const GlobalReachSection  = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue `}>
                Ready to Go Global? Let’s Make It Happen.
                </h1>

                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                Why stop at local when you can dominate globally? Our international SEO specialists help you expand your reach, boost your
                brand’s international visibility, and drive revenue in new markets with our expert Global SEO services. Whether you’re
                looking for an international SEO agency or looking to fine-tune your current strategy, AlgorithmX is here to get you where
                you need to be.
                </p>
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img
                src="images/Ready-to-Go-Global-Let-Make-It-Happen.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default GlobalReachSection;
