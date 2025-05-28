    import React from 'react';
    import { Montserrat } from 'next/font/google';
    
    
    const monsterfont = Montserrat({
      subsets: ['latin'],
      weight: '300',
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

    const LinkBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Increase-brand-authority.webp',
        title: 'Increase brand authority',
        description:
            "Position your brand as an industry thought leader by publishing high-quality, original content that resonates with your audience. With AlgorithmX’s affordable link-building solutions, we go beyond simply acquiring backlinks, we help build your brand's authority and long-term SEO success.",
        },
        {
        imageSrc: '/images/Drive-More-Referral-Traffic.webp',
        title: 'Drive More Referral Traffic',
        description:
            'Boost traffic by having trusted websites publish content that links back to your site, encouraging visitors to explore your offerings.',
        },
        {
        imageSrc: '/images/SEO Strategy.webp',
        title: 'Build a Long-Term SEO Strategy',
        description:
            'A carefully planned link-building strategy not only enhances your site’s credibility but also supports its long-term reputation and trustworthiness.',
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
            LINK BUILDING
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

    export default LinkBenefits;
