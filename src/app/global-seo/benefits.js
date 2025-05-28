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

    const GlobalSEOBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Expand-Your-Market-Reach.webp',
        title: 'Expand Your Market Reach',
        description:
            'Tap into new markets and unlock massive potential. With our global SEO strategies, you can connect with customers in multiple countries, growing your audience and your business beyond borders. For instance, you don’t need an international SEO company in USA to optimize results for American audiences. Our international SEO consultants will help you reach your audience effectively.',
        },
        {
        imageSrc: '/images/Boost-Organic-Traffic-&-Conversions.webp',
        title: 'Boost Organic Traffic & Conversions',
        description:
            "We optimize your site for international search results, driving relevant traffic that converts. More visibility = more clicks = more sales, all tailored to the unique needs of global users. When your business ranks well on search engines worldwide, it connects with users who are actively searching for your offerings—leading to more clicks, greater engagement, and higher conversion rates. We don’t just focus on getting traffic; we ensure it's the right traffic that brings measurable results.",
        },
        {
        imageSrc: '/images/Enhance-Your-Global-Authority.webp',
        title: 'Enhance Your Global Authority',
        description:
            'Earn credibility in international markets through high-quality backlinks and well-targeted content. As your domain authority grows globally, so does your brand’s trustworthiness and influence. As you gain credibility in multiple regions, your brand’s presence becomes stronger, influencing both search engine rankings and user trust. This foundation in authority not only boosts your site’s visibility but also positions your brand as a trusted leader, giving you a competitive edge in international markets. The result is a robust online reputation that reinforces user confidence and drives sustained growth globally.',
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
           GLOBAL SEO
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

    export default GlobalSEOBenefits;
