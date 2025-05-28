import React from 'react';
import { Montserrat } from 'next/font/google';


const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback : ["sans-serif"],
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

const RemarketingBenefits = () => {
  const benefits = [
    {
      imageSrc: '/images/9.png',
      title: 'Increase brand exposure',
      description:
        "The more businesses expose their brands to potential customers, the more likely they are to convert them.",
    },
    {
      imageSrc: '/images/Increase-your-ROI.webp',
      title: 'Increase your ROI',
      description:
        'Bring customers back for cheaper than the initial acquisition. Remarketing is a perfect compliment to your ongoing marketing efforts.',
    },
    {
      imageSrc: '/images/Expand-your-reach.webp',
      title: 'Expand your reach',
      description:
        'Regardless of where they heard about you initially - remarketing can reach them on Google, Bing, Facebook, Instagram, LinkedIn, and much more!',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
      <div className="max-w-[1200px] mx-auto">
      <div className="text-center  relative pt-20 w-full">
        {/* Main titles */}
        <div className="relative z-10 mt-8">
          <h2 className={`text-[64px] leading-[70px] ${monsterfont1.className}  text-white `}>
          BNEFITS OF REMARKETING
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

export default RemarketingBenefits;
