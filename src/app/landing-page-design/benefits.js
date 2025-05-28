import React from 'react';
import { Montserrat } from 'next/font/google';


const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '700',
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback : ["sans-serif"],
});


const BenefitsCard = ({ title, description, imageSrc }) => (
  <div className="bg-black/5 backdrop-blur-sm p-6 rounded-lg flex flex-col items-start text-start transition-transform">
    <div className="mb-4 bg-black/10 p-4 rounded-full">
      <img
        src={imageSrc}
        alt={title}
        className="w-[339px] h-[236px] object-cover rounded-md"
      />
    </div>
    <h3 className={`text-[22px] leading-[1.1] ${monsterfont.className} mt-[10px] mb-[10px]`}>{title}</h3>
    <p className={`text-[13px] leading-[2] font-helveticaneue text-semi-white`}>{description}</p>
  </div>
);

const LandingPageBenefits = () => {
  const benefits = [
    {
      imageSrc: '/images/Increase-conversions.webp',
      title: 'Increase conversions',
      description:
        "Influence visitors to take profitable actions for your business with persuasive design and messaging that align with the best landing page designs. Present the best of your business and build confidence with visitors, driving them to engage.",
    },
    {
      imageSrc: '/images/Enhance-Paid-Search-Campaigns.webp',
      title: 'Enhance Paid Search Campaigns',
      description:
        'Improve conversion rates and generate more leads by optimizing your landing page design to align with your paid search efforts.',
    },
    {
      imageSrc: '/images/Tailored-to-Your-Audience.webp',
      title: 'Tailored to Your Audience',
      description:
        'As your creative landing page design company, we use data and experience to hyper-target communication, driving users to act. Your landing page design will be tailored to your goals and designed to exceed your expectations.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
      <div className="max-w-[1200px] mx-auto">
      <div className="text-center  relative pt-20 w-full">
        {/* Main titles */}
        <div className="relative z-10 mt-8">
          <h2 className={`text-[64px] leading-[70px] ${monsterfont1.className}  text-white `}>
          Benefits of Landing<br/> Page Design
          </h2>
        </div>
      </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${
                    index === 1 || index === 2 ? 'md:border-l border-gray-700' : ''
                  }`}
              >
                <BenefitsCard
                  imageSrc={benefit.imageSrc}
                  title={benefit.title}
                  description={benefit.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageBenefits;
