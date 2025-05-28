    import React from 'react';
    import { Montserrat } from 'next/font/google';
    import styles from "../android-app/style.module.css";

    const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "400",
    });
    const monsterfont = Montserrat({
    subsets: ["latin"],
    weight: "300",
    });
    const monsterfont3 = Montserrat({
        subsets: ["latin"],
        weight: "700",
        });

    const services = [
    {
        title: "Enhance Lead Generation",
        description:
        "AlgorithmX provides top on-page and off-page SEO services where we enhance your website’s SEO which in turn boosts your brand’s visibility, trust, and credibility within your targeted audience as they conduct online searches, earning gratitude of your sales team.",
        image: "images/Enhance-Lead-Generation.png", // Replace with the actual path
        alt: "Consultation Icon",
    },
    {
        title: "Outrank Your Competitors",
        description:
        "Our experienced SEO professionals deliver the best SEO services for small businesses by performing meticulous keyword research, often uncovering opportunities that your competitors missed. When effective SEO is combined with high-quality content, it leads to exceptional results.",
        image: "images/Outrank-Your-Competitors.png", // Replace with the actual path
        alt: "Design Icon",
    },
    {
        title: "Increase Website Traffic",
        description:
        "When your business does well, it should be in the spotlight. More visitors to your website mean more clicks, which result in increased traffic, translating into enhanced sales chances and increased revenue with our search engine optimization services.",
        image: "images/Increase-Website-Traffic.png", // Replace with the actual path
        alt: "Custom Development Icon",
    },
    ];

    const ServicesGrid = () => {
    return (
        <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
            <h1
            className={`${styles["and-title"]} ${monsterfont1.className} text-center`}
            >
        Essential SEO
        </h1>
            <h2
            className={`${styles["and-title"]} ${monsterfont3.className} text-center mb-12`}
            >
            Strategy Benefits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <div
                key={index}
                className="bg-black hover:bg-[rgba(255,255,255,0.1)]   group transition-colors duration-1000 ease-in-out flex flex-col items-center text-center space-y-4"
                style={{
                  borderRadius: "15px",
                  padding: "30px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <div className="flex justify-center items-center">
                    <img
                    src={service.image}
                    alt={service.alt}
                    className="h-[50px] w-[50px] object-contain rounded-lg"
                    />
                </div>
                <h3
                className={`text-[24px] font-[600] my-[20px] font-helveticaneue transition-colors duration-300`}
            >
                    {service.title}
                </h3>
                <p
                className={`text-semi-white text-[14px] font-helveticaneue transition-colors duration-300`}
            >
                    {service.description}
                </p>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    };

    export default ServicesGrid;
