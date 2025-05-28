    import React from 'react';


    const ConsultingStrategy = () => {
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8  flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
            {/* Left Section with Images */}
            <div className="md:w-1/2 flex flex-col gap-4">
            {/* Top Row with Two Images */}
            <div className="flex gap-4">
                {/* First Image */}
                <div className="w-1/2">
                <img
                    src="images/consulting1.webp"
                    alt="SEO Team Meeting"
                    className="rounded-lg w-full h-[224px] object-cover"
                />
                </div>
                
                {/* Second Image */}
                <div className="w-1/2">
                <img
                    src="images/consulting2.webp"
                    alt="SEO Strategy Diagram"
                    className="rounded-lg w-full h-[202px] object-cover mt-3"
                />
                </div>
            </div>
            
            {/* Bottom Image - Full Width */}
             
            <div className="w-full flex justify-center items-center">
            <img
        src="images/consulting3.webp"
        alt="SEO Analytics"
        className="rounded-lg w-full h-[251px] object-cover"
    />
</div>
            </div>

            {/* Right Section with Content */}
            <div className="md:w-1/2 flex flex-col justify-center">
            <div className={`text-[12.8px] leading-[1.1] mb-[6px] font-[400] font-helveticaneue text-[#f857a6] `}>KEY POINT</div>
            <h1 className={`text-[30.4px] leading-[1.25] mb-6 mt-2 font-[400] font-helveticaneue text-white `}>
            Seize every opportunity with our extensive SEO consulting services.
            </h1>
            <p className={`text-[15px] leading-[24px] mb-[6px] font-[400] font-helveticaneue text-semi-white `}>
            Whether you're seeking an enterprise SEO consultant or small business SEO consultant,
            our team delivers tailored strategies that align with your goals. As a top SEO consulting
            company in USA, we provide both local and international SEO consultant services. Our SEO
            solutions cover all aspects, including:
            </p>

            {/* SEO Services Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center  ">
                 
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400] font-helveticaneue text-semi-white `}>Improving Rankings: Achieve top search engine positions with proven strategies.</span>
                </div>
                <div className="flex items-center  ">
                 
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400] font-helveticaneue text-semi-white `}>Optimizing Site Health: Fix errors and apply SEO best practices for greater visibility.</span>
                </div>
                <div className="flex items-center  ">
                 
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400] font-helveticaneue text-semi-white `}>Driving Growth: Attract more customers and increase profitability.</span>
                </div>
                <div className="flex items-center  ">
                 
                <span className={`text-[15px] leading-[24px] mb-[6px] font-[400] font-helveticaneue text-semi-white `}>Strategic Insights: Stay ahead of trends and adapt to market shifts.</span>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default ConsultingStrategy;