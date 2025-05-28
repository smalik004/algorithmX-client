// pages/index.js
'use client'
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Sample data for different tabs
const tabsData = {
  "Accessibility": [
    {
      category: "MOBILE",
      title: "OnePlus Nord hands-on: Strong features at a tempting price",
      image: "/images/post-tech-06.jpg",
      link: "/mobile/oneplus-nord"
    },
    {
      category: "ACCESSORIES",
      title: "The best accessories for your new iPad",
      image: "/images/post-tech-07.jpg",
      link: "/accessories/ipad"
    },
    {
      category: "BUSINESS",
      title: "Chinese EV startups Byton and Nio received paycheck",
      image: "/api/placeholder/200/150",
      link: "/business/ev-startups"
    },
    {
      category: "GOOGLE",
      title: "How to personalize your Google Chrome homepage with GIF",
      image: "/api/placeholder/200/150",
      link: "/google/chrome-personalization"
    },
    {
        category: "GOOGLE",
        title: "How to personalize your Google Chrome homepage with GIF",
        image: "/api/placeholder/200/150",
        link: "/google/chrome-personalization"
      },
      
  ],
  "Android Dev": [
    {
      category: "DEVELOPMENT",
      title: "Kotlin coroutines: A deep dive for Android developers",
      image: "/images/post-tech-06.jpg",
      link: "/development/kotlin-coroutines"
    },
    {
      category: "TOOLS",
      title: "Android Studio Arctic Fox: What's new for developers",
      image: "/api/placeholder/200/150",
      link: "/tools/android-studio"
    },
    {
      category: "FRAMEWORKS",
      title: "Jetpack Compose: UI toolkit for native Android development",
      image: "/api/placeholder/200/150",
      link: "/frameworks/jetpack-compose"
    },
    {
      category: "SECURITY",
      title: "Best practices for Android app security in 2025",
      image: "/api/placeholder/200/150",
      link: "/security/android-best-practices"
    },
    {
      category: "GAMING",
      title: "PlayStation 6: Rumors, specs, and release date",
      image: "/api/placeholder/200/150",
      link: "/gaming/playstation-6"
    },
  ],
  "Blockchain": [
    {
      category: "CRYPTOCURRENCY",
      title: "Ethereum 3.0: The future of decentralized finance",
      image: "/images/post-tech-06.jpg",
      link: "/cryptocurrency/ethereum-3"
    },
    {
      category: "TECHNOLOGY",
      title: "Understanding zero-knowledge proofs in blockchain",
      image: "/api/placeholder/200/150",
      link: "/technology/zero-knowledge-proofs"
    },
    {
      category: "BUSINESS",
      title: "How NFTs are transforming digital ownership",
      image: "/api/placeholder/200/150",
      link: "/business/nft-ownership"
    },
    {
      category: "REGULATION",
      title: "Global regulatory frameworks for cryptocurrency in 2025",
      image: "/api/placeholder/200/150",
      link: "/regulation/crypto-frameworks"
    },
    {
        category: "GAMING",
        title: "PlayStation 6: Rumors, specs, and release date",
        image: "/api/placeholder/200/150",
        link: "/gaming/playstation-6"
      },
  ],
  "Gadgets": [
    {
      category: "WEARABLES",
      title: "The new Apple Watch Ultra review: Worth the upgrade?",
      image: "/images/post-tech-06.jpg",
      link: "/wearables/apple-watch-ultra"
    },
    {
      category: "SMART HOME",
      title: "Google Nest ecosystem 2025: Everything you need to know",
      image: "/api/placeholder/200/150",
      link: "/smart-home/google-nest"
    },
    {
      category: "AUDIO",
      title: "Sony's new noise-cancelling earbuds set new industry standard",
      image: "/api/placeholder/200/150",
      link: "/audio/sony-earbuds"
    },
    {
      category: "GAMING",
      title: "PlayStation 6: Rumors, specs, and release date",
      image: "/api/placeholder/200/150",
      link: "/gaming/playstation-6"
    },
    {
        category: "GAMING",
        title: "PlayStation 6: Rumors, specs, and release date",
        image: "/api/placeholder/200/150",
        link: "/gaming/playstation-6"
      },
  ]
};

export default function TopStories() {
  const [activeTab, setActiveTab] = useState("Accessibility");
  const tabs = ["Accessibility", "Android Dev", "Blockchain", "Gadgets"];
  
  // Get current tab data
  const currentTabData = tabsData[activeTab];
  const featuredArticle = currentTabData[0]; // Using first article as featured
  const remainingArticles = currentTabData.slice(1);
  
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Tech News Portal</title>
        <meta name="description" content="Latest tech news and stories" />
        
      </Head>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Top Stories</h1>
          <Link href="/all-stories" className="text-blue-600 hover:underline">
            See All
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded border transition-all ${
                activeTab === tab
                  ? 'border-white bg-white shadow-sm text-black'
                  : 'border-red-500 bg-black hover:border-gray-400 text-white '
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Column - List of Articles */}
          <div className="lg:col-span-2 space-y-6">
            {remainingArticles.map((article, index) => (
              <div key={index} className="border-b pb-6 last:border-b-0">
                <Link 
                  href={article.link}
                  className="group block"
                >
                  <div className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                      <div className="w-full h-full relative group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-red-500">{article.category}</span>
                      <h3 className="font-bold mt-1 group-hover:underline decoration-2 underline-offset-2">
                        <span className="bg-left-bottom bg-gradient-to-r  from-transparent to-current bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300">
                          {article.title}
                        </span>
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Right Column - Featured Article */}
          <div className="lg:col-span-3">
            <Link
              href={featuredArticle.link}
              className="group block h-full"
            >
              <div className="w-full h-60 md:h-[550px] relative rounded overflow-hidden">
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <span className="text-sm font-semibold text-white">{featuredArticle.category}</span>
                  <h2 className="text-2xl font-bold text-white mt-2">
                    <span className="bg-left-bottom bg-gradient-to-r from-transparent to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300">
                      {featuredArticle.title}
                    </span>
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}