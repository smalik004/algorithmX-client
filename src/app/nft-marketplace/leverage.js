    import React from 'react';
    import { Roboto } from 'next/font/google';

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});
const robotoFont1 = Roboto({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
    const NFTHeroSection = () => {
    return (
        <div className="bg-black min-h-screen p-4">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-8">
            {/* Image Container */}
            <div className="w-full md:w-1/2 flex justify-center ">
            <div className="transform md:-rotate-12 ">
                <div className="w-[320px] h-[330px] md:w-[400px] md:h-[400px]  overflow-hidden border-4 border-white ">
                <img
                    src="images/DETAILED-REPORT.webp"
                    alt="Network diagram showing audience connection"
                    className="w-full h-auto object-cover "
                />
                </div>
            </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 text-white md:p-6">
            <h1 className={`${robotoFont.className} leading-[52px] tracking-[0.06em] text-[46px] mt-[20px] `}>
            
            Leverage the Power of NFT Metaverse Marketplace Development
                </h1>
                <div className="w-[35px] h-[2px] bg-blue-500  mt-[35px] mb-[32px]"></div>
                <p className={`text-semi-white text-[16px] leading-[26px] ${robotoFont1.className}`}>
                Leverage the Power of NFT Metaverse Marketplace Development to build interactive, decentralized platforms where users can trade NFTs, explore virtual spaces, and engage with digital assets in real time. From 3D environments to seamless wallet integration, we deliver cutting-edge solutions for the future of the metaverse.
                </p>
            </div>

            
            
            </div>
        </div>
        </div>
    );
    };

    export default NFTHeroSection;
