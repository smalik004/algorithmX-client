'use client'
import { useState, useEffect } from 'react';
import { BookOpen, ChevronDown, Book, Tag, Star, Bookmark } from 'lucide-react';

export default function GlossaryHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Categories for the term filtering
  const categories = [
    'All', 
    'Analytics', 
    'Acquisition', 
    'Conversion', 
    'Engagement', 
    'SEO',
    'Social Media'
  ];

  // Featured terms for the spotlight section
  const featuredTerms = [
    { 
      term: 'Customer Acquisition Cost', 
      icon: <Tag className="w-5 h-5 text-red-400" />,
      count: 245
    },
    { 
      term: 'Click-Through Rate', 
      icon: <Star className="w-5 h-5 text-amber-400" />,
      count: 189
    },
    { 
      term: 'Retention Rate', 
      icon: <Bookmark className="w-5 h-5 text-blue-400" />,
      count: 167
    }
  ];

  return (
    <header 
      className={`w-full bg-black text-white transition-all duration-300 ${
        scrolled ? 'py-4 shadow-lg bg-opacity-90 backdrop-blur-md' : 'pt-[70px] md:pt-[100px] pb-16'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Top Row with Logo and Title */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo/Title Area */}
          <div className="flex items-center">
            <BookOpen className="text-red-500 w-10 h-10 md:w-12 md:h-12" />
            <div className="ml-3">
              <h1 className="text-3xl md:text-[50px] font-bold bg-gradient-to-r md:leading-[65px] from-white via-gray-200 to-red-400 bg-clip-text text-transparent">
                Knowledge Base
              </h1>
              {!scrolled && (
                <p className="text-sm md:text-base text-gray-400 mt-2">
                  The definitive guide to marketing terminology
                </p>
              )}
            </div>
          </div>

          {/* Expanded description - Only visible when not scrolled */}
          {!scrolled && (
            <div className="mt-8 mb-6 text-center max-w-3xl mx-auto">
              <p className="text-gray-300 text-lg">
                Explore our comprehensive collection of marketing terms and concepts. 
                From acquisition to engagement, find clear definitions for all your marketing needs.
              </p>
              
              
            </div>
          )}

          {/* Featured Terms Section - Only visible when not scrolled */}
          {!scrolled && (
            <div className="w-full mt-8">
              <h2 className="text-xl font-semibold text-center mb-6 text-white">
                <span className="border-b-2 border-red-500 pb-1">Trending Terms</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {featuredTerms.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700 hover:border-red-500 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-gray-900 rounded-lg mr-3 group-hover:bg-red-900/30 transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-white group-hover:text-red-400 transition-colors">
                          {item.term}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {item.count} related searches
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scroll indicator - Only visible when not scrolled */}
          {!scrolled && (
            <div className="mt-10 flex justify-center items-center">
              <div className="animate-bounce">
                <ChevronDown className="w-6 h-6 text-red-500" />
              </div>
              <span className="ml-2 text-sm text-gray-400">Scroll to explore all terms</span>
            </div>
          )}
        </div>

        {/* Navigation tabs - Only visible when scrolled */}
        {scrolled && (
          <div className="flex justify-center overflow-x-auto hide-scrollbar">
            <div className="flex space-x-1">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-3 py-1 text-sm font-medium whitespace-nowrap transition-all rounded ${
                    activeCategory === category
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Decorative line */}
      <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </header>
  );
}