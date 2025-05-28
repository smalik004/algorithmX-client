'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Updated grid items with industry, region, services properties and metrics
const gridItems = [
  { 
    title: "Audible Purchase UX", 
    bgColor: "bg-gradient-to-br from-amber-400 to-orange-500",
    hoverContent: "How small UI delighters have a huge impact on UX",
    timeRead: "5 min",
    logoImage: "/images/mac.webp",
    characterImage: "/images/mac1.webp",
    link: "/case-studies/audible",
    industry: "Entertainment",
    region: "North America",
    services: "UX Design",
    metrics: [
      { label: "22%", description: "Higher Conversion Rate" },
      { label: "4.5", description: "Average Rating on Stores" },
      { label: "30K+", description: "Orders per Day via App" }
    ]
  },
  { 
    title: "Audible Purchase UX", 
    bgColor: "bg-gradient-to-br from-amber-400 to-orange-500",
    hoverContent: "How small UI delighters have a huge impact on UX",
    timeRead: "5 min",
    logoImage: "/images/mac.webp",
    characterImage: "/images/mac1.webp",
    link: "/case-studies/audible",
    industry: "Entertainment",
    region: "North America",
    services: "UX Design",
    metrics: [
      { label: "22%", description: "Higher Conversion Rate" },
      { label: "4.5", description: "Average Rating on Stores" },
      { label: "30K+", description: "Orders per Day via App" }
    ]
  },
  { 
    title: "Audible Purchase UX", 
    bgColor: "bg-gradient-to-br from-amber-400 to-orange-500",
    hoverContent: "How small UI delighters have a huge impact on UX",
    timeRead: "5 min",
    logoImage: "/images/mac.webp",
    characterImage: "/images/mac1.webp",
    link: "/case-studies/audible",
    industry: "Entertainment",
    region: "North America",
    services: "UX Design",
    metrics: [
      { label: "22%", description: "Higher Conversion Rate" },
      { label: "4.5", description: "Average Rating on Stores" },
      { label: "30K+", description: "Orders per Day via App" }
    ]
  },
  { 
    title: "Audible Purchase UX", 
    bgColor: "bg-gradient-to-br from-amber-400 to-orange-500",
    hoverContent: "How small UI delighters have a huge impact on UX",
    timeRead: "5 min",
    logoImage: "/images/mac.webp",
    characterImage: "/images/mac1.webp",
    link: "/case-studies/audible",
    industry: "Entertainment",
    region: "North America",
    services: "UX Design",
    metrics: [
      { label: "22%", description: "Higher Conversion Rate" },
      { label: "4.5", description: "Average Rating on Stores" },
      { label: "30K+", description: "Orders per Day via App" }
    ]
  },
  { 
    title: "Audible Purchase UX", 
    bgColor: "bg-gradient-to-br from-amber-400 to-orange-500",
    hoverContent: "How small UI delighters have a huge impact on UX",
    timeRead: "5 min",
    logoImage: "/images/mac.webp",
    characterImage: "/images/mac1.webp",
    link: "/case-studies/audible",
    industry: "Entertainment",
    region: "North America",
    services: "UX Design",
    metrics: [
      { label: "22%", description: "Higher Conversion Rate" },
      { label: "4.5", description: "Average Rating on Stores" },
      { label: "30K+", description: "Orders per Day via App" }
    ]
  },
  { 
    title: "Audible Purchase UX", 
    bgColor: "bg-gradient-to-br from-amber-400 to-orange-500",
    hoverContent: "How small UI delighters have a huge impact on UX",
    timeRead: "5 min",
    logoImage: "/images/mac.webp",
    characterImage: "/images/mac1.webp",
    link: "/case-studies/audible",
    industry: "Entertainment",
    region: "North America",
    services: "UX Design",
    metrics: [
      { label: "22%", description: "Higher Conversion Rate" },
      { label: "4.5", description: "Average Rating on Stores" },
      { label: "30K+", description: "Orders per Day via App" }
    ]
  },
  { 
    title: "Audible Purchase UX", 
    bgColor: "bg-gradient-to-br from-amber-400 to-orange-500",
    hoverContent: "How small UI delighters have a huge impact on UX",
    timeRead: "5 min",
    logoImage: "/images/mac.webp",
    characterImage: "/images/mac1.webp",
    link: "/case-studies/audible",
    industry: "Entertainment",
    region: "North America",
    services: "UX Design",
    metrics: [
      { label: "22%", description: "Higher Conversion Rate" },
      { label: "4.5", description: "Average Rating on Stores" },
      { label: "30K+", description: "Orders per Day via App" }
    ]
  },
  
  
];
// Extract unique values for dropdown filters
const getUniqueValues = (array, key) => {
  return [...new Set(array.map(item => item[key]))];
};

const PortfolioGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [filters, setFilters] = useState({
    industry: "Show All",
    services: "Show All",
    region: "Show All"
  });
  const [filteredItems, setFilteredItems] = useState(gridItems);
  
  // Get unique values for each filter
  const industries = ["Show All", ...getUniqueValues(gridItems, "industry")];
  const services = ["Show All", ...getUniqueValues(gridItems, "services")];
  const regions = ["Show All", ...getUniqueValues(gridItems, "region")];
  
  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };
  
  // Apply filters whenever they change
  useEffect(() => {
    let result = gridItems;
    
    if(filters.industry !== "Show All") {
      result = result.filter(item => item.industry === filters.industry);
    }
    
    if(filters.services !== "Show All") {
      result = result.filter(item => item.services === filters.services);
    }
    
    if(filters.region !== "Show All") {
      result = result.filter(item => item.region === filters.region);
    }
    
    setFilteredItems(result);
  }, [filters]);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setMousePosition({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setMousePosition({ x: 0, y: 0 });
  };

  // Custom Dropdown Component
  const Dropdown = ({ options, value, onChange, label }) => {
    return (
      <div className="relative w-[240px] md:w-full">
        <select 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full bg-black text-white border border-semi-white rounded-lg px-4 py-2 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="container mx-auto max-w-[1200px]">
        {/* Filter Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Dropdown 
            options={industries} 
            value={filters.industry} 
            onChange={(value) => handleFilterChange("industry", value)} 
            label="Industry"
          />
          <Dropdown 
            options={services} 
            value={filters.services} 
            onChange={(value) => handleFilterChange("services", value)} 
            label="Services"
          />
          <Dropdown 
            options={regions} 
            value={filters.region} 
            onChange={(value) => handleFilterChange("region", value)} 
            label="Region"
          />
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.link} 
              className="block"
            >
              <div
                className={`relative transition-all duration-200 ease-out ${
                  hoveredIndex === index ? 'z-10' : 'z-0'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  height: '144px',
                  transform: hoveredIndex === index 
                    ? `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) scale(1.03)` 
                    : 'none',
                  transformStyle: 'preserve-3d',
                  cursor: 'pointer'
                }}
              >
                <div 
                  className={`absolute inset-0 rounded-xl text-white ${item.bgColor} shadow-lg transition-all duration-150 ease-out ${
                    hoveredIndex === index ? 'shadow-2xl border-[2px] border-white' : ''
                  }`}
                  style={{
                    height: hoveredIndex === index ? '400px' : '144px',
                    padding: hoveredIndex === index ? '16px' : '12px',
                    top: hoveredIndex === index ? '-70px' : '0',
                    transitionProperty: 'all',
                    transitionDuration: hoveredIndex === index ? '120ms' : '300ms',
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  {/* Default State Content */}
                  <div className={`h-full flex flex-col items-center justify-center text-center transition-all duration-200 ${
                    hoveredIndex === index ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}>
                    {/* Logo Image */}
                    <div className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3">
                      <img src={item.logoImage} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xs md:text-sm lg:text-base font-medium px-2 md:px-4">{item.title}</h3>
                  </div>

                  {/* Hover State - Full Content */}
                  <div className={`absolute inset-0 p-3 md:p-6 flex flex-col items-center transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    {/* Same Logo Image at the top with animation */}
                    <div className="w-10 h-10 md:w-12 md:h-12 mt-1 md:mt-0 mb-2 md:mb-4">
                      <img 
                        src={item.logoImage} 
                        alt={item.title} 
                        className="w-full h-full object-contain transition-all duration-300 ease-out" 
                        style={{
                          transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(5px)',
                          opacity: hoveredIndex === index ? '1' : '0.8'
                        }}
                      />
                    </div>
                    
                    {/* Character Image with pop-up animation */}
                    <div className="w-20 h-20 md:w-28 md:h-28 mb-3 md:mb-6 flex items-center justify-center relative">
                      {/* White glow behind image */}
                      {hoveredIndex === index && (
                        <div className="absolute inset-0 rounded-full bg-white blur-md opacity-80 scale-110 z-0"></div>
                      )}
                      <img 
                        src={item.characterImage} 
                        alt="Character" 
                        className="w-full h-full object-contain transition-all duration-300 ease-out relative z-10" 
                        style={{
                          transform: hoveredIndex === index ? 'scale(1)' : 'scale(0.5)',
                          opacity: hoveredIndex === index ? '1' : '0',
                          transitionDelay: '20ms'
                        }}
                      />
                    </div>

                    {/* Industry, Region, Services info */}
                    <div className="flex flex-col items-center gap-[1px]">
                      <p 
                        className="text-xs md:text-xs font-bold mb-1 opacity-80 transition-all duration-300 ease-out text-black " 
                        style={{
                          transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)',
                          opacity: hoveredIndex === index ? '0.8' : '0',
                          transitionDelay: '100ms'
                        }}
                      >
                        {item.industry}
                      </p>
                      <p 
                        className="text-xs md:text-xs font-bold text-black mb-1 opacity-80 transition-all duration-300 ease-out" 
                        style={{
                          transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)',
                          opacity: hoveredIndex === index ? '0.8' : '0',
                          transitionDelay: '150ms'
                        }}
                      >
                        {item.region}
                      </p>
                      <p 
                        className="text-xs md:text-xs font-bold mb-1 opacity-80 transition-all duration-300 ease-out text-black" 
                        style={{
                          transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)',
                          opacity: hoveredIndex === index ? '0.8' : '0',
                          transitionDelay: '200ms'
                        }}
                      >
                        {item.services}
                      </p>
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className="text-xs md:text-sm lg:text-base font-semibold text-center mb-2 md:mb-3 px-2 md:px-4 leading-tight transition-all duration-50 ease-out"
                      style={{
                        transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)',
                        opacity: hoveredIndex === index ? '0.8' : '0',
                        transitionDelay: '50ms'
                      }}
                    >
                      {item.hoverContent}
                    </h3>
                    
                    {/* Metrics Row - NEW ADDITION */}
                    {item.metrics && (
                      <div 
                        className="w-full flex items-center justify-center mb-2 space-x-2 md:space-x-3 transition-all duration-300 ease-out"
                        style={{
                          transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)',
                          opacity: hoveredIndex === index ? '1' : '0',
                          transitionDelay: '250ms'
                        }}
                      >
                        {item.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex flex-col items-start">
                            <p className="text-xs font-bold">{metric.label}</p>
                            <p className="text-[8px] md:text-[9px] ">{metric.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Time */}
                    <div 
                      className="flex items-center text-xs md:text-sm opacity-70 transition-all duration-300 ease-out"
                      style={{
                        transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)',
                        opacity: hoveredIndex === index ? '0.7' : '0',
                        transitionDelay: '300ms'
                      }}
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path d="M12 6v6l4 2" strokeWidth="2" />
                      </svg>
                      {item.timeRead}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;