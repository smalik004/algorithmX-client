    import React from 'react';
    import { Montserrat } from 'next/font/google';
        
        const monsterfont = Montserrat({
          subsets: ['latin'],
          weight: '400',
          fallback: ['sans-serif'],
        });


    const ConsultingSolutionSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue `}>
                Comprehensive SEO Solutions for Every Business
                </h1>

                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                Whether you're looking for an enterprise SEO consultant or need support as a small business SEO consultant,
                our team designs strategies to meet your goals. As a prominent SEO consulting company in USA, we offer both
                local SEO and international SEO consulting. Connect with a leading SEO consulting company in USA for a complimentary 
                strategy session. Whether you need comprehensive solutions or targeted local optimization, we’re here to support your success.
                </p>
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img
                src="images/SEO-Solutions-for-Every-Business.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default ConsultingSolutionSection;
