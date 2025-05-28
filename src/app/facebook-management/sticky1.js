'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Montserrat } from 'next/font/google';

    const monsterfont = Montserrat({
    subsets: ['latin'],
    weight: '100',
    });
    const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "400",
    });

const SmoothScrollStack = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const cards = [
    {
      title: "Social Media Management",
      description:
        "At AlgorithmX, we offer flexible, tailored social media management services to meet your business needs. Whether you require full-service Facebook marketing or help with specific tasks, we’ve got you covered. We can build your social profiles from scratch, managing everything from setting up page roles to crafting engaging copy for your Business Page. Our team customizes notifications, organizes page tabs, and promotes your page across various platforms, including your website. If you already have an established presence, we can enhance it through optimization:",
      color: "#000000", // Black background for the box
      url: "#",
      src: "images/Social-Media-Management.webp",
      points: [
        "Setting strategic goals tailored to your business objectives.",
        "Refining your target audience with advanced tools like Audience Insights.",
        "Optimizing your Business Page copy for maximum engagement.",
        "Recommending updates for your About page to ensure clarity and relevance.",
        "Adding calls-to-action to drive interaction and conversions.",
        "Helping you build a loyal follower base.",
        "Developing a consistent posting schedule.",
        "Creating and sharing engaging content—stories, links, photos, and videos.",
        "Collaborating with other brands to boost visibility.",
        "Actively responding to comments and fostering audience relationships.",
      ],
    },
    {
      title: "Social Engagement Videos",
      description: "Video content is king on Facebook. Our in-house video production team creates scroll-stopping videos that grab attention and drive interaction. Whether it's 30- to 45-second clips for your feed or longer product demos and live events, we’ve got your video content covered. Whether it’s a quick explainer, product demo, or live event coverage, we ensure your Facebook video content stands out in crowded News Feeds. Our video strategy extends beyond Facebook. We help integrate your videos across other platforms like YouTube, your website, and social media channels, creating a cohesive and widespread visual presence for your brand.",
      color: "#000000", // Black background for the box
      url: "#",
      src: "images/Social-Engagement-Videos.webp",
      points: [
      ],
    },
    {
      title: "Social Media Advertising Management",
      description: "Facebook Ad management is one of our specialties at AlgorithmX. From concept to execution, we manage every aspect of your ad campaigns using Facebook’s Ad Manager and Power Editor. We’re pros at navigating Facebook’s ad tools. From Ad Manager to Power Editor, we optimize your ads to reach the right audience and drive conversions. We handle everything—from ad copy to landing pages—ensuring your ads are set up for maximum return on investment.",
      color: "#000000", // Black background for the box
      url: "#",
      src: "images/Social-Media-Advertising-Management.webp",
      points: [
      ],
    },
    {
      title: "Social Listening",
      description: "Stay connected to your audience. Use advanced tools to monitor brand mentions and sentiment, keeping you in tune with what your audience is saying. We:",
      color: "#000000", // Black background for the box
      url: "#",
      src: "images/Social-Listening.webp",
      points: [
        "Identify Key Conversations: Spot trends and opportunities for engagement.",
        "Improve Reputation Management: Handle positive and negative feedback to maintain a strong brand image.",
        "Influencer Opportunities: Find influencers to collaborate with and grow your brand visibility.",
      ],
    },
    {
      title: "Social Media Content Creation and Management",
      description: "Social media is about building relationships with your audiences. At AlgorithmX, we don't just distribute content; we engage directly with your audience to create meaningful connections and foster brand loyalty. We specialize in managing contests and user-generated content campaigns that grow your follower base and boost engagement with your current audience. Simple, effective, and designed to deepen relationships.",
      color: "#000000", // Black background for the box
      url: "#",
      src: "images/Social-Media-ConteNt-Creation-and-Management.webp",
      points: [
      ],
    },
    {
      title: "Reporting for Your Social Media Campaign",
      description: "Facebook marketing needs to be aligned with your business goals, whether you’re looking to drive website traffic, generate leads, or increase customer satisfaction. Our Facebook marketing strategists develop benchmark reports and track key metrics every month, including:",
      color: "#000000", // Black background for the box
      url: "#",
      src: "images/Reporting-for-Your-Social-Media-Campaign.webp",
      points: [
        "Impressions.",
        "Reach",
        "Likes",
        "Shares",
        "Comments",
        "Facebook referral traffic.",
        "Follows",
        "Video metrics",
      ], //want description below point also
    },
  ];

  return (
    <div className="min-h-screen bg-black relative" ref={containerRef}>
      <h1 className={`text-[56px] text-white md:leading-[40px] md:leading-[50px] md:tracking-[0.06em] ${monsterfont.className} text-center py-4 z-10`}>
  BOOST YOUR BRAND
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
    <div ref={cardRef} className="h-screen sticky top-0 flex items-center justify-center px-4 md:px-8">
      <motion.div
        style={{
          backgroundColor: color,
        }}
         className="relative w-full max-w-[1100px] h-[700px] md:h-[600px] rounded-[20px] p-4 md:p-8 flex flex-col border-[1px] border-[#fd6470] overflow-y-auto md:overflow-visible"
      >
        <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-8">
          <div className="flex-1 flex flex-col">
          <h2 className={`text-[36px] leading-[1.1] mb-4 text-left text-white   font-helveticaneue font-[400] `}>{title}</h2>
          <p className="text-[15px] font-helveticaneue leading-[20px] text-semi-white whitespace-pre-wrap">{description}</p>

            {/* Bullet points list */}
            <ul className="list-disc pl-4 text-[15px] font-helveticaneue leading-[24px] text-semi-white ">
              {points.map((point, index) => (
                <li key={index} className="mb-0">{point}</li>
              ))}
            </ul>

            {/* Additional description for last box */}
            {title === "Reporting for Your Social Media Campaign" && (
              <p className="mt-4 text-sm text-gray-400">
                We create custom reports for special initiatives like contests and user-generated content campaigns. These reports are continuously refined to improve your strategy, helping you get better results and higher ROI from your Facebook efforts. Plus, the insights we gather from Facebook fuel growth across other digital marketing channels, ensuring a cohesive, data-driven strategy for your business.
              </p>
            )}
          </div>
          <div className="relative flex-1 min-h-[200px] md:min-h-0  ">
            <div className="relative w-full h-full">
              <img src={src} alt={title} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


export default SmoothScrollStack;
