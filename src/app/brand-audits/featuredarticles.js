// pages/index.js
'use client'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Featuredarticle() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title className='text-white'>Outdoor Adventure Blog</title>
        <meta name="description" content="Featured outdoor adventure articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Featured Articles</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Two Stacked Articles */}
          <div className="flex flex-col space-y-6">
            {/* First Article Card */}
            <Link href="/ads-audit" className="block relative h-72 md:h-80 rounded-lg overflow-hidden shadow-lg group">
              <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110">
                <Image 
                  src="/images/explore-image-8.jpg"
                  alt="Tent under night sky"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <div className="backdrop-blur-sm bg-black/30 p-4 rounded-lg text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">Tent Talks: Outdoor Adventures Unleashed</h2>
                  <div className="flex items-center justify-center text-gray-200 text-sm">
                    <span>By Mike Aiden</span>
                    <span className="mx-2">•</span>
                    <span>January 25, 2025</span>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Second Article Card */}
            <Link href="/articles/sun-sand-and-serenity-beach-bliss" className="block relative h-72 md:h-80 rounded-lg overflow-hidden shadow-lg group">
              <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110">
                <Image 
                  src="/images/explore-image-8.jpg"
                  alt="Beach at sunset with palm trees"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <div className="backdrop-blur-sm bg-black/30 p-4 rounded-lg text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">Sun, Sand, and Serenity: Beach Bliss</h2>
                  <div className="flex items-center justify-center text-gray-200 text-sm">
                    <span>By Mike Aiden</span>
                    <span className="mx-2">•</span>
                    <span>January 20, 2025</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Right Column - Full Height Article */}
          <Link href="/articles/why-its-worth-hiking-the-john-muir-trail" className="block relative h-[20rem] md:h-[41.4rem] rounded-lg overflow-hidden shadow-lg group">
            <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110">
              <Image 
                src="/images/explore-image-10.jpg" 
                alt="Snow-capped mountain range"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <div className="backdrop-blur-sm bg-black/30 p-4 rounded-lg text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Why it's Worth Hiking The John Muir Trail</h2>
                <div className="flex items-center justify-center text-gray-200 text-sm">
                  <span>By Mike Aiden</span>
                  <span className="mx-2">•</span>
                  <span>January 19, 2025</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}