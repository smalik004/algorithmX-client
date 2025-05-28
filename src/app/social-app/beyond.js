import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from "../android-app/style.module.css";

const monsterfont1 = Montserrat({
subsets: ["latin"],
weight: "100",
});
const monsterfont = Montserrat({
subsets: ["latin"],
weight: "300",
});
const monsterfont2 = Montserrat({
    subsets: ["latin"],
    weight: "700",
    });

const services = [
{
    title: "Social Media Management",
    description:
    "AlgorithmX delivers top-notch social media content creation services where we create content that establishes a bond and captures your audience’s attention, making sure it strikes a chord and sparks meaningful interactions with your clients.",
    image: "images/Social-Media-Management.png", // Replace with the actual path
    alt: "Consultation Icon",
},
{
    title: "Social Media Consulting",
    description:
    "By finding the right strategy, relative content, and apt platforms that match your goals and connect well with your audience, we bring high engagement and successful results as part of our social media marketing packages.",
    image: "images/Social-Media-Consulting.png", // Replace with the actual path
    alt: "Design Icon",
},
{
    title: "Social Media Advertising",
    description:
    "With our social media optimization services, we engage your customers efficiently and affordably making sure your marketing strategies connect with your target audience and bring ensuring positive results to your business.",
    image: "images/Social-Media-Advertising.png", // Replace with the actual path
    alt: "Custom Development Icon",
},
];

const ServicesGrid = () => { 
return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
        <h1
        className={`${styles["and-title"]} ${monsterfont1.className} text-center`}
        >
    Beyond Our Core <br/> Services
    </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-[4rem]">
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
