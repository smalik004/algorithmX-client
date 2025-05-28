'use client';
import { useState } from 'react';
import styles from './style.module.css';
import { Montserrat } from "next/font/google";

import { 
    faFileLines, 
    faLink, 
    faCog, 
    faClipboardList, 
    faWrench, 
    faChartLine, 
    faGem,
    faCube
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen, faDelicious, faGg } from '@fortawesome/free-brands-svg-icons';

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

const AuditServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredTab, setHoveredTab] = useState(null);

    const tabs = [
        { 
            id: 'on-page', 
            label: 'On-page', 
            icon: faDelicious,
            content: { 
                title: 'On-Page SEO Services', 
                text: 'The starting point of our SEO audit is a thorough on-page review. This involves pinpointing core issues that may hinder your site\'s visibility, such as:', 
                items: ['Duplicate content', 'Keyword stuffing & Thin Content', 'Missing title tags & meta descriptions'],
                bottomText: "In addition to identifying these issues, we provide specific recommendations to address each one, equipping you with the knowledge to optimize your site effectively.",
                useCustomContent: false
            }
        },
        { 
            id: 'off-page', 
            label: 'Off-page', 
            icon: faGem,
            content: { 
                title: 'Off-Page SEO Services', 
                text: "Understanding your website's reputation within your industry and among search engines is crucial. We conduct a detailed off-page analysis of your site and benchmark it against competitors. Key areas we assess include:", 
                items: ['Backlink quality', 'Backlink anchor text','Backlink placement','Baclink relevancy','Backlink quantity'],
                bottomText: "Our insights go beyond general advice, offering a targeted strategy to build high-quality links that align with your business goals.",
                useCustomContent: false
            }
        },
        { 
            id: 'technical', 
            label: 'Technical SEO', 
            icon: faGg,
            content: { 
                title: 'Technical SEO Services', 
                text: 'Technical aspects can often obstruct site visibility if not optimized. Our SEO audit includes an in-depth technical review covering:', 
                items: ['.htaccess file', 'Robots.txt', 'Sitemap','HTTP headers','404 error pages','Page speed'],
                bottomText: "Our team provides solutions to enhance indexing and visibility, with a development team on hand to implement any required technical fixes.",
                useCustomContent: false
            }
        },
        { 
            id: 'report', 
            label: 'SEO Reports', 
            icon: faCodepen,
            content: { 
                title: ' SEO Report', 
                text: 'Upon completing the audit, your account manager will deliver a prioritized report with clear, actionable steps. These may include resolving:', 
                items: ['Duplicate Contents', 'Broken Links', 'Site statics','Similar title tags','Duplicate meta descriptions','Web copy editing','HTML validation','Browser and resolution compatibility','Page loading times'],
                bottomText: 'The SEO Audit report is designed to guide your team or to hand over to our AlgorithmX experts for seamless implementation.',
                useCustomContent: false
            }
        },
        { 
            id: 'implementation', 
            label: 'Implementation', 
            icon: faCube,
            content: { 
                title: 'Audit Implementation Services', 
                text: 'Choose the implementation path that suits your needs:', 
                customContent: [
                    { header: 'In-house handling', description: "We'll provide support and training to your team." },
                    { header: 'AlgorithmX implementation', description: "Access to our SEO specialists, developers, and content experts to manage every aspect of the implementation." }
                ],
                bottomText: 'With these options, you can start capitalizing on the audit insights to boost traffic and conversions effectively.',
                useCustomContent: true
            }
        },
        { 
            id: 'strategy', 
            label: 'Strategy', 
            icon: faCodepen,
            content: { 
                title: 'SEO Strategy ', 
                text: 'Beyond immediate fixes, our SEO audit package includes a forward-looking SEO strategy crafted around your:', 
                items: ['Business objectives', 'Market landscape', 'Growth aspirations'],
                bottomText: 'This personalized strategy positions your business for long-term success, with an actionable roadmap tailored to your goals.',
                useCustomContent: false
            }
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className={`text-[64px] leading-[68px] ${monsterfont.className} text-white mb-[15px] text-center`}>Audit Services</h1>
                <div className="text-center mb-12">
                    <p className={`text-[21px] leading-[26px] ${monsterfont.className} text-semi-white mt-[30px] text-center`}>LOCATE SEO ISSUES</p>
                    <p className={`text-[21px] leading-[26px] ${monsterfont1.className} text-semi-white text-center`}>IMPACTING YOUR RANKING</p>
                </div>

                <div className="w-full overflow-x-auto pb-4 p-2 mb-8 flex">
  <div
    className={`flex md:grid md:grid-cols-6 gap-1 max-w-4xl mx-auto bg-black ${styles["box-design"]}`}
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
                              min-w-[100px] /* Ensure minimum width */
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
                                <p className={`text-[16px] leading-[22px] font-helveticaneue mb-[30px]`}>{tab.content.text}</p>
                                
                                {tab.content.useCustomContent ? (
                                    <div className="space-y-6">
                                        {tab.content.customContent.map((item, index) => (
                                            <div key={index} className="items-center gap-2">
                                                <span className="text-[16px] leading-[1.1] font-[400] font-helveticaneue text-red-500">
                                                    {item.header}:
                                                </span>
                                                <span className="text-[16px] leading-[1.1] font-[400] font-helveticaneue">
                                                    {item.description}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-[60px]">
                                        {tab.content.items.map((item, index) => (
                                            <div key={index} className="flex items-center gap-6">
                                                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                                <span className="text-[18px] leading-[1.1] font-[500] font-helveticaneue">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-[16px] leading-[26px] font-[300] fonthelevticaneue text-center mt-[50px] max-w-4xl mx-auto">
                    {tabs.find(tab => tab.id === activeTab)?.content.bottomText}
                </p>
            </div>
        </div>
    );
};

export default AuditServices;