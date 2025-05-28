    import React from 'react';
    import { Montserrat } from 'next/font/google';
        
        
        const monsterfont = Montserrat({
          subsets: ['latin'],
          weight: '700',
          fallback: ["sans-serif"],
        });
        const monsterfont1 = Montserrat({
          subsets: ['latin'],
          weight: '100',
          fallback: ["sans-serif"],
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

    const TechnicalBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/boost-Search-Engine.webp',
        title: 'Boost Search Engine Understanding',
        description:
            "We’ll identify the technical roadblocks that are holding back your rankings. No more guessing—just clear solutions. Our technical SEO consultant ensures your website is crystal clear to search engines, helping improve indexation and boosting your organic traffic. We audit your site and analyze your competitors. Discover what they’re missing and use it to your advantage!",
        },
        {
        imageSrc: '/images/Thorough-and-Comprehensive-Audits.webp',
        title: 'Thorough and Comprehensive Audits',
        description:
            'As your technical SEO agency, we benchmark your site against industry best practices. We ensure every link in the chain is optimized for success. From third-party backlinks to server configurations, we ensure all external factors are aligned with your technical SEO strategy.',
        },
        {
        imageSrc: '/images/Tailored-Fixes-&-Expert-Guidance.webp',
        title: 'Tailored Fixes & Expert Guidance',
        description:
            'Our full-service team of technical SEO specialists will either guide your team or step in to resolve any issues that arise.',
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
            TECHNICAL SEO AUDITS
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

    export default TechnicalBenefits;
