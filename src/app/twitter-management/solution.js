'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Montserrat } from 'next/font/google';

    const monsterfont = Montserrat({
    subsets: ['latin'],
    weight: '100',
    fallback : ["sans-serif"],
    });
    const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "400",
    fallback : ["sans-serif"],
    });

const TwitterSmoothScrollStack = () => {
const containerRef = useRef(null);
const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
});

const cards = [
    {
    title: "Twitter Management Strategy",
    description:
        "Twitter is a platform that provides an opportunity to increase followers and reach your target audience through content creation. A proper Twitter marketing strategy helps your business find opportunities by evaluating the social media landscape and helps you discover how you can capitalize on them. Apart from connecting you to your audience and boosting your brand awareness, a Twitter marketing strategy can support wider digital marketing efforts that lead to sales for your business. We at myMarketing ensure that your Twitter profile highlights information that supports your business goals and promotes the right content to your followers.",
    color: "#000000",
    url: "#",
    src: "images/Twitter-Management-Strategy.webp",
    points: [
    ],
    },
    {
    title: "Tweet Content Creation",
    description: "Strong content is important for improving lead generation and sales through Twitter. As Twitter is a social media platform that allows you to build a network of relevant followers, it is essential to create captions that connect you with your specific audience. To get ahead of the competition and create a unique identity for your brand, your Twitter captions must be creative, compelling and valuable. Tweets are limited to 280 characters which makes it all the more important to write high-quality concise information for your audience.",
    color: "#000000",
    url: "#",
    src: "images/pexels-photo-1105666.webp",
    points: [
    ],
    },
    {
    title: "Post Design",
    description: "To make your Twitter posts engaging and conversion-worthy, it is important to often accompany your Tweets with relevant visual design. As visuals play a major role in gaining audience attention, using images, videos, memes, GIFs, can help the performance of your Tweet. To create a bigger impact with your Tweets, you must choose the right design elements to capture the attention of your audience.",
    color: "#000000",
    url: "#",
    src: "images/Post-Design.webp",
    points: [
    ],
    },
    {
    title: "Twitter Post Scheduling",
    description: "To get maximum engagement through your tweets, it is important to schedule your posts regularly and at the right times. Regular post scheduling is essential as it allows your followers to hear from you often which provides continuous exposure to your brand. Posting your content at the right time is equally as important, as there are times that your audience is significantly more likely to see your posts than others. Our social media experts will help you create a Twitter post schedule to ensure you are availing yourself all possible opportunities to connect with your audience through the platform.",
    color: "#000000",
    url: "#",
    src: "images/Twitter-Post-Scheduling.webp",
    points: [
    ],
    },
    {
    title: "Performance Tracking",
    description: "Apart from managing your account on Twitter and increasing your follower base, it is important to measure the performance of your Twitter campaigns. With an account on Twitter for business, you can make use of different metrics to track the success and drawbacks of each campaign. Here, you’ll get customized reports that will help you understand your performance and utilize the data to improve your future marketing efforts accordingly.",
    color: "#000000",
    url: "#",
    src: "images/Performance-Tracking.webp",
    points: [
    ], 
    },
    
       
];

return (
    <div className="min-h-screen bg-black relative " ref={containerRef}  >
    <h1 className={`text-[56px]  md:leading-[40px] md:leading-[50px] text-white md:tracking-[0.06em] ${monsterfont.className} text-center py- z-10 `}>
    OUR SOLUTIONS
  
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

const Card = ({ i, title, description, src, url, color, points, progress, range, targetScale }) => {
const cardRef = useRef(null);

const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
});

const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
const scale = useTransform(progress, range, [1, targetScale]);

return (
    <div ref={cardRef} className="h-screen sticky top-0 flex items-center justify-center px-4 md:px-8 ">
    <motion.div
        style={{
        backgroundColor: color,
        }}
        className="relative w-full max-w-[1200px] h-[700px] md:h-[500px] rounded-xl p-4 md:p-8 flex flex-col border-2 border-pink-500 overflow-y-auto md:overflow-visible"
    >
        <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-8">
        <div className="flex-1 flex flex-col">
        <h2 className={`text-[36px] leading-[1.1] mb-4 text-left text-white  font-helveticaneue font-[400] `}>{title}</h2>
        <p className="text-[15px] font-[Helvetica] leading-[20px] text-semi-white whitespace-pre-wrap">{description}</p>

        <ul className="list-disc pl-4 text-[15px] font-[Helvetica] leading-[24px] text-semi-white ">
              {points.map((point, index) => (
                <li key={index} className="mb-0">{point}</li>
              ))}
            </ul>
        </div>
        
        <div className="relative flex-1 min-h-[200px] md:min-h-0">
            <div className="relative w-full h-full">
            <motion.img 
                src={src} 
                alt={title} 
                className="object-cover w-full h-full rounded-lg"
            />
            </div>
        </div>
        </div>
    </motion.div>
    </div>
);
};

export default TwitterSmoothScrollStack;