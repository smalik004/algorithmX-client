    'use client';
    import React, { useRef } from 'react';
    import { motion, useScroll, useTransform } from 'framer-motion';
    import { Montserrat } from 'next/font/google';
    
        const monsterfont = Montserrat({
        subsets: ['latin'],
        weight: '100',
        fallback: ["sans-serif"],
        });
        const monsterfont1 = Montserrat({
        subsets: ["latin"],
        weight: "400",
        fallback: ["sans-serif"],
        });

    const SmoothScrollStack = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const cards = [
        {
        title: "Rolling Instagram Marketing and Promotions",
        description:
            "Successful Instagram marketing is built on relevant and timely content. Our rolling Instagram management service ensures your brand stays consistent, with activities that enhance user engagement and grow your following. Our strategists manage your Instagram account, from posts and stories to influencer collaborations, helping you build a strong presence.\n\n Running an Instagram campaign in tandem with other platforms, like Facebook, can further boost your results.",
        color: "#000000",
        url: "#",
        src: "images/Rolling-Instagram-Marketing-and-Promotions.webp",
        points: [],
        },
        {
        title: "Custom Instagram Posts",
        description: "If you're looking to promote specific content like blog posts, webinars, or events, our social media strategists can craft impactful, one-off Instagram posts tailored to your needs. This approach is ideal if you're supplementing the efforts of an in-house team or just beginning to explore Instagram's potential.\n\n We understand that, as a business owner, time is limited, and keeping up with consistent posting can be challenging. Our strategists offer data-driven scheduling insights and best practices to ensure each post maximizes engagement, even if your focus is on occasional content. Enjoy the benefits of consistency with the flexibility to scale as you grow.",
        color: "#000000",
        url: "#",
        src: "images/Custom-4Instagram-Posts.webp",
        points: [],
        },
        {
        title: "Instagram Listening",
        description: "With over 1 billion users on Instagram, it's crucial to stay on top of what's being said about your brand. But cutting through the noise can be challenging — that's where our strategists become your ears on the ground.\n\n Our experts monitor relevant hashtags and conversations, providing actionable insights to help you engage and nurture your audience. We also assess and manage overall user sentiment, ensuring your brand's reputation stays on track.",
        color: "#000000",
        url: "#",
        src: "images/Instagram-Listening.webp",
        points: [],
        },
        {
        title: "Audience Engagement Videos",
        description: "Instagram videos boast twice the engagement of other content types, making them a powerful tool for brand connection. From short, snappy Reels to in-depth IGTV videos, Instagram offers a variety of video options to suit different goals. Our content strategists work with you to select the ideal format for each audience and objective.\n\nUser engagement is key on Instagram. With users quickly scrolling through their feeds, you often have just a split second to capture attention. Engaging video content encourages users to pause, interact, and absorb your message. Let our team help you create scroll-stopping videos that resonate with viewers and elevate your brand's presence.",
        color: "#000000",
        url: "#",
        src: "images/Audience-Engagement-Videos.webp",
        points: [],
        },
        {
        title: "Instagram Ad Management",
        description: "We specialize in building impactful ads, pinpointing target audiences, and crafting competitive bidding strategies within Instagram's pay-per-click model. Leveraging Instagram's bidding algorithm, we ensure your ads appear in the right feeds and stories for maximum visibility and engagement.\n\n Using Facebook Ad Manager, we create precision campaigns tailored to your audience segments. Our expert strategists guide every step—from ad creation to audience targeting to bidding optimization. This service seamlessly integrates with other PPC platforms, allowing for a unified, powerful approach to paid social advertising across channels.",
        color: "#000000",
        url: "#",
        src: "images/Instagram-Ad-Management.webp",
        points: [], 
        },
    ];

    return (
        <div className="min-h-screen bg-black relative " ref={containerRef} >
        <h1 className={`text-[56px]  md:leading-[40px] md:leading-[50px] text-white md:tracking-[0.06em] ${monsterfont.className} text-center py- z-10 `}>
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
            className="relative w-full max-w-[1100px] h-[700px] md:h-[500px] rounded-[20px] p-4 md:p-8 flex flex-col border-[1px] border-[#fd6470] overflow-y-auto md:overflow-visible"
        >
            <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-8">
            <div className="flex-1 flex flex-col">
            <h2 className={`text-[36px] leading-[1.1] mb-4 text-left text-white font-helveticaneue font-[400] `}>{title}</h2>
            <p className="text-[15px] font-helveticaneue  leading-[20px] text-semi-white whitespace-pre-wrap">{description}</p>

                <ul className="list-disc pl-6 mt-4 text-sm md:text-base text-gray-400">
                {points.map((point, index) => (
                    <li key={index} className="mb-2">{point}</li>
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

    export default SmoothScrollStack;