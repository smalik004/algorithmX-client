import React from 'react';
import styles from '../social-media-audit/style.module.css'
import { Montserrat } from 'next/font/google'

const monsterfont1 = Montserrat({
subsets: ["latin"],
weight: "700",
})

const ConsultingStayingSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            
            {/* First Section: Image Left, Text Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16">

            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img
                src="images/Staying-Relevant.webp"
                alt="Google Penguin Penalty Recovery"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 ">
                <h1 className={`${styles["what-title"]} font-helveticaneue font-[700]`}>
                Staying Relevant
                </h1>
                <p className={`${styles["what-description"]} font-helveticaneue text-semi-white `}>
                Your brand speaks a unique language on each social platform, and each platform has its own community. Through website audits and competitor analysis, we assess your brand’s position, ensuring it stays top-of-mind. Social media moves fast, and so do customer expectations. With countless brands vying for attention, relevance is crucial. We elevate your brand by connecting you with the right micro- and macro-influencers to expand reach, boost awareness, and drive conversions. Our strategists keep your multi-channel presence fresh, engaging, and aligned with evolving trends.
                </p>
            </div>

            </div>

            {/* Second Section: Image Right, Text Left */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2">
                <img
                src="images/Evolving-Campaigns.webp"
                alt="Google Penguin Penalty Recovery"
                className="w-full h-auto"
                />
            </div>

            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 ">
                <h1 className={`${styles["what-title"]} font-helveticaneue font-[700]`}>
                Evolving Campaigns
                </h1>
                <p className={`${styles["what-description"]} text-semi-white font-helveticaneue`}>
                Social media thrives on flexibility. Our experts track platform updates and emerging trends to adapt your strategy as audience expectations shift. We continuously test new approaches and refine content to keep engagement high. Working with AlgorithmX means your strategy and goals grow seamlessly with the dynamic social landscape—ensuring your brand stays relevant and the conversation stays alive.
                </p>
                
            </div>

            </div>

        </div>
        </div>
    );
};

export default ConsultingStayingSection;
