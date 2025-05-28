    import React from 'react';
    import styles from '../seoaudits/style.module.css'


    const AmazonStrategy = () => {
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8  flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
            {/* Left Section with Images */}
            <div className={`md:w-1/2 flex flex-col gap-4 ${styles["opp"]}`}>
            {/* Top Row with Two Images */}
            <div className="flex gap-4">
                {/* First Image */}
                <div className="w-1/2">
                <img
                    src="images/amazon1.webp"
                    alt="SEO Team Meeting"
                    className="rounded-lg w-full h-[224px] object-cover"
                />
                </div>
                
                {/* Second Image */}
                <div className="w-1/2">
                <img
                    src="images/amazon2.webp"
                    alt="SEO Strategy Diagram"
                    className="rounded-lg w-full h-[202px] object-cover mt-3"
                />
                </div>
            </div>
            
            {/* Bottom Image - Full Width */}
            <div className="w-full flex justify-center items-center">
                <img
                src="images/amazon3.webp"
                alt="SEO Analytics"
                className="rounded-lg w-full h-[251px] object-cover"
                />
            </div>
            </div>

            {/* Right Section with Content */}
            <div className={`md:w-1/2 flex flex-col justify-center ${styles["opp"]}`}>
            <div className={`text-[12.8px] leading-[1.1] mb-[6px] font-[400] font-helveticaneue text-[#f857a6] `}>KEY POINT</div>
            <h1 className={`text-[30.4px] leading-[1.25] mb-6 mt-2 font-[400] font-helveticaneue text-white `}>
            Ensure you seize every opportunity with our comprehensive Amazon SEO services.
            </h1>
            <p className={`text-[15px] leading-[24px]  font-[400] font-helveticaneue text-semi-white mb-[20px] `}>
            Maximize every opportunity with our top Amazon SEO services designed to deliver results that drive your bottom line. As a dedicated Amazon marketing agency, we focus on essential metrics that matter most for profitability, not just superficial in-platform figures. Our consultants provide a clear analysis of your Amazon marketing performance, aiming to boost total sales and profitability. With a data-driven approach, we optimize product visibility, ensuring your items appear at the top of search results for relevant keywords, which increases targeted traffic and conversion rates. By combining proven Amazon SEO tactics with PPC, we work to elevate your brand's revenue and growth on the platform. Your success on Amazon starts with the right strategy. Whether you’re a new seller or looking to take your listings to the next level, our dedicated Amazon SEO experts are here to help you achieve your goals. Let’s work together to build a winning Amazon strategy that drives traffic, sales, and long-term growth.
            </p>
            </div>
        </div>
        </div>
    );
    };

    export default AmazonStrategy;