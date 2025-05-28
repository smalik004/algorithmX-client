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

    const MobileSEOBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Improve-Google-search-rank.webp',
        title: 'Improve Google search rank',
        description:
            'Since mobile-friendliness became a ranking factor in 2015, it’s essential to have optimized mobile pages. As a mobile SEO agency, we assess and enhance your mobile presence, helping you climb the ranks on Google.',
        },
        {
        imageSrc: '/images/Generate-more-revenue-via-mobile-shopping.webp',
        title: 'Generate more revenue via mobile shopping',
        description:
            'With mobile shopping more popular than ever, customers are turning to smartphones, tablets, and laptops to browse and buy. Our mobile SEO services help capture this traffic, increasing your revenue from mobile shoppers.',
        },
        {
        imageSrc: '/images/Increase-social-share-rate.webp',
        title: 'Increase social share rate',
        description:
            'Mobile devices simplify social sharing, boosting your reach on platforms like Facebook and Instagram. Our mobile SEO experts ensure your site is fully optimized for sharing, expanding your visibility and engagement on social media.',
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
           MOBILE SEO
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

    export default MobileSEOBenefits;
