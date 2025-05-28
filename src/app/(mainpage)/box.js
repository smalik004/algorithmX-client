import React from 'react';
import { Montserrat } from "next/font/google";
import './style.css'


const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const ServiceCard = ({ title, description }) => (
  <div className="relative flex-1  bg-black rounded-lg min-w-[250px] overflow-visible">
    
    {/* Border container */}
    <div className="absolute inset-0  box-design"></div>
    {/* Title positioned on the border */}
    <div className="absolute -top-3 left-0 w-full flex justify-center">
      <span className={`text-[18px] leading-[22px]  ${monsterfont1.className} bg-black px-4 text-white  rounded-lg whitespace-nowrap `}>
        {title}
      </span>
    </div>
    {/* Content */}
    <div className="relative flex flex-col items-center text-center px-[50px] py-[30px] space-y-4 z-10">
      <p className={`text-[16px] leading-[26px]  font-helveticneue font-[400] text-white  p-4  `}>{description}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: 'Branding',
      description: 'Crafting unique brand identities that resonate and inspire audiences.'
    },
    {
      title: 'Graphics',
      description: 'Designing visually stunning graphics that captivate and engage viewers.'
    },
    {
      title: 'Video',
      description: "Producing compelling videos that depict your brand's story successfully."
    }
  ];

  return (
    <div className="min-h-screen content-center bg-black p-4 md:px-16">
      <div className="max-w-[1200px] mx-auto space-y-8 ">
        {/* Top row services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Content section */}
        <div className="relative p-6 bg-black box-design">
          <div className="absolute inset-0  opacity-50"></div>
          <div className="absolute -top-3 left-0 w-full flex justify-center">
            <span className={`text-[18px] leading-[22px]  ${monsterfont1.className} bg-black px-4 text-white  rounded-lg whitespace-nowrap `}>
              Content
            </span>
          </div>
          <div className="relative flex flex-col items-center text-center px-[50px] py-[10px] space-y-4 z-10">
            <p className={`text-[16px] leading-[26px]  font-helveticneue font-[400] text-white mt-4   `}>
              Offering a range of content services from content creation to writing and marketing.<br/>
              Creating top-notch content designed to attract your target audience<br/>
              and fuel business expansion resulting in increased interaction<br/>
              and enhanced brand visibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;