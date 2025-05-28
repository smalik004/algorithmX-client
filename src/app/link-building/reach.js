    import React from 'react';
    import styles from '../seoaudits/style.module.css';


    const LinkStrategy = () => {
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
                    src="images/link1.webp"
                    alt="SEO Team Meeting"
                    className="rounded-lg w-full h-[224px] object-cover"
                />
                </div>
                
                {/* Second Image */}
                <div className="w-1/2">
                <img
                    src="images/link2.webp"
                    alt="SEO Strategy Diagram"
                    className="rounded-lg w-full h-[202px] object-cover mt-3"
                />
                </div>
            </div>
            
            {/* Bottom Image - Full Width */}
            <div className="w-full flex justify-center items-center">
    <img
        src="images/link3.webp"
        alt="SEO Analytics"
        className="rounded-lg w-[495px] h-[251px] object-cover"
    />
</div>

            </div>

            {/* Right Section with Content */}
            <div className={`md:w-1/2 flex flex-col justify-center ${styles["opp"]}`}>
            <div className={`text-[12.8px] leading-[1.1] mb-[6px] font-[400] font-helveticaneue text-[#f857a6] `}>KEY POINT</div>
            <h1 className={`text-[30.4px] leading-[1.25] mb-6 mt-2 font-[400] font-helveticaneue text-white `}>
            Maximize Your Reach with Comprehensive Link Building Services
            </h1>
            <p className={`text-[15px] leading-[24px] mb-[6px] font-[400] font-helveticaneue text-semi-white `}>
            Every business is unique, and we believe your link-building strategy should be too. That’s why we create custom link-building
            campaigns designed specifically for your goals—no generic templates here. Our approach helps you grow your authority, boost
            your rankings, and keep the momentum going. Our organic SEO team covers every aspect of link building to strengthen your online 
            presence. Our services include:
            </p>
            <p className={`text-[15px] leading-[24px] mb-[6px] font-[400] font-helveticaneue text-semi-white `}>
            Steering businesses toward growth with targeted link strategies.
            </p>
            <p className={`text-[15px] leading-[24px] mb-[6px] font-[400] font-helveticaneue text-semi-white `}>
            Submitting sites to reputable local directories, tailored by city and state.
            </p>
            <p className={`text-[15px] leading-[24px] mb-[6px] font-[400] font-helveticaneue text-semi-white `}>
            Securing links from trusted, relevant websites.
            </p>
            <p className={`text-[15px] leading-[24px] mb-[6px] font-[400] font-helveticaneue text-semi-white `}>
            Transforming data into visuals for easy sharing with your target audience.
            </p>
            </div>
        </div>
        </div>
    );
    };

    export default LinkStrategy;