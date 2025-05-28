    import React from 'react';
    import styles  from './style.module.css'
    import { Montserrat } from 'next/font/google';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
    
    
    const monsterfont = Montserrat({
      subsets: ['latin'],
      weight: '200',
      fallback: ["sans-serif"],
    });
    const monsterfont1 = Montserrat({
        subsets: ['latin'],
        weight: '700',
        fallback: ["sans-serif"],
      });
      const monsterfont2 = Montserrat({
        subsets: ['latin'],
        weight: '300',
        fallback: ["sans-serif"],
      });

      const monsterfont4 = Montserrat({
        subsets: ['latin'],
        weight: '100',
        fallback: ["sans-serif"],
      });


    const SEOChecklist = () => {
    const checklistItems = [
        {
        items: [
            '301 redirects',
            'Code to text ratio',
            'Google Webmaster tools parameter exclusions',
            'HTTP status codes – home page',
            'Internal link structure',
            'Robots.txt configuration',
            'Site load time – average',
            'Sitemap.xml index rate',
            'Analytics program configuration',
            'Information architecture',
            'Spam/malware',
            'Website conversion'
        ]
        },
        {
        items: [
            'Broken links',
            'Crawl errors – complete list',
            'Google Webmaster tools preferred domain',
            'HTTP status codes – sitewide',
            'Page content',
            'Shared IP addresses',
            'Site load time – home page',
            'Static/dynamic URL configuration',
            'Duplicate content',
            'Link profile',
            'Top keyword rankings',
            'Website wrapper'
        ]
        },
        {
        items: [
            'Canonicalization',
            'Geo-location',
            'HTML/CSS code review',
            'Image optimization',
            'Remote use of js & CSS',
            'Site compression configuration',
            'Sitemap.xml configuration',
            'Title tag optimization',
            'Home page content',
            'Site theme and content',
            'Top keyword traffic',
            'Post audit client implementation review (1 hour)'
        ]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 flex items-center justify-center ">
        <div className="max-w-[1200px] mx-auto p-4">
            {/* Header */}
            <div className="text-center mb-24 relative pt-20 pb-8 w-full">
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-[46px] md:text-[100px] leading-[1.1] ${monsterfont1.className} text-gray-600/20 select-none`}>
            CHECKLIST
          </span>
        </div>

        {/* Main titles */}
        <div className="relative z-10 mt-8">
          <h2 className={`text-[40px] leading-[48px]  ${monsterfont.className}  mt-10`}>
            ANALYSIS
          </h2>
          <h3 className={`text-[40px] leading-[48px]  ${monsterfont.className}  mb-4`}>
          YOUR CURRENT SEO STATUS
          </h3>
        </div>
      </div>

            {/* Profiling Section */}
            <div className={`${styles["profile-box"]} overflow-hidden max-w-7xl mx-auto`}>
            <div className="bg-black p-4 border-b border-teal-800">
                <h3 className={`text-[50px] leading-[52px]  ${monsterfont2.className}  text-center`}>Profiling</h3>
            </div>
            
            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-black">
                {checklistItems.map((column, columnIndex) => (
                <div 
                    key={columnIndex} 
                    className={`p-8 ${
                    columnIndex !== checklistItems.length - 1
                        ? 'border-b md:border-b-0 md:border-r border-teal-800' 
                        : ''
                    }`}
                >
                    <ul className="space-y-7">
                    {column.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2 ">
                        <FontAwesomeIcon icon={faCheck} className="text-white-400 mb-[20px]" />
                        <span className={`text-[16px] leading-[22px]  ${monsterfont2.className} text-white-500 mb-4`}>{item}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default SEOChecklist;