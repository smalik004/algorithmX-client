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

const LinkServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredTab, setHoveredTab] = useState(null);

    const tabs = [
        { id: 'on-page', label: 'Guest Posting', icon: faDelicious, content: { title: 'Guest Posting Link Building Services', 
        text: 'We secure high-quality backlinks through guest posting on authoritative, relevant sites. This will boost your SEO and position your brand as a thought leader in your industry.',
        }},
        { id: 'off-page', label: 'Unlinked Mention', icon: faGem, content: { title: 'Unlinked Mention Link Building Services', 
            text: "Got mentions but no links? We'll reach out to publishers who've mentioned your brand but forgot to link back. It's like connecting the dots—those unlinked mentions will soon become valuable backlinks, enhancing your authority and rankings.", 
        }},
        { id: 'technical', label: 'Backlink Audit', icon: faGg, content: { title: 'Backlink Audit Services',
            text: "Concerned about bad links dragging your site down? Our backlink audit services will find harmful backlinks and remove them, keeping your site's reputation spotless.",
        }},
        { id: 'report', label: 'Resource Link', icon: faCodepen, content: { title: 'Resource Link Building Services', 
        text: "If you have valuable, link-worthy assets (or need us to help you create them), we'll get links from resource pages, establishing your site as an essential go-to in your field.",
        }},
        { id: 'implementation', label: 'Broken Link', icon: faCube, content: { title: 'Broken Link Building Services', 
            text: "We search the web for broken links and offer your site as the perfect replacement. It's a win-win—websites fix their broken links, and you get valuable backlinks.", 
        }},
        { id: 'custom', label: 'Custom Link', icon: faCodepen, content: { title: 'Custom Link Campaigns', 
            text: "Our custom link-building campaigns are crafted around your business objectives. We provide dedicated project management, continuous reporting, and personalized strategies focused on your success. Whether you're looking for 'an organic link-building service in California' or the best contextual link-building service, we create custom solutions that fit your needs perfectly.", 
        }},
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className={`text-[64px] leading-[68px] ${monsterfont2.className} text-white mb-[15px] text-center`}>Our</h1>
                <h1 className={`text-[64px] leading-[68px] ${monsterfont1.className} text-white mb-[15px] text-center`}>Services</h1>

                <div className="w-full overflow-x-auto pb-4 p-2 mb-8">
                    <div
                        className={`flex md:flex min-w-max md:min-w-0 max-w-[60rem] mx-auto bg-black/50 ${styles["box-design"]}`}
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
                                <span className={`text-[15.2px] leading-[26px] tracking-[0.01em] ${monsterfont2.className} whitespace-nowrap`}>
                                    {tab.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full overflow-x-hidden mt-[150px]">
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

export default LinkServices;