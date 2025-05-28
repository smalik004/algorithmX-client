'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  faPaperPlane, faTint, faGift, faUniversity, faCameraRetro, 
  faSnowflake, faLightbulb, faCab, faGlobe, faShop, faGraduationCap, faAd
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, 
  faTiktok, faSnapchat, faAmazon 
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResponsiveNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  
  // Navigation items with their dropdown subitems
  const navItems = [
    {
      name: 'Company',
      href: '/company',
      subItems: []
    },
    {
      name: 'Creative Assets',
      href: '#',
      subItems: [
        { category: 'Branding', href: '/branding' },
        { category: 'Graphics', href: '/graphics' },
        { category: 'Video', href: '/video' },
        { category: 'Content Creation', href: '/contentcreation' },
      ]
    },
    {
      name: '</Code>',
      href: '#',
      subItems: [
        {
          category: 'App/Mobile',
          icon: '',
          items: [
            { name: 'Android Development', href: '/android-app', icon: faPaperPlane },
            { name: 'iPhone/iPad Development', href: '/iphone-app', icon: faTint },
            { name: 'Xamarin Development', href: '/xamarin', icon: faGift },
            { name: 'Flutter Development', href: '/flutter', icon: faUniversity },
            { name: 'React Native Development', href: '/react-native', icon: faCameraRetro }
          ]
        },
        {
          category: 'Web',
          icon: '',
          items: [
            { name: 'Front-End Designing-HTML/CSS/Bootstrap/More', href: '/front-end', icon: faPaperPlane },
            { name: 'Back-End Developmen-Python/.NET/More', href: '/back-end', icon: faTint}
          ]
        },
        {
          category: 'CMS Development',
          icon: '',
          items: [
            { name: 'Shopify', href: '/shopify', icon: faPaperPlane },
            { name: 'Magento', href: '/magento', icon: faTint },
            { name: 'Wordpress', href: '/wordpress', icon: faGift },
            { name: 'HubSpot', href: '/hubspot', icon: faUniversity},
            { name: 'Big Commerce', href: '/bigcommerce', icon: faCameraRetro },
            { name: 'Drupal', href: '/drupal', icon: faSnowflake }
          ]
        },
        { category: 'CRM', href: '/crm' },
        { category: 'ERP', href: '/erp' },
        { category: 'Blockchain', href: '/blockchain' },
        { category: 'Software', href: '/software' },
      ]
    },
    {
      name: 'Leads & Revenue',
      href: '#',
      subItems: [
        {
          category: 'SEO',
          icon: '',
          items: [
            { name: 'SEO Audits', href: '/seoaudits', icon: faPaperPlane },
            { name: 'Local SEO', href: '/local-seo', icon: faSnowflake },
            { name: 'Ecommerce SEO', href: '/ecommerce-seo', icon: faTint },
            { name: 'SEO Consulting', href: '/seo-consulting', icon: faCameraRetro },
            { name: ' Link Building', href: '/link-building', icon: faUniversity },
            { name: 'Technical SEO Audit', href: '/technical-seo-audit', icon: faLightbulb },
            { name: 'National SEO', href: '/national-seo', icon: faCab },
            { name: 'Mobile SEO', href: '/mobile-seo', icon: faSnowflake },
            { name: 'Global/International SEO', href: '/global-seo', icon: faGlobe },
            { name: 'Enterprise SEO', href: '/enterprise-seo', icon: faShop },
            { name: 'Amazon SEO', href: '/amazon-seo', icon: faAmazon },
            { name: 'Penalization Recovery', href: '/penalization-recovery', icon: faUniversity },
          ]
        },
        {
          category: 'Social Media',
          icon: '',
          items: [
            { name: 'Social Media Audit', href: '/social-media-audit', icon: faTint },
            { name: 'Facebook Management', href: '/facebook-management', icon: faFacebook},
            { name: 'Instagram Management', href: '/instagram-management', icon: faInstagram},
            { name: 'Linkedin Management', href: '/linkedin-management', icon: faLinkedin},
            { name: 'Twitter Management', href: '/twitter-management', icon: faTwitter},
            { name: 'Youtube Management', href: '/youtube-management', icon: faYoutube},
            { name: 'Tiktok Management', href: '/tiktok-management', icon: faTiktok},
            { name: 'Social Media Consulting', href: '/social-media-consulting', icon: faGraduationCap},
          ]
        },
        {
          category: 'PPC Advertising',
          icon: '',
          items: [
            { name: 'Google Ads', href: '/google-ads', icon: faTint },
            { name: 'Bing Ads', href: '/bing-ads', icon: faPaperPlane},
            { name: 'Ads Audit', href: '/ads-audit', icon: faAd},
            { name: 'Ads Suspension Recovery', href: '/ads-suspension-recovery', icon: faSnowflake},
            { name: 'Facebook Ads', href: '/facebook-ads', icon: faFacebook},
            { name: 'Instagram Ads', href: '/instagram-ads', icon: faInstagram},
            { name: 'Linkedin Ads', href: '/linkedin-ads', icon: faLinkedin},
            { name: 'Landing Page Design', href: '/landing-page-design', icon: faGraduationCap},
            { name: 'X/Twitter Ads', href: '/twitter-ads', icon: faTwitter},
            { name: 'Youtube Ads', href: '/youtube-ads', icon: faYoutube},
            { name: 'Tiktok Ads', href: '/tiktok-ads', icon: faTiktok},
            { name: 'Snapchat Ads', href: '/snapchat-ads', icon: faSnapchat},
            { name: 'Amazon Ads', href: '/amazon-ads', icon: faAmazon},
            { name: 'Display Ads', href: '/display-ads', icon: faPaperPlane},
            { name: 'Remarketing', href: '/remarketing', icon: faSnowflake},
            { name: 'Ecommerce Advertising', href: '/ecommerce-advertising', icon: faUniversity},
          ]
        },
        {
          category: 'Content ',
          icon: '',
          items: [
            { name: 'Creation & Marketing', href: '/creation-and-marketing', icon: faTint },
            { name: 'SEO Copywriting', href: '/seo-copywriting', icon: faSnowflake},
          ]
        },
        { category: 'App Store', href: '/app-store' },
        { category: 'Conversion Rate', href: '/conversion-rate-optimization' },
        { category: 'Public Relations', href: '/public-relations' },
        { category: 'Franchise', href: '/franchise-marketing' },
        { category: 'Influencer', href: '/influencer-marketing' },
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      subItems: []
    },
  ];

  // Social icons
  const socialIcons = [
    { name: 'Connect', icon: 'phone-alt', url: '#' },
    { name: 'Twitter', icon: faTwitter, url: '#' },
    { name: 'Instagram', icon: faInstagram, url: '#' },
    { name: 'Facebook', icon: faFacebook, url: '#' },
    { name: 'LinkedIn', icon: faLinkedin, url: '#' }
  ];

  // Add effect to handle page blur when dropdown is active
  useEffect(() => {
    const pageContent = document.getElementById('page-content');
    if (pageContent && activeDropdown !== null) {
      pageContent.classList.add('blur-sm', 'transition-all', 'duration-300');
    } else if (pageContent) {
      pageContent.classList.remove('blur-sm');
    }
    
    return () => {
      if (pageContent) {
        pageContent.classList.remove('blur-sm');
      }
    };
  }, [activeDropdown]);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveCategory(null);
  };

  const handleCategoryMouseEnter = (idx) => {
    setActiveCategory(idx);
  };

  // Function to render different dropdown types
  const renderDropdown = (item, index) => {
    // If no subitems, don't render dropdown
    if (!item.subItems || item.subItems.length === 0) return null;
    
    // For Code section which has complex submenu structure
    if (item.name === '</Code>' || item.name === 'Leads & Revenue') {
      return (
        <div 
          className={`fixed left-0 right-0 top-full w-full bg-black bg-opacity-80 backdrop-blur-md py-8 px-6 shadow-lg transition-all duration-300 origin-top z-40 ${
            activeDropdown === index ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 invisible'
          }`}
        >
          <div className="container mx-auto flex">
            <div className="w-1/4">
              {item.subItems.map((category, idx) => (
                <div 
                  key={idx} 
                  className="mb-4"
                  onMouseEnter={() => handleCategoryMouseEnter(idx)}
                >
                  <Link href={category.href || '#'} className={`text-xl font-medium transition-colors duration-300 ${activeCategory === idx ? 'text-blue-400' : 'hover:text-blue-400'}`}>
                    {category.category}
                  </Link>
                </div>
              ))}
            </div>
            <div className="w-3/4">
              {activeDropdown === index && activeCategory !== null && item.subItems[activeCategory] && item.subItems[activeCategory].items && (
                <div className="grid grid-cols-3 gap-4">
                  {item.subItems[activeCategory].items.map((subItem, idx) => (
                    <Link href={subItem.href} key={idx} className="flex items-center py-2 hover:text-blue-400 transition-colors duration-300">
                      <span className="mr-4">
                        <FontAwesomeIcon icon={subItem.icon} />
                      </span>
                      <span>{subItem.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    // For simpler dropdown menus
    return (
      <div 
        className={`absolute left-0 top-full mt-1 bg-black bg-opacity-80 backdrop-blur-md rounded shadow-lg w-48 overflow-hidden transition-all duration-300 origin-top z-40 ${
          activeDropdown === index ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 invisible'
        }`}
      >
        <ul className="py-2">
          {item.subItems.map((subItem, subIndex) => (
            <li key={subIndex}>
              <Link 
                href={subItem.href} 
                className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
              >
                {subItem.category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className="relative z-50">
        <nav className="bg-black text-white py-4 px-6 flex items-center justify-between relative">
          {/* Left navigation items */}
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={item.href} className="hover:text-blue-400 transition-colors duration-300">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            {/* Replace with your actual logo */}
            <Link href="/">
              <div className="w-12 h-12 relative">
                <div className="w-12 h-12 bg-transparent flex items-center justify-center">
                  <Image 
                    src="/logo-placeholder.svg" 
                    alt="Company Logo" 
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Right social icons */}
          <div className="flex items-center space-x-4">
            <div className="border border-white rounded-full px-4 py-1 flex items-center">
              <span>Connect</span>
              <span className="ml-2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center">
                <i className="fas fa-phone-alt text-xs"></i>
              </span>
            </div>
            {socialIcons.slice(1).map((icon, index) => (
              <Link 
                key={index} 
                href={icon.url} 
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={icon.icon} className="text-lg" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Render dropdown outside of nav to allow for full-width */}
        {navItems.map((item, index) => (
          <div 
            key={`dropdown-${index}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {renderDropdown(item, index)}
          </div>
        ))}
      </div>
      
      {/* Overlay for the rest of the page when dropdown is active */}
      {activeDropdown !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 pointer-events-none" />
      )}
    </>
  );
};

export default ResponsiveNavbar;