    import React from 'react';
    import styles from '../seoaudits/style.module.css';


    const TechnicalStrategy = () => {
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
                    src="images/In-Depth-Technical-SEO-Audits.webp"
                    alt="SEO Team Meeting"
                    className="rounded-lg w-full h-[224px] object-cover"
                />
                </div>
                
                {/* Second Image */}
                <div className="w-1/2">
                <img
                    src="images/In-Depth-Technical-SEO-Audits-2.webp"
                    alt="SEO Strategy Diagram"
                    className="rounded-lg w-full h-[202px] object-cover mt-3"
                />
                </div>
            </div>
            
            {/* Bottom Image - Full Width */}
            <div className="w-full flex justify-center items-center">
                <img
                src="images/In-Depth-Technical-SEO-Audits-3.webp"
                alt="SEO Analytics"
                className="rounded-lg w-full h-[251px] object-cover"
                />
            </div>
            </div>

            {/* Right Section with Content */}
            <div className={`md:w-1/2 flex flex-col justify-center ${styles["opp"]}`}>
            <div className={`text-[12.8px] leading-[1.1] mb-[6px] font-[400]  font-helveticaneue text-[#f857a6] `}>KEY POINT</div>
            <h1 className={`text-[30.4px] leading-[1.25] mb-6 mt-2 font-[400]  font-helveticaneue text-white `}>
            Achieve Confidence with In-Depth Technical SEO Audits
            </h1>
            <p className={`text-[15px] leading-[24px] mb-[6px] font-[400]  font-helveticaneue text-semi-white `}>
            Our team of SEO specialists employs advanced software and proprietary tools to conduct a comprehensive 
            review of your site’s technical SEO. Every detail is analyzed to ensure optimal performance. Our technical 
            SEO audits cover:
            </p>

            {/* SEO Services Grid */}
            <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="flex items-center gap-2">
                   
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400]  font-helveticaneue text-semi-white `}>Google My Business</span>
                </div>
                <div className="flex items-center gap-2">
                   
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400]  font-helveticaneue text-semi-white `}>Meta Tags, Titles, & Headings</span>
                </div>
                <div className="flex items-center gap-2">
                   
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400]  font-helveticaneue text-semi-white `}>Content Review</span>
                </div>
                <div className="flex items-center gap-2">
                   
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400]  font-helveticaneue text-semi-white `}>Image Alt Tags & File Names</span>
                </div>
                <div className="flex items-center gap-2">
                   
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400]  font-helveticaneue text-semi-white `}>Structured Data</span>
                </div>
                <div className="flex items-center gap-2">
                   
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400]  font-helveticaneue text-semi-white `}>Compatibility Testing</span>
                </div>
                <div className="flex items-center gap-2">
                   
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400]  font-helveticaneue text-semi-white `}>SEO Friendly URLs</span>
                </div>
                <div className="flex items-center gap-2">
                   
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400]  font-helveticaneue text-semi-white `}>Sitemap Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                   
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400]  font-helveticaneue text-semi-white `}>HTTP Status Codes & Redirects</span>
                </div>
                <div className="flex items-center gap-2">
                   
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400]  font-helveticaneue text-semi-white `}>Robots.txt & .htaccess</span>
                </div>
                <div className="flex items-center gap-2">
                   
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400]  font-helveticaneue text-semi-white `}>Page Speed Analysis</span>
                </div>
                
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default TechnicalStrategy;