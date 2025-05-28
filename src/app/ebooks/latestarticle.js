// pages/index.js
'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function LatestArticles() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'Historic Gems: Discovering Ancient City Secrets',
      category: 'HISTORY',
      excerpt: 'Unearth the mysteries of ancient cities with "Historic Gems," where each cobblestone and ruin tells tales of bygone eras. Embark on a journey...',
      date: 'January 15, 2025',
      author: 'Mike Aiden',
      image: '/images/explore-image-17.jpg',
    },
    {
      id: 2,
      title: 'Wanderlust Chronicles: Trails of Discovery',
      category: 'HIKING',
      excerpt: 'Trails of Discovery" invites adventurers on an exhilarating journey, hidden wonders and untold stories. Immerse yourself in captivating landscapes...',
      date: 'January 14, 2025',
      author: 'Mike Aiden',
      image: '/images/explore-image-23.jpg',
    },
    {
      id: 3,
      title: 'Urban Exploration: Hidden Corners of Metropolis',
      category: 'TRAVEL',
      excerpt: 'Discover the secret alleyways and underground gems that make city exploration an adventure unlike any other...',
      date: 'January 10, 2025',
      author: 'Mike Aiden',
      image: '/images/explore-image-17.jpg',
    },
    {
      id: 4,
      title: 'Coastal Escapes: Where Ocean Meets Adventure',
      category: 'BEACH',
      excerpt: 'The rhythmic crashing of waves, golden sands beneath your feet, and endless horizons that call to the wandering soul...',
      date: 'January 8, 2025',
      author: 'Mike Aiden',
      image: '/images/explore-image-23.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className='max-w-[1300px] mx-auto'>
        <Head>
          <title>Travel Blog</title>
          <meta name="description" content="Join Mike Aiden on his travel adventures around the world" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:gap-8">
            
            {/* Left Column - Blog Posts */}
            <div className="w-full md:w-2/3 order-2 md:order-1">
              <h1 className="text-4xl font-bold text-white mb-8">Latest Articles</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                    <Link href={`/blog/${post.id}`} className="block">
                      <div className="relative overflow-hidden h-52">
                        <div className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 hover:scale-110"
                          style={{ backgroundImage: `url(${post.image})` }}>
                        </div>
                      </div>
                    </Link>

                    <div className="p-6">
                      <div className="uppercase text-xs font-semibold tracking-wide text-gray-500 mb-1">
                        {post.category}
                      </div>

                      <Link href={`/blog/${post.id}`} className="block">
                        <h2 className="text-xl font-bold text-gray-800 mb-2 group">
                          <span className="inline-block transform transition-all duration-300 group-hover:text-blue-600 group-hover:translate-x-1">
                            {post.title}
                          </span>
                        </h2>
                      </Link>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-sm text-gray-500">
                        <span>By {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form (Sticky) */}
            <div className="w-full md:w-1/3 mb-10 md:mb-0 order-1 md:order-2">
              <div 
                className={`bg-blue-50 p-8 rounded-lg shadow-sm ${
                  scrollY > 120 ? 'md:sticky md:top-[120px]' : ''
                } transition-all duration-300`}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Me</h2>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
