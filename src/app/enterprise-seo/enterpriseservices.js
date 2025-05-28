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
});
const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "700",
});
const monsterfont2 = Montserrat({
    subsets: ["latin"],
    weight: "500",
});

const EnterpriseServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false); // Track if any tab is hovered
    const [hoveredTab, setHoveredTab] = useState(null);

    const tabs = [
        { id: 'on-page', label: 'Scalability', icon: faDelicious, content: { title: 'Scalability That Grows with You', 
        text: "Large businesses need SEO strategies that can scale. We create enterprise SEO solutions designed for growth. Whether it’s managing thousands of pages or executing nationwide campaigns, we ensure your SEO evolves as your business expands.",
        
        }},

        { id: 'off-page', label: ' Technical SEO ', icon: faGem, content: { title: 'Geotargeting and Localization', 
            text: "Big business often means complex websites, and that can lead to some serious technical hurdles. As your enterprise search engine optimization marketing company, we conduct deep-dive technical SEO audits to uncover and fix any issues—whether it’s slow site speed, crawlability problems, or poor mobile performance.The outcome? A website that ranks higher in search results and keeps users engaged from the moment they land on your page.", 
        
        }},

        { id: 'technical', label: 'Analytics ', icon: faGg, content: { title: 'Data-Driven Insights & Analytics',
            text: 'In SEO, data is everything. Using powerful enterprise SEO platforms, we analyze crucial metrics like traffic, conversion rates, and keyword rankings. This lets us continuously refine your strategy, so your site performs better over time, driving more revenue.',
        
        }},

        { id: 'report', label: 'Content-Strategy' , icon: faCodepen, content: { title: 'Tailored Content Strategy for Enterprise Needs', 
        text: 'Content is the backbone of SEO. We develop custom content strategies for your industry. Whether it’s product descriptions or blogs, we optimize every word for SEO, ensuring your audience stays engaged and conversions soar.',
            
        }},
        { id: 'implementation', label: 'Multi-dimensional ', icon: faCube, content: { title: 'Multi-dimensional Approach', 
            text: "Our Enterprise SEO services utilize a multi-dimensional approach, covering all essential SEO facets: technical optimization, content strategy, link building, local and international SEO, and competitor analysis. Success starts with the right keywords. Our enterprise SEO consultants dive deep into keyword research to find high-value terms that align with your industry. This holistic method provides comprehensive coverage, amplifying your SEO impact across various channels and markets, ensuring every aspect of your business's online presence is optimized for maximum reach and effectiveness.", 
            
        }},
        { id: 'testing', label: 'Customization ', icon: faCodepen, content: { title: 'Customization and Integration', 
            text: 'Enterprise SEO services provide customized solutions tailored to the specific needs and goals of each organization. They integrate SEO efforts with other digital marketing initiatives such as content marketing, social media, and paid advertising to create a cohesive and synergistic approach that maximizes overall online visibility and ROI.', 
            
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
                        className={`flex md:flex justify-center  mx-auto bg-black/50 min-w-max md:min-w-0 max-w-[59rem] ${styles["box-design"]}`}
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


export default EnterpriseServices;
