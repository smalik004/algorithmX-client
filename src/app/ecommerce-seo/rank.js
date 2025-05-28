    import React from 'react';
     import { Montserrat } from 'next/font/google';
     import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
        
        const monsterfont = Montserrat({
          subsets: ['latin'],
          weight: '400',
          fallback: ['sans-serif'],
        });
    

    const EcommerceRankSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img 
                src="images/Entire Product Line.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] font-helveticaneue mb-[10px] `}>
                Rank Your Entire Product Line
                </h1>
                
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                Whether you’re searching for the best eCommerce SEO company or 
                looking for affordable eCommerce SEO services, we’ve got the right strategy for you.
                </p>

                <div className="py-6">
  <div className="grid grid-cols-3 items-start ">
    {/* 1/3 Section */}
    <div className="col-span-1 flex justify-start">
      <span className={` text-[45px] md:text-[56px] leading-[1] font-[800] font-helveticaneue text-[#DD9933]`}>44%</span>
    </div>
    {/* 2/3 Section */}
    <div className="col-span-2">
      <span className={` text-[16px] md:text-[21.6px] leading-[1.1] font-[400] font-helveticaneue text-[#DD9933]`}>
      of consumers begin product discovery with a search engine.
      </span>
    </div>
  </div>
</div>

                <div className="">
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                Got a massive inventory? No problem. We optimize every product, 
                ensuring that no matter what your customers are searching for, they find you first.
                </p>
                <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
                From eCommerce SEO consultants to affordable eCommerce SEO services, 
                we know how to rank your products across multiple search engines.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default EcommerceRankSection;