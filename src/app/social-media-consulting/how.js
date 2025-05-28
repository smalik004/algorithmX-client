'use client'
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
subsets: ["latin"],
weight: "100",
});
const monsterfont1 = Montserrat({
subsets: ["latin"],
weight: "500",
});

const ConsultingSmoothScrollStack = () => {
const containerRef = useRef(null);
const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
});

const cards = 
    [
        {
            title: "Discovery",
            description:
                "We learn everything we can about your brand, industry, target audiences and, most importantly, the goals you hope to achieve through social media marketing. Our team will listen to you, learn about your brand’s voice, and help you craft the perfect messages that will resonate with your audience.<br><br>" ,
            color: "#000000",
            url: "#",
            src: "images/Discovery.webp",
            points: [],
        },
        {
            title: "Establish a Plan",
            description:
                "Next, we’ll create a custom proposal for your social media strategy based on your business goals. This will include which social media channels we recommend for the best results, as well as details such as posting schedule, post topics and suggestions for boosted posts.<br><br>" +
                "Our social media strategists can operate across any and all social media platforms, including Facebook, LinkedIn, Instagram, Twitter and Youtube.<br><br>" ,
            color: "#000000",
            url: "#",
            src: "images/Establish-a-Plan.webp",
            points: [],
        },
        {
            title: "Account Set-Up",
            description:
                "Next, we will set up the appropriate accounts according to current best practices. Whether you’re already established on the social networks of your choice or are a startup that needs to create new feeds, we can help. Your dedicated AlgorithmX social media expert is knowledgeable in business social media optimization. By having an expert who understands the algorithms at play in social media marketing, you’ll be well positioned to engage with your audience online.<br><br>" ,
            color: "#000000",
            url: "#",
            src: "images/Account-Set-Up.webp",
            points: [],
        },
        {
            title: "Campaign Implementation",
            description:
                "Once we have a plan established and your business’ social media accounts are primed and ready to go, we’ll begin executing your social media strategy. You’ll have the opportunity to review posts before they’re published to ensure we’re getting your brand voice perfect.<br><br>" ,
            color: "#000000",
            url: "#",
            src: "images/Campaign-Implementation.webp",
            points: [],
        },
    
            {
                title: "Report & Repeat",
                description:
                    "Our social media marketing consulting services include continual performance monitoring and monthly reporting. Every content marketing activity we carry out for our clients is based on real data, and the same is true for our social media services. By monitoring your successes, we can optimize your strategy for the greatest return on investment.<br><br>" ,
                color: "#000000",
                url: "#",
                src: "images/Report-&=Repeat.webp",
                points: [],
            },
            
];

return (
    <div className="min-h-screen bg-black relative" ref={containerRef}>
    <h1
        className={` text-white md:text-[56px] text-[38px] leading-[40px] md:leading-[50px] md:tracking-[0.06em] ${monsterfont.className} text-center py- z-10`}
    >
        HOW ALGORITHM MAKES SOCIAL <br/> 
        MEDIA CAMPAIGNS THAT WORK
    </h1>
    <div className="flex items-center justify-center mt-10">
        <div className="h-0.5 w-12 bg-blue-500"></div>
    </div>

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
className="text-[15px] font-helveticaneue leading-[20px] text-semi-white whitespace-pre-wrap"
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

export default ConsultingSmoothScrollStack;
