// pages/index.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FeaturedHome() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Featured Videos</title>
        <meta name="description" content="Featured videos showcase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-[1300px] mx-auto px-4 py-10 pt-[80px]">
       
        
        {/* Main content grid - 50/50 split on desktop */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Large featured video on the left - 50% width on desktop */}
          <div className="w-full lg:w-1/2">
            <FeaturedCard 
              category="CAREERS"
              title="Security isn't just a technology problem it's about design, too"
              image="/images/post-tect-01.jpg"
              author="Ismat Jahan"
              date="Feb 17, 2019"
              readTime="3 min read"
              href="/security-design"
            />
          </div>
          
          {/* 2x2 grid on the right - 50% width on desktop */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <VideoCard 
                category="DESIGN"
                title="Get Ready To Up Your Creative Game With The"
                image="/images/post-tect-02.jpg"
                href="/creative-game"
              />
              
              <VideoCard 
                category="LEADERSHIP"
                title="Traditional design won't save us in the COVID-19 era"
                image="/images/post-dark-03.jpg"
                href="/traditional-design"
              />
              
              <VideoCard 
                category="PRODUCT UPDATES"
                title="New: Freehand Templates, built for the whole team"
                image="/images/post-dark-03.jpg"
                href="/freehand-templates"
              />
              
              <VideoCard 
                category="COLLABORATION"
                title="The 1 tool that helps remote teams collaborate better"
                image="/images/post-tect-02.jpg"
                href="/collaboration-tool"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Featured Card Component - The larger card on the left
function FeaturedCard({ category, title, image, author, date, readTime, href }) {
  return (
    <Link href={href} className="block group h-full">
      <div className="rounded-lg overflow-hidden flex flex-col h-full">
        {/* Image takes up full width with text overlay */}
        <div className="relative h-60 md:h-[640px] w-full overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          
          {/* Text content overlaid on the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col justify-end">
            <div className="text-red-500 text-sm font-semibold mb-2">{category}</div>
            <h2 className="text-md md:text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white bg-no-repeat bg-bottom bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-all duration-500">
                {title}
              </span>
            </h2>
            
            <div className="flex items-center text-sm text-gray-400">
              <span className="mr-2">{author}</span>
              <span className="mr-2">•</span>
              <span className="mr-2">{date}</span>
              <span className="mr-2">•</span>
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Video Card Component - The smaller cards in the 2x2 grid
function VideoCard({ category, title, image, href }) {
  return (
    <Link href={href} className="block group h-full">
      <div className="rounded-lg overflow-hidden flex flex-col h-full">
        {/* Image section - fill width, fixed height */}
        <div className="relative h-48 w-full overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        
        {/* Text content */}
        <div className="p-4 flex-grow">
          <div className="text-red-500 text-sm font-semibold mb-2">{category}</div>
          <h2 className="text-lg font-bold">
            <span className="bg-gradient-to-r from-white to-white bg-no-repeat bg-bottom bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-all duration-500">
              {title}
            </span>
          </h2>
        </div>
      </div>
    </Link>
  );
}