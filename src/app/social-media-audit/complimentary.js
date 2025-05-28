    import React from 'react';
    import styles from './style.module.css'
    import { Montserrat } from 'next/font/google';
    
        const monsterfont = Montserrat({
          subsets: ["latin"],
          weight: "300",
          fallback: ["sans-serif"],
        });

    const ComplimentarySection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`${monsterfont.className} text-[36px] md:leading-[68px] leading-[54px] md:text-[64px]`}>
                Complimentary Social Audit
                </h1>
                <p className={`${styles["what-description"]} font-helveticaneue text-semi-white`}>
                Is your social media strategy hitting the mark? Our social media audit services help you identify opportunities, cut inefficiencies, and drive better results.
                </p>
                <p className={`${styles["what-description"]} font-helveticaneue text-semi-white`}>
                A social media audit is more than a simple checkup; it’s a complete strategy designed to enhance your brand’s online presence, boost engagement, and increase conversions.
                </p>
                <p className={`${styles["what-description"]} font-helveticaneue text-semi-white`}>
                We boost your brand’s presence across platforms by refining your strategy and increasing ad visibility.
                </p>
                <p className={`${styles["what-description"]} font-helveticaneue text-semi-white`}>
                We’ll help turn clicks into customers by optimizing every part of your social media presence. From visuals to CTAs, expect to see a noticeable lift in conversions and sales.
                </p>
                <p className={`${styles["what-description"]} font-helveticaneue text-semi-white`}>
                Our audit streamlines your campaigns and ad spend, ensuring maximum performance and a better return on investment.
                </p>


            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img
                src="images/complimentary-img.webp"
                alt="Google Penguin Penalty Recovery"
                className="w-full h-auto"
                />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default ComplimentarySection;
