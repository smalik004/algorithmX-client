import React from 'react';
import { Montserrat } from 'next/font/google';


const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ['sans-serif'],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '100',
  fallback: ['sans-serif'],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
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
    <h3 className={`text-[22px] leading-[1.1] ${monsterfont2.className} mt-[10px] mb-[10px]`}>{title}</h3>
    <p className={`text-[13px] leading-[2] font-helveticaneue text-semi-white`}>{description}</p>
  </div>
);

const EcommerceSEOBenefits = () => {
  const benefits = [
    {
      imageSrc: '/images/Attract-High-Value-Shoppers.webp',
      title: 'Attract High-Value Shoppers',
      description:
        'Let’s face it—your ideal customers are out there, ready to spend. But without SEO, they might never know you exist. Our advanced eCommerce SEO services put your store in front of these high-value shoppers, so they can’t help but click “Buy Now.”',
    },
    {
      imageSrc: '/images/Maximize-Your-Online-Visibility.webp',
      title: 'Maximize Your Online Visibility',
      description:
        'There’s no glory in being buried on page 2 of Google. We’ll push you to the coveted front page, making sure your site is *easily* found. Ranking Keywords won’t just get you noticed—they’ll get you conversions.',
    },
    {
      imageSrc: '/images/SEO-is-Cost-Effective-Marketing.webp',
      title: 'SEO is Cost-Effective Marketing',
      description:
        'Traditional marketing is expensive, but with affordable eCommerce SEO, we get you long-term, sustainable results without the hefty price tag. Focus on ranking for the search terms your customers are already using, and watch your ROI soar. SEO close rates are almost 15%, compared to the measly 1.7% of traditional marketing. That means more sales, more conversions, and more revenue for your business over time.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
      <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-4 relative pt-20 pb-8 w-full">
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-[46px] md:text-[100px] leading-[1.1] ${monsterfont.className} text-gray-600/20 select-none`}>
            BENEFITS
          </span>
        </div>

        {/* Main titles */}
        <div className="relative z-10 mt-8">
          <h2 className={`text-[40px] leading-[48px] ${monsterfont1.className}  text-white `}>
            OF
          </h2>
          <h3 className={`text-[40px] leading-[48px] ${monsterfont1.className}  text-white `}>
            ECOMMERCE SEO
          </h3>
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

export default EcommerceSEOBenefits;
