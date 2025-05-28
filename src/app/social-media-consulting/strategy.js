    import React from 'react';
    import styles from '../social-media-audit/style.module.css'
    import { Montserrat } from 'next/font/google'

    const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "700",
    })

    const ConsultingWorthySection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            
            {/* First Section: Image Left, Text Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16">

            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img
                src="images/Social-Media-Strategy (1).webp"
                alt="Google Penguin Penalty Recovery"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 ">
                <h1 className={`${styles["what-title"]} font-helveticaneue font-[700]`}>
                Social Media Strategy
                </h1>
                <p className={`${styles["what-description"]} font-helveticaneue text-semi-white `}>
                Social media is about building trust and creating a community that engages with your brand. We design strategies that go beyond basic posts, connecting your social media efforts with your larger marketing goals. By aligning your social approach with SEO, customer service, and promotion, we keep you in sync with the latest digital trends, fostering authentic engagement that drives growth.
                </p>
            </div>

            </div>

            {/* Second Section: Image Right, Text Left */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2">
                <img
                src="images/Social-Listening (1).webp"
                alt="Google Penguin Penalty Recovery"
                className="w-full h-auto"
                />
            </div>

            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 ">
                <h1 className={`${styles["what-title"]} font-helveticaneue font-[700]`}>
                Social Listening
                </h1>
                <p className={`${styles["what-description"]} font-helveticaneue text-semi-white `}>
                Listening to your audience is key. Our social listening tools capture real-time sentiment and feedback across platforms, revealing valuable insights into how people view your brand. Our consultants don’t just monitor—they optimize campaigns based on audience interests and industry trends, positioning you at the forefront of relevant conversations.
                </p>
                <p className={`${styles["what-description"]} text-semi-white font-helveticaneue mt-[8px]`}>
                With AlgorithmX, get impactful social media consulting designed to elevate your brand. Whether you're a small business, an enterprise, or seeking offshore support, we provide expert consultation tailored to your goals.
                </p>
            </div>

            </div>

        </div>
        </div>
    );
    };

    export default ConsultingWorthySection;
