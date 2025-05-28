// pages/index.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FeaturedVideo() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Featured Videos</title>
        <meta name="description" content="Featured videos showcase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-[1300px] mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8">Featured Video</h1>
        
        {/* Main content grid - 50/50 split on desktop */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Large featured video on the left - 50% width on desktop */}
          <div className="w-full lg:w-1/2">
            <FeaturedCard 
              category="CAREERS"
              title="Security isn't just a technology problem it's about design, too"
              image="/images/post-dark-01.jpg"
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
                image="/images/post-dark-04.jpg"
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
                image="/images/post-dark-03.jpg"
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
      <div className="rounded-lg overflow-hidden  flex flex-col h-full">
        {/* Image takes up full width and more height */}
        <div className="relative  h-48 md:h-[525px] w-full overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        
        {/* Text content */}
        <div className="p-6  flex-grow">
          <div className="text-red-500 text-sm font-semibold mb-2">{category}</div>
          <h2 className="text-2xl font-bold mb-4 group-hover:underline decoration-2 decoration-white transition-all duration-300 ease-in-out">
            {title}
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
        <div className="p-4  flex-grow">
          <div className="text-red-500 text-sm font-semibold mb-2">{category}</div>
          <h2 className="text-lg font-bold group-hover:underline decoration-2 decoration-white transition-all duration-300 ease-in-out">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}