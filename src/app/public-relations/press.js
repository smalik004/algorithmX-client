import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from "./styles.module.css";

const monsterfont1 = Montserrat({
subsets: ["latin"],
weight: "600",
fallback: ["sans-serif"],
});



const PublicPressSection = () => {
return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
    <div className="container max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 ">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2">
            <img 
            src="images/Press-release-distribution-570x388.webp"
            alt="Local SEO visualization showing map interface across devices"
            className="w-full h-auto"
            />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 space-y-2">
            <h1 className={`${styles["press-title"]} font-helveticaneue font-[600]`}>
            Press release distribution
            </h1>
            
            <p className={`${styles["press-description"]} font-helveticaneue text-semi-white`}>
            Are you looking to share an attention-grabbing event or announcement? Let AlgorithmX create and distribute a press release for your business with our premier online PR distribution services by getting you featured on major national and local news for reaching a wide audience, highlighting your story effectively to boost your brand recognition and trust. Don’t miss out on this chance to spread the word and establish your hold at national and local levels.
            </p>

    
        </div>
        </div>
    </div>
    </div>
);
};

export default PublicPressSection;