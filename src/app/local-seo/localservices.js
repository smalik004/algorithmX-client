'use client'
import { useState } from 'react';
import styles from  '../seoaudits/style.module.css'
import { Montserrat } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen, faDelicious, faGg } from '@fortawesome/free-brands-svg-icons';
import { faCube, faGem } from '@fortawesome/free-solid-svg-icons';

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
  
});
const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "700",
    fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
    subsets: ["latin"],
    weight: "500",
    fallback: ["sans-serif"],
});


const LocalServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredTab, setHoveredTab] = useState(null);

    const tabs = [
        { id: 'on-page', label: 'Local SEO Audit', icon: faDelicious, content: {
            title: 'Local SEO Audit',
            text: "We kick off your local SEO journey with a deep-dive audit, led by our local SEO Expert. Here's what we look at:",
            points: [
                "Strengths: What's already working well in your local SEO game? Let's build on that momentum.",
                'Weaknesses: What areas are holding you back? We pinpoint opportunities to level up your local search visibility.',
                "Opportunities: Where are the untapped gaps in the market? We'll help you seize those chances for growth.",
            ],
            conclusion: 'Armed with these insights, we craft a strategic plan tailored to your business, zeroing in on the areas with the biggest potential for impact.'
        }},
        { id: 'off-page', label: 'Custom Strategy', icon: faGem, content: {
            title: 'Custom Local SEO Strategy',
            text: 'Every business is different, which is why we provide a fully customized strategy based on your:',
            items: ['SEO goals', 'Business objectives', 'Industry', 'Target audience'],
            conclusion: "Our team works to boost your local search visibility and drive meaningful growth aligned with your goals. We also optimize local SEO for service-area businesses (SAB) to boost your business in a very specific geographic radius, no matter where you're in the world."
        }},
        { id: 'technical', label: 'Citation', icon: faGg, content: {
            title: 'Citation management',
            text: 'Manage and update your business citations across the country for success in local searches. Our citation management service:',
            description: [
                'Ensures consistency across 40+ platforms like Google Business Profile, Bing, Apple Maps, Facebook, and more.',
                'Automates citation updates to ensure both users and search engines have accurate, up-to-date information about your business.'
            ],
            conclusion: 'Plus, with access to representatives from Google, Bing, and Facebook, any issues are resolved quickly and efficiently, keeping your listings competitive.'
        }},
        { id: 'report', label: 'Review', icon: faCodepen, content: {
            title: 'Review management',
            text: 'Leverage your customer reviews to build trust, reduce churn, and increase conversions. Our review management service helps you:',
            description: [
                'Amplify positive feedback to attract more local customers.',
                'Build loyalty and engagement with your audience.',
                'Increase conversions by using reviews to establish trust with potential customers.'
            ]
        }},
        { id: 'implementation', label: 'On-Page local', icon: faCube, content: {
            title: 'On-page local SEO',
            text: 'Our comprehensive on-page local SEO services ensure your site is fully optimized to rank for local search terms:',
            description: [
                'Local keyword research for targeted traffic.',
                'Title tag and meta description optimization to increase click-through rates (CTR).',
                'Local structured data to help search engines understand your business.',
                'SEO copywriting for branded search and organic traffic.'
            ],
            conclusion: 'With local SEO outsourcing, everything from SEO to copywriting and development is taken care of; you can focus on running your business while we focus on driving results.'
        }},
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
            <h1 className={`text-[64px] leading-[68px] ${monsterfont.className} text-white mb-[15px] text-center`}> Services</h1>
                <div className="text-center mb-12">
                    <p className={`text-[21px] leading-[26px] ${monsterfont.className} text-semi-white mt-[30px] text-center`}>LOCATE SEO ISSUES</p>
                    <p className={`text-[21px] leading-[26px] ${monsterfont1.className} text-semi-white text-center`}>IMPACTING YOUR RANKING</p>
                </div>

                {/* Tabs Container */}
                <div className="w-full overflow-x-auto pb-4 p-2 mb-8">
                    <div className={`flex md:grid md:grid-cols-5 min-w-max md:min-w-0 max-w-[48rem] mx-auto bg-black/50 ${styles["box-design"]} `}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => {
                        setIsHovered(false);
                        setHoveredTab(null);
                    }}
                    >
                        {tabs.map((tab) => (
                                <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                onMouseEnter={() => setHoveredTab(tab.id)}
                                onMouseLeave={() => setHoveredTab(null)}
                                className={`
                                    flex flex-col items-center py-4 px-2
                                    transition-all duration-300
                                    ${isHovered 
                                        ? hoveredTab === tab.id
                                            ? 'bg-black/5 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                                            : 'text-[#a2a2a2] hover:bg-white/5'
                                        : activeTab === tab.id
                                            ? 'bg-black/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                                            : 'text-[#a2a2a2] hover:bg-white/5'
                                    }
                                `}
                            >
                                <FontAwesomeIcon icon={tab.icon} className="mb-2 w-[30px] h-[40px]"  />
                                <span className={`text-[15.2px] leading-[26px] tracking-[0.01em] ${monsterfont2.className} text-center`}>
                                    {tab.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full overflow-x-hidden">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`transition-all duration-300 ${
                                activeTab === tab.id ? 'block' : 'hidden'
                            }`}
                        >
                            <div className="text-center max-w-4xl mx-auto px-4">
                                <h2 className={`text-[28px] leading-[32px] ${monsterfont.className} mb-[30px]`}>{tab.content.title}</h2>
                                <p className={`text-[16px] leading-[22px] font-helveticaneue mb-[2px] max-w-2xl mx-auto`}>{tab.content.text}</p>
                                
                                {/* Points/Description Section */}
                                <div className="space-y-0 mb-12">
                                    {tab.content.points && (
                                        <div className=" text-left">
                                            {tab.content.points.map((point, index) => (
                                                <p key={index} className={`text-[15px] leading-[22px] font-helveticaneue ml-5 `}>{`${index + 1}) ${point}`}</p>
                                            ))}
                                        </div>
                                    )}
                                    
                                    {tab.content.description && (
                                        <div className="space-y-0 text-left">
                                            {tab.content.description.map((desc, index) => (
                                                <p key={index} className={`text-[16px] leading-[26px] font-helveticaneue mb-[2px] ml-5 `}>{desc}</p>
                                            ))}
                                        </div>
                                    )}
                                    
                                    {tab.content.items && (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                        {tab.content.items.map((item, index) => (
                                          <div key={index} className="flex items-center gap-3 mt-[30px]">
                                            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                            <span className="text-[18px] leading-[1.1] font-[500] font-helveticaneue">{item}</span>
                                          </div>
                                        ))}
                                      </div>
                                      
                                    )}
                                </div>

                                {/* Conclusion Section */}
                                {tab.content.conclusion && (
                                    <p className="text-[16px] leading-[26px] font-[300] font-helveticaneue text-center mt-[30px] max-w-4xl mx-auto">
                                        {tab.content.conclusion}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocalServices;
