// pages/index.js
'use client'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '600',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
    subsets: ['latin'],
    weight: '200',
    fallback: ["sans-serif"],
  });

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      title: "Smart Device Integration",
      description: "We seamlessly integrate your devices into smart ecosystems to optimize performance and connectivity.",
      image: "/images/portrait-person-ai-robot.jpg"
    },
    {
      title: "Custom IoT Software",
      description: "We build tailor-made software solutions that connect hardware and cloud systems effectively.",
      image: "/images/ai44.avif"
    },
    {
      title: "Wearable Tech Solutions",
      description: "From fitness trackers to medical wearables, we create solutions for real-time monitoring and interaction.",
      image: "/images/digital-environment-scene.jpg"
    },
    {
      title: "Automated QA & Testing",
      description: "Ensure reliability and stability with our robust IoT testing framework and automation solutions.",
      image: "/images/ai11.avif"
    },
    {
      title: "AI + IoT Integration",
      description: "Empower your IoT systems with AI capabilities for smarter decision-making and automation.",
      image: "/images/ai22.avif"
    },
    {
      title: "Industrial IoT (IIoT)",
      description: "We provide IIoT solutions to enhance productivity, safety, and efficiency in industrial environments.",
      image: "/images/ai33.avif"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Our IoT Services</title>
        <meta name="description" content="Explore IoT and AI-powered solutions for your business" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className={`text-[40px] leading-[44px] ${monsterfont.className}  text-white mb-4`}>Explore our IoT Service Offerings</h1>
            <p className="text-[18px] leading-[24px]  font-[500] text-semi-white font-helveticaneue">
              Discover innovative IoT and AI solutions designed to connect devices, streamline operations,
              and transform your business through intelligent automation and data-driven insights.
            </p>
          </div>

          {/* Main content - desktop layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - services grid */}
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 border rounded-lg cursor-pointer transition-all duration-300 ${
                    activeService === index 
                      ? 'border-blue-500  shadow-md shadow-blue-500' 
                      : 'border-gray-700 hover:border-gray-500 hover:shadow-md hover:shadow-blue-500'
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <h3 className="text-[20px] leading-[24px]  font-[700] text-white font-helveticaneue mb-4">{service.title}</h3>
                  <p className="text-[16px] leading-[20px]  font-[500]  font-helveticaneue text-semi-white">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Right side - changing image (hidden on mobile) */}
            <div className="hidden md:block w-full md:w-1/2 relative h-[600px] rounded-xl overflow-hidden">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeService === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative h-full w-full bg-gray-800 flex items-center justify-center">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
