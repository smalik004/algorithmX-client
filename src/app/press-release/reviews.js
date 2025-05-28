'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function ReviewsSection() {
  const [activeTab, setActiveTab] = useState('Phone');
  
  const tabContent = {
    Phone: {
      featuredReviews: [
        {
          id: 1,
          category: 'FEATURED POST',
          title: 'The new Moto G Stylus and G Power are surprisingly adept cameraphones',
          image: '/images/featured-post-01.jpg',
          rating: '8.1',
          url: '/reviews/oppo-find-x2-pro'
        },
        {
          id: 2,
          category: 'FEATURED POST',
          title: 'The new Moto G Stylus and G Power are surprisingly adept cameraphones',
          image: '/images/featured-post-01.jpg',
          rating: '8',
          url: '/reviews/moto-g-stylus-power'
        }
      ],
      regularReviews: [
        {
          id: 3,
          category: 'MOBILE',
          title: 'Motorola Moto E (2020) and Moto G Fast review: smartphone basics',
          image: '/images/post-tech-14.jpg',
          author: 'Niall Jones',
          date: 'Feb 27, 2024',
          readTime: '5 min read',
          rating: '7.4',
          url: '/reviews/motorola-moto-e-g-fast'
        },
        {
          id: 4,
          category: 'MOBILE',
          title: 'Dell XPS 15 (2020) Review: New Design, Familiar Problems',
          image: '/images/post-tech-12.jpg',
          author: 'Iris Meyer',
          date: 'Feb 27, 2024',
          readTime: '6 min read',
          rating: '7.8',
          url: '/reviews/dell-xps-15-2020'
        },
        {
          id: 5,
          category: 'MOBILE',
          title: "Sony's WF-sp800n Earbuds Are A Noise-canceling Alternative",
          image: '/images/post-tech-14.jpg',
          author: 'Rita Islam',
          date: 'Feb 27, 2024',
          readTime: '4 min read',
          rating: '8',
          url: '/reviews/sony-wf-sp800n'
        },
        {
          id: 6,
          category: 'MOBILE',
          title: "Fujifilm's Instax Mini LiPlay brings audio to the instant camera",
          image: '/images/post-tech-12.jpg',
          author: 'Kaizar Islam',
          date: 'Feb 27, 2024',
          readTime: '3 min read',
          rating: '8.5',
          url: '/reviews/fujifilm-instax-mini-liplay'
        }
      ],
      categories: [
        { 
          id: 'tech', 
          name: 'Tech',
          icon: '/images/category-image-02.jpg',
          url: '/category/tech'
        },
        { 
          id: 'style', 
          name: 'Style',
          icon: '/images/category-image-02.jpg',
          url: '/category/style'
        },
        { 
          id: 'travel', 
          name: 'Travel',
          icon: '/images/travel-icon.jpg',
          url: '/category/travel'
        },
        { 
          id: 'food', 
          name: 'Food',
          icon: '/images/food-icon.jpg',
          url: '/category/food'
        }
      ],
      featuredVideos: [
        {
          id: 1,
          title: 'With iOS 14, Apple is finally letting the iPhone home screen get complicated',
          image: '/images/post-md-01.jpg',
          url: '/videos/ios-14-home-screen'
        },
        {
          id: 2,
          title: 'A social network isn\'t built for us until the space and its technologies are diverse',
          image: '/images/post-md-01.jpg',
          url: '/videos/social-network-diversity'
        },
        {
          id: 3,
          title: 'I built my own camera with a Raspberry Pi 4',
          image: '/images/post-md-01.jpg',
          url: '/videos/raspberry-pi-camera-build'
        }
      ]
    },
    Laptops: {
      featuredReviews: [
        {
          id: 7,
          category: 'FEATURED POST',
          title: 'MacBook Pro 16-inch Review: The Best Mac in Years',
          image: '/images/macbook-pro.jpg',
          rating: '9.2',
          url: '/reviews/macbook-pro-16-inch'
        },
        {
          id: 8,
          category: 'FEATURED POST',
          title: 'Lenovo ThinkPad X1 Carbon: Business Excellence',
          image: '/images/thinkpad-x1.jpg',
          rating: '8.7',
          url: '/reviews/thinkpad-x1-carbon'
        }
      ],
      regularReviews: [
        {
          id: 9,
          category: 'LAPTOPS',
          title: 'Asus ROG Zephyrus G14: Portable Gaming Powerhouse',
          image: '/images/rog-zephyrus.jpg',
          author: 'James Roberts',
          date: 'Feb 25, 2024',
          readTime: '7 min read',
          rating: '8.9',
          url: '/reviews/asus-rog-zephyrus-g14'
        },
        {
          id: 10,
          category: 'LAPTOPS',
          title: 'Dell XPS 13 (2024): Refined Ultrabook Excellence',
          image: '/images/dell-xps-13.jpg',
          author: 'Sarah Chen',
          date: 'Feb 23, 2024',
          readTime: '5 min read',
          rating: '9.0',
          url: '/reviews/dell-xps-13-2024'
        }
      ],
      categories: [
        { 
          id: 'gaming', 
          name: 'Gaming',
          icon: '/images/gaming-icon.jpg',
          url: '/category/gaming'
        },
        { 
          id: 'workstation', 
          name: 'Workstation',
          icon: '/images/workstation-icon.jpg',
          url: '/category/workstation'
        },
        { 
          id: 'ultrabook', 
          name: 'Ultrabook',
          icon: '/images/ultrabook-icon.jpg',
          url: '/category/ultrabook'
        },
        { 
          id: 'convertible', 
          name: 'Convertible',
          icon: '/images/convertible-icon.jpg',
          url: '/category/convertible'
        }
      ],
      featuredVideos: [
        {
          id: 4,
          title: 'M2 MacBook Air vs Pro: Which should you buy?',
          image: '/images/macbook-video.jpg',
          url: '/videos/m2-macbook-comparison'
        },
        {
          id: 5,
          title: 'How to optimize Windows 11 for better performance',
          image: '/images/windows-11-video.jpg',
          url: '/videos/windows-11-optimization'
        },
        {
          id: 6,
          title: 'The best laptops for college students in 2024',
          image: '/images/college-laptops-video.jpg',
          url: '/videos/college-laptops-2024'
        }
      ]
    },
    Headphones: {
      featuredReviews: [
        {
          id: 11,
          category: 'FEATURED POST',
          title: 'Sony WH-1000XM5: The New King of Noise Cancelling',
          image: '/images/sony-wh1000xm5.jpg',
          rating: '9.5',
          url: '/reviews/sony-wh1000xm5'
        },
        {
          id: 12,
          category: 'FEATURED POST',
          title: 'Bose QuietComfort Ultra: Premium Comfort and Sound',
          image: '/images/bose-qc-ultra.jpg',
          rating: '9.0',
          url: '/reviews/bose-quietcomfort-ultra'
        }
      ],
      regularReviews: [
        {
          id: 13,
          category: 'HEADPHONES',
          title: 'Apple AirPods Pro 2: Refined Excellence',
          image: '/images/airpods-pro-2.jpg',
          author: 'Lisa Wang',
          date: 'Feb 20, 2024',
          readTime: '4 min read',
          rating: '8.8',
          url: '/reviews/airpods-pro-2'
        },
        {
          id: 14,
          category: 'HEADPHONES',
          title: 'Sennheiser Momentum 4: Battery Life Champion',
          image: '/images/sennheiser-momentum.jpg',
          author: 'Jack Peterson',
          date: 'Feb 18, 2024',
          readTime: '6 min read',
          rating: '8.5',
          url: '/reviews/sennheiser-momentum-4'
        }
      ],
      categories: [
        { 
          id: 'wireless', 
          name: 'Wireless',
          icon: '/images/wireless-icon.jpg',
          url: '/category/wireless'
        },
        { 
          id: 'gaming-audio', 
          name: 'Gaming',
          icon: '/images/gaming-audio-icon.jpg',
          url: '/category/gaming-audio'
        },
        { 
          id: 'studio', 
          name: 'Studio',
          icon: '/images/studio-icon.jpg',
          url: '/category/studio'
        },
        { 
          id: 'earbuds', 
          name: 'Earbuds',
          icon: '/images/earbuds-icon.jpg',
          url: '/category/earbuds'
        }
      ],
      featuredVideos: [
        {
          id: 7,
          title: 'Are $1000 headphones worth it? High-end audio explained',
          image: '/images/high-end-audio-video.jpg',
          url: '/videos/high-end-audio-explained'
        },
        {
          id: 8,
          title: 'The best noise-cancelling headphones for travel',
          image: '/images/travel-headphones-video.jpg',
          url: '/videos/travel-headphones-guide'
        },
        {
          id: 9,
          title: 'True wireless earbuds - what you need to know before buying',
          image: '/images/true-wireless-video.jpg',
          url: '/videos/true-wireless-earbuds-guide'
        }
      ]
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Reviews</h2>
      
      {/* Tabs */}
      <div className="flex space-x-4 mb-6 ">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            className={`py-2 px-6 rounded-t-lg transition-colors duration-300 ${
              activeTab === tab
                ? 'bg-white text-black border border-b-0 border-gray-200 font-semibold'
                : 'text-white hover:text-gray-900'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Top Featured Row - 2 equal columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {currentContent.featuredReviews.map((review) => (
          <Link 
            key={review.id}
            href={review.url} 
            className="block group overflow-hidden bg-white rounded-lg shadow-md h-full"
          >
            <div className="p-4">
              <span className="text-xs font-semibold text-red-500">{review.category}</span>
              <h3 className="text-xl text-black font-bold mt-1 group-hover:underline transition-all duration-300 decoration-2 decoration-gray-800">
                {review.title}
              </h3>
            </div>
            <div className="relative overflow-hidden h-64"> {/* Fixed height for equal sized images */}
              <div className="absolute top-2 left-2 bg-red-500 text-white font-bold py-1 px-2 text-sm rounded z-10">
                {review.rating}
              </div>
              <img 
                src={review.image} 
                alt={review.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </Link>
        ))}
      </div>
      
      {/* Lower Content Area - 75% left, 25% right */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column - 75% */}
        <div className="lg:col-span-3 space-y-4">
          {currentContent.regularReviews.map((review) => (
            <Link 
              key={review.id}
              href={review.url} 
              className="block group bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 relative overflow-hidden">
                <div className="absolute top-2 left-2 bg-red-500 text-white font-bold py-1 px-2 text-sm rounded z-10">
                  {review.rating}
                </div>
                <img 
                  src={review.image} 
                  alt={review.title}
                  className="w-full h-48 md:h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="md:w-2/3 p-4">
                <span className="text-xs font-semibold text-red-500">{review.category}</span>
                <h3 className="text-lg font-bold mt-1 text-black group-hover:underline transition-all duration-300">
                  {review.title}
                </h3>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span>{review.author}</span>
                  <span className="mx-2">•</span>
                  <span>{review.date}</span>
                  <span className="mx-2">•</span>
                  <span>{review.readTime}</span>
                </div>
                <div className="mt-3 flex space-x-2">
                  <button className="p-1 text-gray-400 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M15 8a3 3 0 11-6 0 3 3 0 016 0zm-3 4a6 6 0 00-6 6h12a6 6 0 00-6-6z" />
                    </svg>
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Right Column - 25% */}
        <div className="lg:col-span-1">
          {/* Categories Grid - with circular images on the left */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {currentContent.categories.map((category) => (
              <Link 
                key={category.id}
                href={category.url}
                className="flex items-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-3"
              >
                {/* Circular image on the left */}
                <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                  <img 
                    src={category.icon} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text on the right */}
                <span className="ml-3 font-medium text-black">{category.name}</span>
              </Link>
            ))}
          </div>
          
          {/* Featured Videos */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold mb-4 text-center text-black">Featured Videos</h3>
            <div className="space-y-4">
              {currentContent.featuredVideos.map((video) => (
                <Link key={video.id} href={video.url} className="block group">
                  <div className="relative overflow-hidden rounded-lg mb-2">
                    <img 
                      src={video.image} 
                      alt={video.title}
                      className="w-full h-32 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-80 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-sm font-medium group-hover:underline text-black">{video.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Banner at bottom */}
      <div className="mt-8 rounded-lg overflow-hidden">
        <Link href="/kitchen-appliances" className="block relative">
          <img 
            src="/images/banner-03.png" 
            alt="Kitchen Appliances" 
            className="w-full h-32 object-cover"
          />
         
        </Link>
      </div>
    </div>
  );
}