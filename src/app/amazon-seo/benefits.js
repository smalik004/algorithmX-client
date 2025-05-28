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

    const AmazonSEOBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Enhanced-Visibility.webp',
        title: 'Enhanced Visibility',
        description:
            "Our Amazon SEO services are designed to enhance product visibility by using targeted keywords and optimization techniques. By improving search ranking, we increase your product's exposure, making it easier for customers to find and buy your offerings.",
        },
        {
        imageSrc: '/images/Increased-Traffic.webp',
        title: 'Increased Traffic',
        description:
            "Amazon SEO brings more eyes to your products by strategically optimizing for relevant keywords. This targeted traffic is more likely to convert, leading to higher sales and a steady growth in organic reach.",
        },
        {
        imageSrc: '/images/Improved-Conversion-Rates.webp',
        title: 'Improved Conversion Rates',
        description:
            'Well-crafted, keyword-rich listings paired with high-quality visuals engage customers and drive conversions. Our approach to Amazon SEO not only attracts more visitors but also converts them into buyers, helping you achieve sustained revenue growth.',
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
           AMAZON SEO
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

    export default AmazonSEOBenefits;
