    import React from 'react';
    import { Montserrat } from 'next/font/google';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
        
        const monsterfont = Montserrat({
          subsets: ['latin'],
          weight: '400',
          fallback: ['sans-serif'],
        });
        const monsterfont1 = Montserrat({
            subsets: ['latin'],
            weight: '700',
            fallback: ['sans-serif'],
          });
    

    const Deliverables = () => {
    return (
        <div className="min-h-screen bg-black text-semi-white p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-16">
            <h1 className={`text-[64px] leading-[68px] text-white ${monsterfont.className} `}>Deliverables</h1>
            <h2 className={`text-[64px] leading-[68px] text-white ${monsterfont1.className} `}>To Clients</h2>
            </div>

            {/* Content Box with dark green background */}
            <div className="bg-[#030c0d] rounded-xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden">
            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 relative">
                {/* Left Column (8/12 = 2/3) */}
                <div className="col-span-1 md:col-span-8 space-y-8 md:space-y-12">
                {/* On-Page Local SEO Section */}
                <div>
                    <h3 className={`text-[25px] leading-[1.1] font-helveticaneue text-semi-white mt-[20px] mb-[10px] `}>On-Page Local SEO</h3>
                    <ul className="space-y-3 md:space-y-4 ml-[30px]">
                    {/* Same list items as before */}
                    <li className="flex items-start gap-2 gap-2">
                    <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px] font-bold" />

                        <span className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white   `}>Local keyword research</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Titles and meta descriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Address added to current website page(s) (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px] " />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Quarterly SEO copy or GMB posts with locally-optimized terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Card microformat/schema HTML tags addition to address on website</span>
                    </li>

                    
                    </ul>
                </div>

                {/* Citation Management Section */}
                <div>
                    <h3 className={`text-[25px] leading-[1.1] font-helveticaneue text-semi-white mt-[20px] mb-[10px] `}>Citation Management</h3>
                    <ul className="space-y-3 md:space-y-4 ml-[30px]">
                    {/* Same list items as before */}
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Google Business Profile setup/optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Google Business Profile address matching</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Facebook business page review</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Facebook check-ins/verification of location</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Glassdoor verification/setup of location</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>CitySearch local optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Reporting on citations built per location</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Citation management on Bing</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Citation management on Apple Maps</span>
                    </li>

                    </ul>
                </div>
                </div>

                {/* Vertical Line - Hidden on mobile, shown on md and up */}

                <div className="hidden md:block absolute top-0 left-[71%] w-px h-2/3 bg-white mt-16"></div>

                {/* Right Column (4/12 = 1/3) */}
                <div className="col-span-1 md:col-span-4">
                {/* Add a horizontal line for mobile only */}
                
                <div>
                    <h3 className={`text-[25px] leading-[1.1] font-helveticaneue text-semi-white mt-[20px] mb-[10px] `}>Custom Reporting</h3>
                    <ul className="space-y-3 md:space-y-4 ml-[30px]">
                    {/* Same list items as before but with flex-shrink-0 added to icons */}
                    <li className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Monthly reporting calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Monthly local SEO reports:</span>
                    </li>
                    <li className="flex items-start gap-2   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Profile views</span>
                    </li>
                    <li className="flex items-start gap-2   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Website visits from local profiles</span>
                    </li>
                    <li className="flex items-start gap-2   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Phone calls</span>
                    </li>
                    <li className="flex items-start gap-2   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Direction requests</span>
                    </li>
                    <li className="flex items-start gap-2   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Monthly reporting of local rankings</span>
                    </li>
                    <li className="flex items-start gap-2   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Rising and declining keywords</span>
                    </li>
                    <li className="flex items-start gap-2   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Google local rankings</span>
                    </li>
                    <li className="flex items-start gap-2   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Google organic rankings</span>
                    </li>
                    <li className="flex items-start gap-2   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Bing/Yahoo search rankings</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="text-gray-400 mb-[10px]" />
                        <span  className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white  `}>Wrap-up report with data for all locations</span>
                    </li>

                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Deliverables;