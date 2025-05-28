// components/TabbedContent.jsx
'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { id: 'accessibility', name: 'Accessibility' },
  { id: 'android-dev', name: 'Android Dev' },
  { id: 'blockchain', name: 'Blockchain' },
  { id: 'gadgets', name: 'Gadgets' },
];

// Sample content with realistic image URLs
const contentByCategory = {
  'accessibility': [
    {
      type: 'main',
      category: 'DESIGN',
      title: 'Get Ready To Up Your Creative Game With The New DJI Mavic Air 2',
      image: '/images/post-grid-01.jpg',
      author: 'Sarah Johnson',
      date: 'Mar 12, 2025',
      views: '245k Views',
      link: '/articles/dji-mavic-air-2'
    },
    {
      type: 'secondary',
      category: 'LIFESTYLE',
      title: 'Designing for all: The future of accessible interfaces',
      image: '/images/post-grid-07.jpg',
      link: '/articles/accessible-interfaces'
    },
    {
      type: 'secondary',
      category: 'TECH',
      title: 'How screen readers transform the digital experience',
      image: '/images/post-grid-07.jpg',
      link: '/articles/screen-readers'
    }
  ],
  'android-dev': [
    {
      type: 'main',
      category: 'CODE',
      title: 'Mastering Jetpack Compose: The Future of Android UI',
      image: '/images/post-grid-07.jpg',
      author: 'Alex Chen',
      date: 'Apr 5, 2025',
      views: '189k Views',
      link: '/articles/jetpack-compose'
    },
    {
      type: 'secondary',
      category: 'TUTORIAL',
      title: 'Building your first Android app with Kotlin',
      image: '/images/post-grid-07.jpg',
      link: '/articles/kotlin-android-app'
    },
    {
      type: 'secondary',
      category: 'DEV TOOLS',
      title: 'Android Studio tips that will boost your productivity',
      image: '/images/post-grid-07.jpg',
      link: '/articles/android-studio-tips'
    }
  ],
  'blockchain': [
    {
      type: 'main',
      category: 'CRYPTO',
      title: 'Understanding Web3: Beyond the Blockchain Hype',
      image: '/images/post-grid-07.jpg',
      author: 'Michael Wei',
      date: 'Mar 28, 2025',
      views: '320k Views',
      link: '/articles/understanding-web3'
    },
    {
      type: 'secondary',
      category: 'FINANCE',
      title: 'DeFi protocols reshaping traditional banking',
      image: '/images/post-grid-07.jpg',
      link: '/articles/defi-protocols'
    },
    {
      type: 'secondary',
      category: 'TECHNOLOGY',
      title: 'Smart contracts explained for non-developers',
      image: '/images/post-grid-07.jpg',
      link: '/articles/smart-contracts'
    }
  ],
  'gadgets': [
    {
      type: 'main',
      category: 'REVIEW',
      title: 'The Latest Foldable Phones: Are They Worth the Price?',
      image: '/images/post-grid-07.jpg',
      author: 'Emma Rodriguez',
      date: 'Apr 15, 2025',
      views: '275k Views',
      link: '/articles/foldable-phones'
    },
    {
      type: 'secondary',
      category: 'LIFESTYLE',
      title: 'The underrated design book that transformed the industry',
      image: '/images/post-grid-07.jpg',
      link: '/articles/design-book'
    },
    {
      type: 'secondary',
      category: 'TRAVEL',
      title: 'Apple reimagines the iPhone experience with iOS 18',
      image: '/images/post-grid-07.jpg',
      link: '/articles/ios-18'
    }
  ]
};

export default function TabbedContent() {
  const [activeCategory, setActiveCategory] = useState('accessibility');
  const activeContent = contentByCategory[activeCategory];

  return (
    <div className='bg-black'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Most Popular</h1>
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-md border ${
              activeCategory === category.id
                ? 'bg-gray-100 border-gray-300 text-black'
                : 'bg-white border-gray-200 hover:bg-gray-50 text-red-500'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main Article (Left Side - Full Width on Mobile) */}
        {activeContent.map((item, index) => 
          item.type === 'main' ? (
            <div key={index} className="lg:col-span-1 relative">
              <Link href={item.link} className="block h-full">
              <div className="relative  mb-[40px] md:mb-0 md:h-[540px] h-64 w-full overflow-hidden rounded-lg group">
  {/* Actual image implementation */}
  <div className="relative h-full w-full">
    <img
      src={item.image}
      alt={item.title}
      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
  </div>
</div>

                <div className="absolute bottom-[20px] left-[74px] md:-bottom-[20px]  md:left-[70px] p-2  md:p-6 w-3/4 bg-white rounded-lg shadow-md">
                    <span className="text-red-500 text-sm font-semibold">{item.category}</span>
                    <h2 className="md:text-xl text-black font-bold mt-1">{item.title}</h2>
                    
                    <div className="flex items-center mt-4">
                      <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                        {/* Author avatar placeholder - you can replace with real avatar */}
                        <img
                          src="/api/placeholder/40/40"
                          alt={item.author}
                          className="object-cover w-full h-full "
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-black font-medium">{item.author}</p>
                        <p className="text-xs text-gray-500">{item.date} • {item.views}</p>
                      </div>
                    </div>
                  </div>
              </Link>
            </div>
          ) : null
        )}
        
        {/* Right Side Column (Two Boxes Stacked) */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            {activeContent.map((item, index) => 
              item.type === 'secondary' ? (
                <Link key={index} href={item.link} className="block relative mb-16">
                 <div className="relative h-64 w-full overflow-hidden rounded-lg group">
  {/* Actual image implementation */}
  <div className="relative h-full w-full">
    <img
      src={item.image}
      alt={item.title}
      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
    />
  </div>
</div>

                  <div className="absolute bottom-0 right-6 w-2/3 bg-white p-4 rounded-lg shadow-md transform translate-y-[20%]">
                      <span className="text-red-500 text-sm font-semibold">{item.category}</span>
                      <h3 className="text-lg text-black font-semibold mt-1">{item.title}</h3>
                    </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}