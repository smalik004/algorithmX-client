"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function KFCOptimizations({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [accordionData, setAccordionData] = useState([]);

  useEffect(() => {
    if (data && data.optimizationPointers) {
      try {
        // Parse the JSON string from optimizationPointers
        const parsedPointers = JSON.parse(data.optimizationPointers);

        // Transform the data to match the expected format
        const transformedData = parsedPointers.map((pointer, index) => ({
          id: pointer.id || index + 1,
          title: pointer.title || `Optimization ${index + 1}`,
          description:
            pointer.description ||
            data.optimizationDesc ||
            "Description not available",
          image: pointer.img,
        }));

        setAccordionData(transformedData);
      } catch (error) {
        console.error("Error parsing optimization pointers:", error);
        // Fallback to empty array or default data
        setAccordionData([]);
      }
    }
  }, [data]);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  // Don't render if no data
  if (!data || accordionData.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Loading optimizations...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1100px] mx-auto px-4 py-8 p-[10px]">
        {/* Main Title */}
        <div className="text-start mb-10">
          <h1 className="text-[25px] leading-[35px] md:text-[50px] md:leading-[55px] font-bold text-white mb-4">
            {data.optimizationTitle ||
              "Helping KFC Achieve Fantabulous Results through Continuous Development & Optimization"}
          </h1>
          <p className="text-sm md:text-lg text-white mb-8 text-start">
            {data.optimizationDesc ||
              "We executed the entire project in BOOT (Build, Operate, Optimize, Transfer) model. Once our team gained complete understanding of the client's vision for the product, we went on to build a solid foundation with the first KFC mobile app."}
          </p>
          <h2 className="md:text-2xl text-md font-semibold text-semi-white">
            Some important optimizations we did during development include:
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
                    activeIndex === index
                      ? "text-white"
                      : "text-semi-white pb-6 border-b"
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
              {accordionData[activeIndex] && (
                <Image
                  src={accordionData[activeIndex].image}
                  alt={accordionData[activeIndex].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
