    import React from 'react';
    import styles from '../social-media-audit/style.module.css'
    import { Montserrat } from 'next/font/google'
    
    const monsterfont1 = Montserrat ({
      subsets : ["latin"],
      weight :"700",
      fallback: ["sans-serif"],
    })

    const BusinessSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8">

             {/* Left Section - Image */}
             <div className="w-full lg:w-1/2">
                <img
                src="images/Your-Business-on-the-World’s-Biggest-Social-Network.webp"
                alt="Google Penguin Penalty Recovery"
                className="w-full h-auto"
                />
            </div>

            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-4">
                <h1 className={`${styles["what-title"]} font-helveticaneue font-[400]`}>
                Your Business on the World’s Biggest Social Network
                </h1>
                <p className={`${styles["what-description"]} font-helveticaneue text-semi-white mt-[30px]`}>
                As the top choice for B2C marketers and a leading platform for B2B connections, Facebook provides businesses with an unparalleled opportunity to reach and engage their audience. With expert Facebook management services from AlgorithmX, your brand can build a loyal following and get in front of your audience consistently with tailored, impactful content in their News Feeds.
                </p>
                <p className={`${styles["what-description"]} font-helveticaneue text-semi-white mt-[30px]`}>
                At AlgorithmX, our expert Facebook management services are a core part of a comprehensive social media strategy. Our cross-channel digital marketing experts elevate your brand’s presence, optimizing each campaign and every social media platform to drive growth, engagement, and lasting connections.
                </p>


            </div>

            </div>
        </div>
        </div>
    );
    };

    export default BusinessSection;
