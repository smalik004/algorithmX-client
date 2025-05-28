'use client'
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TopVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const playVideo = () => {
    setIsPlaying(true);
  };
  
  const middleColumnItems = [
    {
      id: 1,
      title: 'You will begin to realise',
      image: '/images/02.jpg',
      comments: 5,
      date: '12 Aug',
      link: '/blog/you-will-begin-to-realise'
    },
    {
      id: 2,
      title: 'Step out on to the path',
      image: '/images/05.jpg',
      comments: 5,
      date: '12 Aug',
      link: '/blog/step-out-on-to-the-path'
    },
    {
      id: 3,
      title: 'Briefly imagine that you',
      image: '/images/02.jpg',
      comments: 5,
      date: '12 Aug',
      link: '/blog/briefly-imagine-that-you'
    },
    {
      id: 4,
      title: 'You continue doing what',
      image: '/images/02.jpg',
      comments: 5,
      date: '12 Aug',
      link: '/blog/you-continue-doing-what'
    }
  ];
  
  const rightColumnItems = [
    {
      id: 1,
      number: '01',
      title: 'Walk out 10 years into',
      author: 'adimn',
      timeAgo: '3 months ago',
      link: '/videos/walk-out-10-years'
    },
    {
      id: 2,
      number: '02',
      title: 'Absorb every aspect of',
      author: 'adimn',
      timeAgo: '2 months ago',
      link: '/videos/absorb-every-aspect'
    },
    {
      id: 3,
      number: '03',
      title: 'Motivation In Life',
      author: 'adimn',
      timeAgo: '9 months ago',
      link: '/videos/motivation-in-life'
    },
    {
      id: 4,
      number: '04',
      title: 'Are You Famous Or Focused',
      author: 'adimn',
      timeAgo: '5 months ago',
      link: '/videos/are-you-famous'
    }
  ];

  return (
    <div>
      <Head>
        <title>3-Column Layout with Video Player</title>
        <meta name="description" content="A responsive 3-column layout with video player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Video Player */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative">
              {!isPlaying ? (
                <div className="relative">
                  <img 
                    src="/images/05.jpg" 
                    alt="Video thumbnail" 
                    className="w-full h-auto"
                  />
                  <button 
                    onClick={playVideo}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-4 shadow-lg hover:bg-opacity-90 transition-all"
                    aria-label="Play video"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <div className="absolute bottom-2 right-2 flex items-center space-x-2">
                    <span className="bg-black bg-opacity-75 text-white px-2 py-1 text-sm rounded">03:40</span>
                    <span className="bg-red-600 text-white px-2 py-1 text-sm rounded">HD</span>
                  </div>
                </div>
              ) : (
                <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                  <video
                    className="absolute top-0 left-0 w-full h-full"
                    controls
                    autoPlay
                    muted
                  >
                    <source src="/images/rr.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
            <div className="p-4">
              <Link href="/lookbook" className="text-red-600 hover:underline text-sm">Lookbook</Link>
              <h2 className="text-2xl font-bold mt-2">The other virtues practice</h2>
              <p className="text-white mt-2">Use a past defeat as a motivator. Remind yourself.</p>
              <div className="mt-4 text-sm text-white">
                By adimn / 8 months ago
              </div>
            </div>
          </div>

          {/* Middle Column - Image/Title List */}
          <div className="space-y-6">
            {middleColumnItems.map((item) => (
              <Link key={item.id} href={item.link} className="flex rounded-lg overflow-hidden hover:text-blue-500 transition-shadow">
                <div className="w-1/3 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="mt-4 flex items-center text-white text-sm">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {item.comments}
                    </span>
                    <span className="flex items-center ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Column - Top Videos List */}
          <div className="p-6 bg-[#000]">
            <h2 className="text-2xl font-bold mb-6">Top view video</h2>
            <div className="space-y-6">
              {rightColumnItems.map((item) => (
                <Link key={item.id} href={item.link} className="flex items-start  hover:hover:text-blue-500 p-2 rounded transition-colors">
                  <div className="text-4xl font-bold text-white mr-4">{item.number}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-white text-sm mt-1">
                      By {item.author} / {item.timeAgo}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
