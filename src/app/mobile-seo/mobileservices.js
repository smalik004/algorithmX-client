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

const MobileServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredTab, setHoveredTab] = useState(null);

    const tabs = [
        { id: 'on-page', label: 'Responsive Design', icon: faDelicious, content: { title: 'Responsive Web Design', 
        text: "The first step towards quality UI has to be responsive web and app designs. Your website should be as flexible as your users. We create websites that automatically adjust to all devices, such as smartphones, tablets, and laptops. Your website will work perfectly no matter where it's viewed thanks to a responsive design in play.",
        }},
        { id: 'off-page', label: 'Page Optimization', icon: faGem, content: { title: 'Lightning-Fast Mobile Page Speed Optimization', 
            text: "If your mobile site is slow, your users will leave. We enhance your website's speed by reducing image sizes, improving code quality, and optimizing all technical aspects for faster loading times. A speedier website brings joy to your users and improves your Google rankings.", 
        }},
        { id: 'technical', label: 'Content', icon: faGg, content: { title: 'Mobile-Friendly Content Optimization',
            text: 'We make sure your content is tailored for mobile devices—simple to read, brief, and captivating. Our strategy focused on mobile devices guarantees that your content is both easy to use and designed to perform well in mobile search engine results.',
        }},
        { id: 'report', label: 'Keyword', icon: faCodepen, content: { title: 'Mobile-Specific Keyword Optimization', 
        text: 'Mobile users search differently than desktop users. We conduct in-depth research to find mobile-specific keywords and optimize your content for those queries. By aligning with how users search on their phones, we help your site rank higher and attract more mobile traffic.',
        }},
        { id: 'implementation', label: 'Local SEO', icon: faCube, content: { title: 'Local SEO for Mobile', 
            text: 'Mobile searches often come with local intent (think "near me"). We make sure your business shows up when nearby users are looking for products or services. From optimizing your Google My Business profile to tweaking location-based keywords, we help your brand be the first to show up in local mobile searches.', 
        }},
        { id: 'testing', label: 'Testing', icon: faCodepen, content: { title: 'Comprehensive Mobile SEO Audits', 
            text: 'We perform a full audit of your mobile site, identifying and fixing issues like slow loading speeds and unoptimized code. The result? A fast, smooth site that ranks higher on mobile search results.', 
        }},
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className={`text-[64px] leading-[68px] ${monsterfont.className} text-white mb-[15px] text-center`}>Services</h1>
                <div className="text-center mb-12">
                    <p className={`text-[21px] leading-[26px] ${monsterfont.className} text-semi-white mt-[30px] text-center`}>LOCATE SEO ISSUES</p>
                    <p className={`text-[21px] leading-[26px] ${monsterfont1.className} text-semi-white text-center`}>IMPACTING YOUR RANKINGS</p>
                </div>

                <div className="w-full overflow-x-auto pb-4 p-2 mb-8">
                    <div
                        className={`flex md:flex justify-center  mx-auto bg-black/50 min-w-max md:min-w-0 max-w-[54rem] ${styles["box-design"]}`}
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
                                    flex flex-col items-center py-4 px-6
                                    transition-all duration-300
                                    whitespace-nowrap
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
                                <FontAwesomeIcon icon={tab.icon} className="mb-2 w-[30px] h-[40px]" />
                                <span className={`text-[15.2px] leading-[26px] tracking-[0.01em] ${monsterfont2.className} text-center`}>
                                    {tab.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

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

export default MobileServices;