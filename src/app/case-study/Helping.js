'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function KFCOptimizations() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const accordionData = [
    {
      id: 1,
      title: "Multiple order modes",
      description: "We added multiple ways for users to place orders both through the KFC food delivery app and in restaurants. For easy accessibility of the users, we brought the options of Delivery, Self-Pickup, Drive-Thru, Dine-In, and Carhop on the app home screen.",
      image: "/images/r1.webp"
    },
    {
      id: 2,
      title: "QR functionality for in-restaurant orders",
      description: "Our implementation of QR code scanning allows customers to quickly place orders while dining in.",
      image: "/kfc-qr-scan.jpg"
    },
    {
      id: 3,
      title: "Personalized recommendations",
      description: "We implemented an AI-driven recommendation system that analyzes past orders and preferences to suggest menu items tailored to each user.",
      image: "/kfc-personalization.jpg"
    },
    {
      id: 4,
      title: "Loyalty program integration",
      description: "Our team developed a comprehensive rewards system that tracks points, offers targeted promotions, and provides exclusive deals to loyal customers.",
      image: "/kfc-loyalty.jpg"
    }
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='min-h-screen bg-black'>
    <div className="max-w-[1100px] mx-auto px-4 py-8 p-[10px]">
      {/* Main Title */}
      <div className="text-start mb-10">
        <h1 className="text-[25px] leading-[35px] md:text-[50px] md:leading-[55px] font-bold text-whte mb-4">
          Helping KFC Achieve Fantabulous Results through
          <br />
          Continuous Development & Optimization
        </h1>
        <p className=" text-sm md:text-lg text-white mb-8 text-start">
          We executed the entire project in BOOT (Build, Operate, Optimize, Transfer) model. Once our team gained complete
          understanding of the client's vision for the product, we went on to build a solid foundation with the first KFC mobile app. Once
          the app met client's expectations, it was instantiated and extended to deploy in multiple markets.
        </p>
        <h2 className="md:text-2xl text-md font-semibold text-semi-white">
          Some important optimizations we did during Americana's KFC app development include:
        </h2>
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-8">
        {/* Left Side - Accordion Items */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
          {accordionData.map((item, index) => (
            <div key={item.id} className="mb-6">
              <button
                onClick={() => handleClick(index)}
                className={`text-left w-full font-bold text-lg md:text-xl mb-2 ${
                  activeIndex === index ? 'text-white' : 'text-semi-white pb-6 border-b '
                }`}
              >
                {item.title}
              </button>
              
              {/* Description appears below title when active */}
              {activeIndex === index && (
                <p className="text-semi-white mb-4 border-b pb-6">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
        
        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center md:mb-0 mb-[20px]">
          <div className="relative md:w-[400px] md:h-[300px] h-[200px] w-[300px] rounded-lg overflow-hidden">
            <Image
              src={accordionData[activeIndex].image}
              alt={accordionData[activeIndex].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg "
              priority
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}