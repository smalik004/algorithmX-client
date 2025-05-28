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

    const IntegrationBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Focus-on-What Matters.webp',
        title: 'Custom-Tailored Integration for Business Success',
        description:
            'We don’t just integrate systems; we craft bespoke solutions designed to meet your specific business needs. By aligning integration strategies with your goals, Copper Digital ensures scalability, agility, and the seamless flow of data that drives long-term success.',
        },
        {
        imageSrc: '/images/Search-Rankings.webp',
        title: 'Deep Industry Knowledge for Accelerated Results',
        description:
            'With over 14 years of expertise, Copper Digital brings proven success in deploying integration solutions across diverse industries. Whether it’s healthcare, logistics, finance, or manufacturing, our experience accelerates results, enhances operational efficiency, and drives strategic growth.',
        },
        {
        imageSrc: '/images/Maximize-Your-ROI.webp',
        title: 'Future-Proof Solutions Built for Tomorrow’s Needs',
        description:
            "We leverage cutting-edge technologies and best practices to ensure that your integration solutions not only meet today's requirements but are also prepared for future challenges. Copper Digital’s solutions are designed with scalability, security, and innovation in mind, setting your business up for long-term success in an ever-evolving digital landscape.",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-4 relative pt-20 pb-8 w-full">
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-[46px] md:text-[100px] leading-[1.1] ${monsterfont.className} text-gray-600/20 select-none`}>
            WHY CHOOSE 
          </span>
        </div>

        {/* Main titles */}
        <div className="relative z-10 mt-8">
          <h2 className={`text-[40px] leading-[48px] ${monsterfont2.className}  text-white `}>
            OUR INTEGRATION
          </h2>
          <h3 className={`text-[40px] leading-[48px] ${monsterfont1.className}  text-white `}>
            MIDDLEWARE SERVICES
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

    export default IntegrationBenefits;
