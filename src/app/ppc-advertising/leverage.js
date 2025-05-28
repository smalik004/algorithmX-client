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
const monsterfont2 = Montserrat({
    subsets: ["latin"],
    weight: "100",
    });

const services = [
{
    title: "Cost Effective",
    description:
    "Earning organic rankings for expensive keywords helps you better plan your advertising budget making it more efficient and enabling more exclusive advertising in different areas with our affordable PPC management services.",
    image: "images/Cost-Effective.png", // Replace with the actual path
    alt: "Consultation Icon",
},
{
    title: "An Abundance of Data",
    description:
    "AlgorithmX is the best SEM agency in USA that utilizes data from both PPC and SEO to gain a better understanding and empower a strategic approach to your marketing endeavors, ultimately resulting in more successful and effective outcomes.",
    image: "images/Abundance-of-Data.png", // Replace with the actual path
    alt: "Design Icon",
},
{
    title: "Optimizing Google Ads",
    description:
    "In our PPC management services, when SEO and PPC work together, they focus on multiple aspects of a search query, enhancing trust and increasing traffic, thus boosting the effectiveness of your marketing efforts and improving your online presence.",
    image: "images/Optimizing-Google-Ads.png", // Replace with the actual path
    alt: "Custom Development Icon",
},
];

const PPCServicesGrid = () => {
return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
        <h1
        className={`${styles["and-title"]} ${monsterfont1.className} text-center`}
        >
    Leverage <br/>  <span className={` ${monsterfont2.className}`} > PPC and SEO</span>
    </h1>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  pt-[4rem]">
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

export default PPCServicesGrid;
