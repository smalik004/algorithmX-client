'use client'
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
subsets: ["latin"],
weight: "100",
fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
subsets: ["latin"],
weight: "500",
});

const TiktokSmoothScrollStack = () => {
const containerRef = useRef(null);
const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
});

const cards = 
    [
        {
            title: "Content Creation and Strategy",
            description:
                "Creating compelling content that resonates with your audience is at the heart of our TikTok management services. We begin by understanding your brand’s voice, goals, and target audience. Our team of content creators and strategists then develops a comprehensive content plan that includes a mix of creative video ideas, trending challenges, and unique storytelling approaches.<br><br>" +
                "We ensure that each piece of content aligns with current TikTok trends while maintaining your brand’s authenticity. Our strategy also includes optimizing posting schedules to maximize visibility and engagement, utilizing popular hashtags, and staying up-to-date with platform updates. By continually analyzing content performance, we refine our strategy to ensure sustained growth and engagement.<br><br>" ,
            color: "#000000",
            url: "#",
            src: "images/Content-Creation-and-Strategy.webp",
            points: [],
        },
        {
            title: "Influencer Collaboration",
            description:
                "Partnering with the right influencers can significantly boost your brand’s presence on TikTok. We leverage our extensive network of influencers to find the perfect match for your brand. Our process involves thorough research to identify influencers whose audience demographics align with your target market.<br><br>" +
                "We manage the entire collaboration process, from initial outreach and contract negotiation to content creation and campaign tracking. By working with influencers who genuinely resonate with your brand, we create authentic and impactful campaigns that drive engagement and build trust with your audience.<br><br>" ,
            color: "#000000",
            url: "#",
            src: "images/Influencer-Collaboration.webp",
            points: [],
        },
        {
            title: "Performance Analytics",
            description:
                "Understanding the impact of your TikTok content is crucial for continuous improvement. We utilize advanced analytics tools to monitor and evaluate your content’s performance in real-time. Our analytics cover key metrics such as views, likes, shares, comments, follower growth, and audience demographics.<br><br>" +
                "With detailed performance reports, we provide insights into what’s working and what’s not, allowing us to make data-driven decisions. This ongoing analysis helps us to optimize your content strategy, improve engagement rates, and achieve your business objectives more effectively." ,
            color: "#000000",
            url: "#",
            src: "images/Performance Analytics.webp",
            points: [],
        },
        {
            title: "Ad Campaign Management",
            description:
                "Our ad campaign management services are designed to maximize your brand’s visibility and engagement on TikTok. We start by understanding your campaign goals, whether it’s brand awareness, lead generation, or driving sales. Our team then designs compelling ad creatives that capture attention and resonate with your target audience.<br><br>" +
                "We use precise audience targeting to ensure your ads reach the right people, and we continually monitor and optimize campaign performance to ensure the best possible ROI. By leveraging TikTok’s advertising features effectively, we help you achieve your marketing goals efficiently.<br><br>" ,
            color: "#000000",
            url: "#",
            src: "images/Ad-Campaign-Management.webp",
            points: [],
        },
    
            {
                title: "Community Engagement",
                description:
                    "Building a loyal community on TikTok requires consistent and genuine interaction with your audience. Our community engagement strategy involves actively participating in the conversation by responding to comments, joining trending challenges, and encouraging user-generated content. We create opportunities for meaningful interactions that build a sense of community and foster long-term loyalty.<br><br>" +
                    "Additionally, we monitor audience sentiment and feedback to understand their preferences and concerns. This ongoing engagement not only strengthens your brand’s presence on TikTok but also helps in building a loyal and active community that supports your brand’s growth and success.<br><br>" ,
                color: "#000000",
                url: "#",
                src: "images/Community-Engagement.webp",
                points: [],
            },
            
];

return (
    <div className="min-h-screen bg-black relative" ref={containerRef}>
    <h1
        className={`text-[56px] text-white md:leading-[40px] md:leading-[50px] md:tracking-[0.06em] ${monsterfont.className} text-center py- z-10`}
    >
        OUR SOLUTIONS
    </h1>
    

    {cards.map((card, i) => (
        <Card
        key={i}
        i={i}
        {...card}
        progress={scrollYProgress}
        range={[i * 0.25, 1]}
        targetScale={1 - (cards.length - i) * 0.05}
        />
    ))}
    </div>
);
};

const Card = ({ i, title, description, src, color, points, progress, range, targetScale }) => {
const cardRef = useRef(null);
const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
});

const scale = useTransform(progress, range, [1, targetScale]);

return (
    <div ref={cardRef} className="h-screen sticky top-0 flex items-center justify-center px-4 md:px-8">
    <motion.div
        style={{ backgroundColor: color }}
        className="relative w-full max-w-[1200px] h-[700px] md:h-[500px] rounded-xl p-4 md:p-8 flex flex-col border-2 border-[#fd6470] overflow-y-auto md:overflow-visible"
    >
        <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-8">
        <div className="flex-1 flex flex-col">
            <h2 className={`text-[36px] leading-[1.1] mb-4 text-left text-white font-helveticaneue font-[400]`}>
            {title}
            </h2>
            <p
className="text-[15px] font-[Helvetica] leading-[20px] text-semi-white whitespace-pre-wrap"
dangerouslySetInnerHTML={{ __html: description }}
/>

        </div>

        <div className="relative flex-1 min-h-[200px] md:min-h-0">
            <div className="relative w-full h-full">
            <motion.img src={src} alt={title} className="object-cover w-full h-full rounded-lg" />
            </div>
        </div>
        </div>
    </motion.div>
    </div>
);
};

export default TiktokSmoothScrollStack;
