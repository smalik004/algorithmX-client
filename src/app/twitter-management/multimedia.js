    import React from 'react';
    import { Roboto } from 'next/font/google';

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const robotoFont1 = Roboto({
    subsets: ["latin"],
    weight: "300",
    fallback: ["sans-serif"],
  });
  const robotoFont2 = Roboto({
    subsets: ["latin"],
    weight: "400",
    fallback: ["sans-serif"],
  });



    const TwitterGrowHeroSection = () => {
        return (
            <div className="bg-black min-h-screen p-4">
            <div className="container max-w-[1200px] mx-auto ">
                <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-8">
                {/* Image Container */}
                <div className="w-full md:w-1/2 flex justify-center ">
                <div className="transform md:-rotate-12 ">
                    <div className="w-[320px] h-[330px] md:w-[400px] md:h-[400px]  overflow-hidden border-4 border-white ">
                    <img
                        src="images/Multimedia on X.webp"
                        alt="Network diagram showing audience connection"
                        className="w-full h-auto object-cover "
                    />
                    </div>
                </div>
                </div>
    
                {/* Text Content */}
                <div className="w-full md:w-1/2 text-white md:p-10">
                <h1 className={`${robotoFont.className} leading-[52px] tracking-[0.06em] text-[46px] mt-[20px] `}>
                
                MULTIMEDIA ON X
                    </h1>
                    <div className="w-[35px] h-[2px] bg-blue-500  mt-[35px] mb-[32px]"></div>
                    <p className={`text-[#d93]  text-[1.35rem] leading-[1] ${robotoFont2.className}`}>
                    Increase Reach & Engagement with Interactive Content
            </p>
                    <p className={`text-semi-white text-[16px] leading-[26px]  ${robotoFont1.className}`}>
                    Boost your post performance by integrating multimedia like videos and GIFs into your Twitter strategy. Interactive content grabs attention, encouraging higher engagement and shares.
                    </p>
                </div>
    
                
                
                </div>
            </div>
            </div>
        );
    };

    export default TwitterGrowHeroSection;
