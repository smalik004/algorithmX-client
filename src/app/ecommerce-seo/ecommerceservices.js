'use client'
import { useState } from 'react';
import styles from  '../seoaudits/style.module.css'
import { Montserrat } from "next/font/google";


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


const EcommerceServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredTab, setHoveredTab] = useState(null);

    const tabs = [
        { id: 'on-page', label: 'Keyword identification', img: '/images/keyword identitification.png', content: {
            title: 'Local SEO Audit',
            text: "Before we make any moves, we identify what keywords your potential customers are searching for. Whether it’s researching the most effective phrases for advanced eCommerce SEO or optimizing for eCommerce SEO services across the USA, we target the words that will bring the right shoppers to your store.",
        }},
        { id: 'off-page', label: 'Keyword implementation', img: '/images/keyword implementation.png', content: {
            title: 'Keyword implementation',
            text: 'We don’t just stop at finding the right keywords; we skillfully weave them into:',
            items: ['Homepages', 'Page titles', 'Meta descriptions', 'Product descriptions','Image alt text'],
            conclusion: "Our team works to boost your local search visibility and drive meaningful growth aligned with your goals. We also optimize local SEO for service-area businesses (SAB) to boost your business in a very specific geographic radius, no matter where you're in the world."
        }},
        { id: 'technical', label: 'Product page optimization', img: '/images/product page optimization.png', content: {
            title: 'Product page optimization',
            text: 'Product pages are your store’s goldmine. Our eCommerce SEO consultants will optimize them with:',
            items: ['Keyword-rich descriptions', 'Model numbers for search specify', 'Clear, enticing copy to improve conversions'],
            conclusion: 'This ensures your product pages rank high when customers search for long-tail keywords like "best eCommerce platform for SEO" or "eCommerce SEO firm in USA."'
        }},
        { id: 'report', label: 'Navigation optimization', img: '/images/navigation optimization.png', content: {
            title: 'Navigation optimization',
            text: 'In eCommerce, easy navigation is essential. We organize products into clear categories and link key pages directly from the menu, making it simple for users to find what they need.',
            description: [
                'Confusing layouts drive visitors away, hurting both engagement and rankings. Our solution? Intuitive design and breadcrumb navigation that guides users back to previous sections, encouraging them to explore further and stay on your site.',
            ],
            conclusion: 'We improve the browsing experience, reduce bounce rates, and strengthen your SEO by optimizing navigation.',
        }},
        { id: 'implementation', label: 'Content creation', img: '/images/content creation.png', content: {
            title: 'Content creation',
            text: 'In eCommerce, content is not just king—relevant content is emperor. Our team of certified eCommerce SEO experts crafts fresh, original pieces such as blog posts, how-to videos, infographics, and in-depth articles that resonate with your audience. By targeting high-impact keywords like "enterprise eCommerce SEO" and industry-specific topics, we ensure your content not only drives traffic but also builds trust and engages potential customers.',
        }},
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
            <h1 className={`text-[64px] leading-[68px] ${monsterfont.className} text-white mb-[15px] text-center`}> Services</h1>
                <div className="text-center mb-12">
                    <p className={`text-[21px] leading-[26px] ${monsterfont.className} text-semi-white mt-[30px] text-center`}>HOW SEO IS</p>
                    <p className={`text-[21px] leading-[26px] ${monsterfont1.className} text-semi-white text-center`}>IMPACTING YOUR RANKING</p>
                </div>

                {/* Tabs Container */}
                <div className="w-full overflow-x-auto pb-4 p-[6px] mb-8">
                    <div className={`flex md:grid md:grid-cols-5 min-w-max md:min-w-0 max-w-[72rem] mx-auto bg-black ${styles["box-design"]} `}
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
                                 <img src={tab.img} alt={tab.label} className="w-[46px] h-[46px] mb-2" />
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
                                <div className="space-y-6 mb-12">
                                    {tab.content.points && (
                                        <div className="space-y-1 text-left">
                                            {tab.content.points.map((point, index) => (
                                                <p key={index} className={`text-[15px] leading-[22px] font-helveticaneue ml-5 `}>{`${index + 1}) ${point}`}</p>
                                            ))}
                                        </div>
                                    )}
                                    
                                    {tab.content.description && (
                                        <div className="space-y-1 text-center">
                                            {tab.content.description.map((desc, index) => (
                                                <p key={index} className={`text-[16px] leading-[26px] font-helveticaneue mb-[2px] ml-5 `}>{desc}</p>
                                            ))}
                                        </div>
                                    )}
                                    
                                    {tab.content.items && (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                            {tab.content.items.map((item, index) => (
                                                <div key={index} className="flex items-center gap-3">
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

export default EcommerceServices;
