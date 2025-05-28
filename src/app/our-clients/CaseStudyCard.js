// components/D1CaseStudyCard.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function D1CaseStudyCard({ study }) {
  return (
    <Link href={`/case-studies/${study.id}`} className="block mb-8">
      <div className="relative overflow-hidden rounded-lg h-96 bg-gradient-to-r from-gray-900 to-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover opacity-60" 
            loop 
            muted
            autoPlay
            playsInline
          >
            <source src={study.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Logo */}
        <div className="absolute top-8 left-8 z-10">
          <Image 
            src="/images/kfc-logo.png" 
            alt="Company Logo" 
            width={120} 
            height={50} 
          />
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <h2 className="text-xl md:text-2xl font-bold mb-6 max-w-md">
            {study.title}
          </h2>
          
          {/* Metrics */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex flex-wrap gap-4 md:gap-8 mb-4 md:mb-0">
              {study.metrics.map((metric, index) => (
                <div key={index} className="border-l border-gray-500 pl-4">
                  <div className="text-xl md:text-2xl font-bold">{metric.value}</div>
                  <div className="text-xs md:text-sm text-gray-300">{metric.label}</div>
                </div>
              ))}
            </div>
            
            {/* View Case Study Button */}
            <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition w-full md:w-auto text-center">
              View Case Study
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

// components/D3CaseStudyCard.js
import React from 'react';
import Link from 'next/link';

export default function D3CaseStudyCard({ study }) {
  return (
    <Link href={`/case-studies/${study.id}`} className="block">
      <div className="relative overflow-hidden rounded-lg h-80 bg-gradient-to-r from-gray-900 to-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover opacity-60" 
            loop 
            muted
            autoPlay
            playsInline
          >
            <source src={study.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h2 className="text-lg md:text-xl font-bold mb-4 max-w-sm">
            {study.title}
          </h2>
          
          {/* Metrics */}
          <div className="flex flex-wrap gap-4">
            {study.metrics.slice(0, 2).map((metric, index) => (
              <div key={index} className="border-l border-gray-500 pl-3">
                <div className="text-lg font-bold">{metric.value}</div>
                <div className="text-xs text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

// components/D4CaseStudyCard.js
import React from 'react';
import Link from 'next/link';

export default function D4CaseStudyCard({ study }) {
  return (
    <Link href={`/case-studies/${study.id}`} className="block mb-8">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden bg-gray-900">
        {/* Video on the left */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <video 
            className="w-full h-full object-cover" 
            loop 
            muted
            autoPlay
            playsInline
          >
            <source src={study.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Content on the right */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">{study.title}</h2>
            <div className="text-sm text-gray-400 mb-4">
              <span className="mr-3">{study.industry}</span>
              <span className="mr-3">•</span>
              <span>{study.region}</span>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="flex flex-wrap gap-6 mt-4">
            {study.metrics.map((metric, index) => (
              <div key={index} className="border-l border-gray-500 pl-4">
                <div className="text-xl font-bold">{metric.value}</div>
                <div className="text-xs text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

// components/CTABanner.js
import React from 'react';
import Image from 'next/image';

export default function CTABanner() {
  return (
    <div className="rounded-lg overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 p-8 mb-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Add your brand's success story to our exhaustive global list of elite brands</h2>
      <div className="flex justify-center items-center gap-8 mb-8">
        <Image src="/images/kfc-logo.png" alt="KFC" width={80} height={40} />
        <Image src="/images/ikea-logo.png" alt="IKEA" width={80} height={40} />
        <Image src="/images/adidas-logo.png" alt="Adidas" width={80} height={40} />
        <Image src="/images/dominos-logo.png" alt="Dominos" width={80} height={40} />
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium">
        Join the Club
      </button>
    </div>
  );
}


