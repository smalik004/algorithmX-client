import React from 'react';
import styles from './style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});

const reasons = [
    {
        title: "Inefficient Spending",
        content: "Your paid social campaigns should be profitable, not draining your budget. We specialize in identifying areas where your spending is inefficient, helping you understand exactly where your budget is being wasted. Our expert analysis reveals opportunities for optimization, allowing you to reallocate your budget more effectively. By following our tailored recommendations, you can maximize the impact of your social media advertising, ensuring your investment yields the best possible returns. Let us help you turn your paid social efforts into a powerful, cost-efficient tool for driving growth and increasing your bottom line."
    },
    {
        title: "Avoiding Risks",
        content: "Our social media audit is designed to uncover opportunities for growth and optimization. By trialing different ad formats, we can determine what resonates best with your audience. Testing various campaign types allows us to find the most effective strategies for your goals. Broadening audience targeting helps to reach a wider, more relevant audience, while expanding keyword usage ensures your content appears in more searches. Additionally, adding additional placements can increase your visibility across multiple platforms. Our comprehensive audit will provide actionable insights to enhance your social media presence and drive better results."
    },
    {
        title: "Zero ROI",
        content: "At the heart of our approach lies your ultimate goal: achieving substantial profit, solidifying margins, and bolstering cash flow. Our audit is meticulously crafted to enhance performance through a profit-oriented lens, prioritizing strategies that align with your core business objectives. We delve deep into optimizing efficiency and effectiveness, aiming to maximize returns on investment and operational outcomes. By focusing on true commercial objectives, we strategize and implement initiatives that drive sustainable growth and competitive advantage. Our methodology is designed to not only identify opportunities for improvement but also to implement actionable solutions that deliver tangible results, ensuring your business remains agile and resilient in a dynamic marketplace."
    }
];

const SocialMediaAudit = () => {
    return (
        <div className="min-h-screen bg-black p-8">
            <div className="max-w-full mx-auto grid md:grid-cols-3 gap-6">
                {/* Left side boxes (2/3 width) */}
                <div className="md:col-span-2 grid md:grid-cols-3 gap-6 order-2 md:order-1">
                    {reasons.map((reason, index) => (
                        <div 
                            key={index}
                            className={` p-4 bg-black relative overflow-hidden group ${styles["box"]}  `}
                        >
                            <div className={`relative z-10 transition-all duration-300  `}>
                                <h3 className={`text-[16px] leading-[22px] text-[#ffca00] text-center mb-[10px] font-opensans font-[700]`}>
                                    {reason.title}
                                </h3>
                                <p className={`${styles["what-subtitle"]} font-helveticaneue text-semi-white text-center`}>
                                    {reason.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Right side title (1/3 width) */}
                <div className="md:col-span-1 md:mt-20 md:pl-[62px] order-1 md:order-2">
                    <h2 className={`text-[40px] md:text-[56px] leading-[44px] md:leading-[60px] ${monsterfont1.className} text-white text-center md:text-left`}>
                        3 Key Reasons to Audit Social Media Accounts
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaAudit;