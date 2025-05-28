    import React from 'react';
import styles from '../social-media-audit/style.module.css'
    import { Montserrat } from 'next/font/google'
    
    const monsterfont1 = Montserrat ({
      subsets : ["latin"],
      weight :"700",
    })

    const InstagramWorthySection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">

             {/* Left Section - Image */}
             <div className="w-full lg:w-1/2">
                <img
                src="images/An-Insta-worthy-Social-Platform.webp"
                alt="Google Penguin Penalty Recovery"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-1">
                <h1 className={`${styles["what-title"]} font-helveticaneue font-[400]`}>
                An Insta-worthy Social Platform
                </h1>
                <p className={`${styles["what-description"]} text-semi-white mt-[30px] font-helveticaneue`}>
                Unlocking the power of Instagram can elevate your brand’s visibility, thanks to its engaged communities and intuitive mobile experience. As an Instagram Marketing & Management Company, we specialize in Instagram social media marketing to drive impressive results through targeted ads, stories, and strategic content. With the guidance of our expert team, your brand can reach new audiences and amplify its online presence effectively
                </p>
            

            </div>

            </div>
        </div>
        </div>
    );
    };

    export default InstagramWorthySection;
