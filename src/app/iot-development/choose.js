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

    const IoTBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Focus-on-What Matters.webp',
        title: 'Robust Security Practices',
        description:
            "Our team comprises seasoned experts who have consistently delivered transformative solutions for businesses across various industries. By choosing Copper Digital, you're partnering with a trusted ally with a history of driving tangible results for businesses.",
        },
        {
        imageSrc: '/images/Search-Rankings.webp',
        title: 'Reliable Connectivity',
        description:
            "Copper Digital is committed to helping your business optimize costs while maximizing the technology's return on investment (ROI). Our re-engineering process focuses on cost-effective solutions that enhance efficiency, reduce operating expenses, and eliminate unnecessary spending. We ensure your technology upgrades make sound financial sense and contribute positively to your bottom line.",
        },
        {
        imageSrc: '/images/Maximize-Your-ROI.webp',
        title: 'Prioritizing Usability​',
        description:
            'We understand that every business is unique, and our approach is centered around aligning our re-engineering services with your specific business objectives. Our solutions are not one-size-fits-all but custom-tailored to meet your needs and drive business growth. Copper Digital ensures that our re-engineering efforts are directly linked to your success.',
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
            OUR IoT
          </h2>
          <h3 className={`text-[40px] leading-[48px] ${monsterfont1.className}  text-white `}>
          Development SERVICES
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

    export default IoTBenefits;
