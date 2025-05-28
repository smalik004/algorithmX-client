// pages/index.js
import Link from 'next/link';
import Image from 'next/image';

export default function GuidesHome() {
  // Sample data - replace with your actual data
  const featuredArticle = {
    image: "/images/news-1.jpg",
    title: "Art of Traditional African Fashion",
    subtitle: "A Celebration of Color",
    timestamp: "8 Hours ago",
    category: "Global Impact",
    link: "/articles/traditional-african-fashion"
  };

  const latestPosts = [
    {
      id: 1,
      image: "/images/news-thumb-1.png",
      title: "Breaking: Shocking Political Events Changing the World",
      timestamp: "2 Hours ago",
      category: "Chat GPT",
      link: "/ebooks"
    },
    {
      id: 2,
      image: "/images/news-thumb-1.png",
      title: "Viral Health Trends: What's Fact and What's Fiction?",
      timestamp: "9 Hours ago",
      category: "Trending",
      link: "/articles/viral-health-trends"
    },
    {
      id: 3,
      image: "/images/news-thumb-1.png",
      title: "Must-See Viral Videos: Trending Clips You Can't Miss",
      timestamp: "6 Hours ago",
      category: "Lifestyle",
      link: "/articles/viral-videos"
    },
    {
      id: 4,
      image: "/images/news-thumb-1.png",
      title: "Insider Secrets: Behind the Scenes of Major News Events",
      timestamp: "4 Hours ago",
      category: "Global Impact",
      link: "/articles/insider-secrets"
    }
  ];

  return (
    <div className='bg-black pt-[100px] '>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Featured Article - Left side on desktop, top on mobile */}
        <div className="w-full lg:w-2/3 relative">
          <div className="relative h-96 lg:h-full overflow-hidden rounded-lg">
            <Image 
              src={featuredArticle.image} 
              alt={featuredArticle.title}
              layout="fill"
              objectFit="cover"
              priority
            />
            
            {/* Time and Category */}
            <div className="absolute md:top-[320px] top-[180px] left-0 bg-yellow-400 text-black px-4 py-2 flex items-center gap-2">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {featuredArticle.timestamp}
              </span>
              <span className="mx-2">|</span>
              <span>{featuredArticle.category}</span>
            </div>
            
            {/* Title and Subtitle */}
            <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white p-4">
              <Link href={featuredArticle.link}>
                <h2 className="text-4xl font-bold mb-2">{featuredArticle.title}</h2>
                <h3 className="text-2xl">{featuredArticle.subtitle}</h3>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Latest Posts - Right side on desktop, bottom on mobile */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
          <div className="space-y-6">
            {latestPosts.map(post => (
              <div key={post.id} className="flex gap-4">
                <div className="relative h-24 w-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.timestamp}
                    </span>
                    <span className="mx-2">|</span>
                    <span className="text-blue-600">{post.category}</span>
                  </div>
                  
                  <Link href={post.link} className="block">
                    <h3 className="font-bold text-lg hover:text-blue-600 transition-colors">{post.title}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}