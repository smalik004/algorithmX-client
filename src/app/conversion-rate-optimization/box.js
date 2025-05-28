import React from 'react';
import Image from 'next/image';
import { Montserrat } from "next/font/google";


const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});


const FeaturesSection = () => {
  const features = [
    {
      title: "Get a dedicated, long-term partner",
      description: "Being the best CRO companies in USA, when you work with us, we will give you one account manager who will be committed to understand your business and goals. The goal of our conversion rate optimization agency is to team up with you acting as an extension of your in-house team, ensuring we are aligned and provide constant support in reaching your objectives.",
      imageUrl: "/your-image-1.jpg" // You'll add your image path here
    },
    {
      title: "Receive a custom strategy",
      description: "Our conversion rate optimization services create custom strategies for every client, avoiding generic approaches that are designed to fit all. At AlgorithmX, we focus on delving deep to fully understand your business, industry ecosystem, and goals in order to develop a personalized marketing strategy that suits your requirements well.",
      imageUrl: "/your-image-2.jpg"
    },
    {
      title: "Deliver bottom-line results",
      description: "As one of the premier CRO companies for small business, we work towards achieving results that enhance your profitability while at the same time contributing significantly towards your business's key objectives. This has led to numerous leads being generated facilitating over billions of dollars in revenues for our clients. We are eager to accelerate your business by utilizing our expertise.",
      imageUrl: "/your-image-3.jpg"
    },
    {
      title: "Stay ahead of the competition",
      description: "By partnering with our top-tier conversion rate optimization agency, you have the support of the most exceptional digital marketing teams globally that consists of a variety of digital marketing experts with specialization in different areas, always committed to improving their skill sets.",
      imageUrl: "/your-image-4.jpg"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-800  p-6 flex flex-col h-fit">
              <div className="mb-4 w-12 h-12 relative">
                <Image
                  src={feature.imageUrl}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="rounded"
                />
              </div>
              <h2 className={`text-[24px] leading-[1.1] mb-[16px] mt-[16px]  ${monsterfont.className} `}>
                {feature.title}
              </h2>
              <p className={`text-[15px] leading-[24px]  font-[400] font-[Helvetica] text-semi-white `}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;