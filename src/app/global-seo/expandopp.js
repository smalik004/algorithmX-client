    import React from 'react';
    import styles from '../seoaudits/style.module.css'


    const GlobalStrategy = () => {
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8  flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
            {/* Left Section with Images */}
            <div className={`md:w-1/2 flex flex-col gap-4 ${styles["opp"]} `}>
            {/* Top Row with Two Images */}
            <div className="flex gap-4">
                {/* First Image */}
                <div className="w-1/2">
                <img
                    src="images/global1.webp"
                    alt="SEO Team Meeting"
                    className="rounded-lg w-full h-[224px] object-cover"
                />
                </div>
                
                {/* Second Image */}
                <div className="w-1/2">
                <img
                    src="images/global2.webp"
                    alt="SEO Strategy Diagram"
                    className="rounded-lg w-full h-[202px] object-cover mt-3"
                />
                </div>
            </div>
            
            {/* Bottom Image - Full Width */}
            <div className="w-full flex justify-center items-center">
                <img
                src="images/global3.webp"
                alt="SEO Analytics"
                className="rounded-lg w-full h-[251px] object-cover"
                />
            </div>
            </div>

            {/* Right Section with Content */}
            <div className={`md:w-1/2 flex flex-col justify-center ${styles["opp"]}`}>
            <div className={`text-[12.8px] leading-[1.1] mb-[6px] font-[400] font-helveticaneue text-[#f857a6] `}>KEY POINT</div>
            <h1 className={`text-[30.4px] leading-[1.25] mb-6 mt-2 font-[400] font-helveticaneue text-white `}>
            Expand Your Reach Worldwide and Connect with Customers Across Borders
            </h1>
            <p className={`text-[15px] leading-[24px]  font-[400] font-helveticaneue text-semi-white mb-[20px] `}>
            From multilingual content to geotargeted keyword strategies, our full-service international SEO agency ensures your 
            website is optimized to succeed in any country, any language, on any device.
            </p>
            <p className={`text-[15px] leading-[24px]  font-[400] font-helveticaneue text-semi-white mb-[20px] `}>
            We Speak the Language of Success.
                </p>
            <p className={`text-[15px] leading-[24px]  font-[400] font-helveticaneue text-semi-white mb-[20px] `}>
            The world is full of untapped opportunities, and if your SEO isn’t global, you're leaving massive growth on the table. 
            Our international SEO services ensure your brand ranks high across multiple countries, languages, and regions. We make sure 
            your business connects with international customers, wherever they are searching.
                </p>
            </div>
        </div>
        </div>
    );
    };

    export default GlobalStrategy;