'use client';
import { useState } from 'react';

export default function KFCResults() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const results = [
    {
      id: 1,
      number: "01",
      highlight: "22% increase",
      description: "in conversion rate",
      image: "/images/r1.webp" // Replace with actual image paths
    },
    {
      id: 2,
      number: "02",
      highlight: "4.5 average rating",
      description: "across locations on both the Play Store and App Store",
      image: "/kfc-app-2.jpg"
    },
    {
      id: 3,
      number: "03",
      highlight: "Over 50%",
      description: "of the total orders coming through app",
      image: "/kfc-app-3.jpg"
    },
    {
      id: 4,
      number: "04",
      highlight: "Over 60%",
      description: "increase in repeat purchases across channels",
      image: "/kfc-app-4.jpg"
    }
  ];

  return (
    <div className='bg-black min-h-screen'>
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        The result of the KFC-Appinventiv partnership led to the creation of mobile applications that witnessed
      </h1>
      
      <div className="flex flex-col-reverse md:flex-row gap-8">
        {/* Results List - left side for both mobile and desktop */}
        <div className="w-full md:w-1/2 space-y-6">
          {results.map((result, index) => (
            <div 
              key={result.id}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer transition-all duration-300 border-b border-gray-300 pb-6 ${
                activeIndex === index 
                  ? ' p-4 text-white' 
                  : 'text-gray-500 hover:text-white  p-4'
              }`}
            >
              <div className="flex items-start">
                <span className="text-lg mr-4">{result.number}.</span>
                <div>
                  <span className="text-xl font-bold">
                    {result.highlight}
                  </span>{' '}
                  <span>
                    {result.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image section - right side for both mobile and desktop */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className=" w-full max-w-sm aspect-[5/4] ">
            <img 
              src={results[activeIndex].image || "https://placehold.co/400x600/000000/ffffff?text=KFC+App"} 
              alt={`KFC App - ${results[activeIndex].highlight}`}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}