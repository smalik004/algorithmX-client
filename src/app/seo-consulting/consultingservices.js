'use client';
import { useState } from 'react';
import styles from  '../seoaudits/style.module.css'
import { Montserrat } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen, faDelicious, faGg } from '@fortawesome/free-brands-svg-icons';
import { faCube, faGem } from '@fortawesome/free-solid-svg-icons';


const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ['sans-serif'],
});
const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "700",
    fallback: ['sans-serif'],
});
const monsterfont2 = Montserrat({
    subsets: ["latin"],
    weight: "500",
    fallback: ['sans-serif'],
});

const ConsultingServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false); // Track if any tab is hovered
    const [hoveredTab, setHoveredTab] = useState(null);

    const tabs = [
        { id: 'on-page', label: 'SEO Audit', icon: faDelicious, content: { title: 'SEO Audit', text: 'Our customized SEO audit pinpoints areas for improvement, enabling impactful changes across your site. This comprehensive analysis covers:',
            items: ['Industry dynamics', 'Target market insights', 'Business-specific goals','On-page SEO factors','Off-page SEO elements','Technical SEO optimizations']
        }},

        { id: 'off-page', label: 'Competitor', icon: faGem , content: { title: 'Competitor Analysis', text: "Gain an edge with insights into your competitors’ strategies. Our in-depth competitor analysis reveals:", 
        items: ['SEO strategies they employ', 'Rabking positions', 'Key optimization techniques'] 
        }},

        { id: 'technical', label: 'Website usability', icon: faGg, content: { title: 'Website usability analysis', text: 'Improve your site’s critical metrics and user experience through our usability analysis. We evaluate:',
        items: ['Bounce rate', 'Time on page', 'Conversion rate']
        }},

        { id: 'report', label: '360° SEO', icon: faCodepen, content: { title: '360° SEO optimizations', text: 'Our organic SEO consulting services in USA combine technical insight with strategic planning. Our technical SEO consultants offer a full suite of services to cover every SEO need:', 
            items: ['On-page SEO enhancements', 'Off-page SEO tactics', 'Technical SEO improvements'] 
        }},
        { id: 'implementation', label: ' Recommendations', icon: faCube, content: { title: 'Actionable recommendations', text: 'Our SEO management consulting provides hands-on, actionable advice for any stage of your project. Whether you’re redesigning your site, merging websites, launching a fresh SEO strategy, or responding to Google’s latest algorithm updates, AlgorithmX delivers practical solutions to address your specific challenges. Our expert guidance supports projects including:', 
            items: ['Website  redesign', 'Website merger', 'New SEO strategy','Google algorithm updates & Penalty Recovery']
        }},
        
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className={`text-[64px] leading-[68px] ${monsterfont2.className} text-white mb-[15px] text-center`}>Expert SEO Services</h1>
                <h1 className={`text-[64px] leading-[68px] ${monsterfont1.className} text-white mb-[15px] text-center`}>that Drive Results</h1>

                {/* Tabs Container - Mobile scrollable, Desktop grid */}
                <div className="w-full overflow-x-auto pb-4 p-2 mb-8">
                    <div
                        className={`flex md:grid md:grid-cols-5 min-w-max md:min-w-0 max-w-[48rem] mx-auto bg-black/50 ${styles["box-design"]} `}
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
                            <FontAwesomeIcon icon={tab.icon} className="mb-2 w-[30px] h-[40px]" />
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
                <p className={`text-[16px] leading-[22px] font-helveticaneue mb-[2px] max-w-3xl mx-auto`}>{tab.content.text}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-[40px]">
                    {tab.content.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-6">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                            <span className="text-[18px] leading-[1.1] font-[500] font-helveticaneue">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ))}
</div>
            </div>
        </div>
    );
};

export default ConsultingServices;
