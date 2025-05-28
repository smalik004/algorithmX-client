'use client';
import { useState } from 'react';
import styles from '../seoaudits/style.module.css'
import { Montserrat } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen, faDelicious, faGg } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCube, faGem } from '@fortawesome/free-solid-svg-icons';


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


const NationalServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false); // Track if any tab is hovered
    const [hoveredTab, setHoveredTab] = useState(null);

    const tabs = [
        { id: 'on-page', label: 'Keyword Strategy', icon: faDelicious, content: { title: 'In-Depth Keyword Research & Strategy', 
        text: 'We identify the high-volume, relevant keywords your target audience is searching for. Our keyword strategy ensures your business ranks for the terms that bring the most traffic—and the highest conversions.',
        
        }},

        { id: 'off-page', label: 'On-Page', icon: faGem, content: { title: 'On-Page Optimization', 
            text: "We optimize every detail on your site, from meta tags to headings, URLs, and internal links. Our goal? To help your site rank #1 with national search engine optimization.", 
        
        }},

        { id: 'technical', label: 'Content ', icon: faGg, content: { title: 'Content Creation and Optimization',
            text: 'Nothing works better than high-quality content tailored to your audience and optimized for SEO. The goal here is to boost your rankings and keep visitors engaged.',
        
        }},

        { id: 'report', label: 'Link Building ', icon: faCodepen, content: { title: 'Link Building', 
        text: 'Backlinks build your site’s credibility. We’ll secure quality links from trusted sites through outreach, guest posts, and content promotion—boosting your rankings and authority.',
            
        }},
        { id: 'implementation', label: 'Technical SEO ', icon: faCube, content: { title: 'Technical SEO Audit and Optimization', 
            text: 'We handle the technical side, ensuring fast load times and easy crawling for search engines. Our optimizations keep your site running smoothly and improve rankings.', 
            
        }},
        
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
            <h1 className={`text-[64px] leading-[68px] ${monsterfont.className} text-white mb-[15px] text-center`}> Services</h1>
                <div className="text-center mb-12">
                    <p className={`text-[21px] leading-[26px] ${monsterfont.className} text-semi-white mt-[30px] text-center`}>IDENTIFY SEO ROADBLOCKS</p>
                    <p className={`text-[21px] leading-[26px] ${monsterfont1.className} text-semi-white text-center`}>LIMITING YOUR GROWTH</p>
                </div>

                {/* Tabs Container - Mobile scrollable, Desktop grid */}
                <div className="w-full overflow-x-auto pb-4 p-2 mb-8">
                    <div
                        className={`flex md:grid md:grid-cols-5 min-w-max md:min-w-0 max-w-3xl mx-auto bg-black/50 ${styles["box-design"]}`}
                        onMouseEnter={() => setIsHovered(true)} // Activate hover state for any tab
                        onMouseLeave={() => {
                            setIsHovered(false);
                            setHoveredTab(null);
                        }} // Deactivate hover state
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
                            <span className={`text-[15.2px] leading-[26px]  ${monsterfont2.className} text-center`}>
                                {tab.label}
                            </span>
                        </button>
                        ))}
                    </div>
                </div>

                
                {/* Content Section */}
<div className="w-full overflow-x-hidden mt-[50px]">
    {tabs.map((tab) => (
        <div
            key={tab.id}
            className={`transition-all duration-300 ${
                activeTab === tab.id ? 'block' : 'hidden'
            }`}
        >
            <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className={`text-[28px] leading-[32px] ${monsterfont.className} mb-[30px]`}>{tab.content.title}</h2>
            <p className={`text-[16px] leading-[22px] font-helveticaneue mb-[2px] max-w-3xl mx-auto`}>{tab.content.text}</p>
            </div>
        </div>
    ))}
</div>
            </div>
        </div>
    );
};

export default NationalServices;
