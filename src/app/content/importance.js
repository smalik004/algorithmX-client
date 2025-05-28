    import React from 'react';
    import styles from '../shopify/style.module.css';
    import { Montserrat } from 'next/font/google';

    const monsterfont = Montserrat({
    subsets: ['latin'],
    weight: '100',
    fallback: ["sans-serif"],
    });


    const LineSVG = () => (
    <svg width="48" height="2" viewBox="0 0 48 2" className="transition-opacity duration-300">
        <line 
        x1="0" 
        y1="1" 
        x2="48" 
        y2="1" 
        stroke="#EF4444" 
        strokeWidth="2"
        strokeLinecap="round"
        />
    </svg>
    );

    const ContentFeatures = () => {
    const features = [
        {
        title: 'Improve Online',
        subtitle: 'Visibility',
        description: 'The talented writers at AlgorithmX craft content that aligns with search engine quality and relevance guidelines, seamlessly incorporating keywords into your content to help search engines navigate your pages easily, thereby increasing visibility on search results pages.'
        },
        {
        title: 'Build Trust and',
        subtitle: 'Credibility',
        description: 'Rather than solely focusing on boosting sales, our content marketing services by delivering educational and informative content, developing the trust with your target audience and positioning your brand as a go-to information resource and leader within your industry.'
        },
        {
        title: 'Establish Brand',
        subtitle: 'Authority',
        description: "At our content services agency, we utilize data to create engaging content for website that addresses your target audience’s inquiries. We establish your company as a trustworthy leader in your field by constantly publishing useful insights, thought provoking articles and detailed guides.",
        },
        {
        title: 'Enhance Customer',
        subtitle: 'Experience',
        description: 'AlgorithmX specializes in providing content marketing services where we develop relevant content that directly answers to customer questions, addresses their worries and cater to their interests, enabling them to make informed choices. This content writing strategy not only enhances brand image but also nurtures lasting customer loyalty and encourages continuous engagement.'
        },
        {
        title: 'Boost SEO and',
        subtitle: 'Lead Generation',
        description: 'We are specialists in Search Engine Optimizations (SEO), and our SEO experts make sure your content focuses on keywords and topics searched frequently by your desired audiences and visitors. Every content piece is enhanced and optimized to attract relevant users and customers to your website.'
        },
        {
        title: 'Future Proof',
        subtitle: 'Your Brand',
        description: 'At AlgorithmX, we keep ourselves updated on industry trends, changes in customer habits, and new technologies. By following this content writing approach, we produce a combination of time-sensitive and timeless content that consistently adds unwavering worth to your desired audience.'
        }
    ];

    return (
        <div className="bg-black text-white min-h-screen p-8">
            <div className="max-w-[1200px] mx-auto  mb-16">
        <h1 className={`${styles["choose-text"]} ${monsterfont.className} `}>
        The Importance of
        </h1>
        <h1 className={`${styles["choose-text"]} ${monsterfont.className} mb-16`}>
        Content Marketing
        </h1>
        
        <div className="relative">
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3">
            {/* Vertical Borders */}
            <div className="absolute top-0 left-1/3 w-px h-full bg-gray-700"></div>
            <div className="absolute top-0 left-2/3 w-px h-full bg-gray-700"></div>
            
            {/* Horizontal Border */}
            <div className="absolute top-[45%] w-full h-px bg-gray-700"></div>
            
            {/* Content */}
            {features.map((feature, index) => (
                <div 
                key={index} 
                className="group p-8 relative"
                >
                <div className="flex flex-col space-y-0">
                    <h2 className={`${styles["choose-title"]} text-start`}>
                    {feature.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                    <div className="transition-all duration-500 group-hover:opacity-0 group-hover:-translate-x">
                        <LineSVG />
                    </div>
                    <p className={`${styles["choose-title"]} transition-all duration-500 group-hover:-translate-x-14`}>
                        {feature.subtitle}
                    </p>
                    </div>
                    <p className={`${styles["choose-description"]} text-semi-white`}>
                    {feature.description}
                    </p>
                </div>
                </div>
            ))}
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden grid grid-cols-1 divide-y divide-gray-700">
            {features.map((feature, index) => (
                <div 
                key={index} 
                className="group py-8 relative"
                >
                <div className="flex flex-col space-y-4">
                    <h2 className={`${styles["choose-title"]} text-start`}>
                    {feature.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                    <div className="">
                        <LineSVG />
                    </div>
                    <p className={`${styles["choose-title"]} `}>
                        {feature.subtitle}
                    </p>
                    </div>
                    <p className={`${styles["choose-description"]} text-semi-white`}>
                    {feature.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default ContentFeatures;