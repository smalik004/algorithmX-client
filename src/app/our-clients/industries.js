// pages/index.js
'use client'
import { useState } from 'react';
import Head from 'next/head';

// Import components
import FilterTabs from './FilterTabs';
import D1CaseStudyCard from './CaseStudyCard1';
import D3CaseStudyCard from './CaseStudyCard2';
import D4CaseStudyCard from './CaseStudyCard3';
import CTABanner from './CtaBanner';
// Import data
import { caseStudies } from './CaseStudyData';

export default function Industries() {
  const [activeFilter, setActiveFilter] = useState({ type: 'Industries', value: 'Show All' });
  const [visibleCount, setVisibleCount] = useState({ showAll: 9, filtered: 4 });
  
  const filteredCaseStudies = activeFilter.value === 'Show All' 
    ? caseStudies 
    : caseStudies.filter(study => {
        switch(activeFilter.type) {
          case 'Industries':
            return study.industry === activeFilter.value;
          case 'Services':
            return study.service === activeFilter.value;
          case 'Regions':
            return study.region === activeFilter.value;
          default:
            return true;
        }
      });

  const displayedCaseStudies = filteredCaseStudies.slice(
    0, 
    activeFilter.value === 'Show All' ? visibleCount.showAll : visibleCount.filtered
  );

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const loadMore = () => {
    if (activeFilter.value === 'Show All') {
      setVisibleCount({...visibleCount, showAll: visibleCount.showAll + 6});
    } else {
      setVisibleCount({...visibleCount, filtered: visibleCount.filtered + 4});
    }
  };

  // Determine if there are more case studies to load
  const hasMoreToLoad = activeFilter.value === 'Show All' 
    ? visibleCount.showAll < filteredCaseStudies.length
    : visibleCount.filtered < filteredCaseStudies.length;

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Case Studies</title>
        <meta name="description" content="Case studies showcase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto px-4 py-8" >

        {/* Filter Tabs */}
        <div className='max-w-[1300px] mx-auto'>
        <FilterTabs onFilterChange={handleFilterChange} activeFilter={activeFilter} />
        </div>

        {/* Case Studies Display */}
        {activeFilter.value === 'Show All' ? (
          <>
          <div className='max-w-[1300px] mx-auto'>
            {/* Top 3 case studies with video on left, content on right */}
            <div className="mb-16">
              {displayedCaseStudies.slice(0, 3).map((study, index) => (
                <D1CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
            </div>
            {/* First CTA Banner after top 3 */}
            <CTABanner />

            <div className='max-w-[1300px] mx-auto'>
            {/* 2-column grid layout (first 3 rows = 6 items) */}
            {displayedCaseStudies.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mt-12">
                {displayedCaseStudies.slice(3, 9).map((study) => (
                  <D3CaseStudyCard key={study.id} study={study} />
                ))}
              </div>
            )}
            </div>


            {/* CTA Banner after 6 grid items (9 total case studies) */}
            {displayedCaseStudies.length >= 9 && (
              <div className="mt-12">
                <CTABanner position="before-load-more" />
              </div>
            )}
            
            <div className='max-w-[1300px] mx-auto'>
            {/* Additional case studies after load more (beyond the first 9) */}
            {displayedCaseStudies.length > 9 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mt-12">
                {displayedCaseStudies.slice(9).map((study) => (
                  <D3CaseStudyCard key={study.id} study={study} />
                ))}
              </div>
            )}
            </div>

            {/* Load More Button - only show if there are more case studies to load */}
            {hasMoreToLoad && (
              <div className="text-center mt-8 mb-16">
                <button 
  onClick={loadMore}
  className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group hover:bg-white hover:text-black"
>
  <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform translate-x-full bg-white group-hover:-translate-x-0"></span>
  <span className="relative z-10">Load More</span>
</button>

              </div>
            )}
          </>
        ) : (
          <>
            <div className='max-w-[1300px] mx-auto'>
            {/* First 4 case studies for filtered view */}
            <div className="mb-16">
              {filteredCaseStudies.slice(0, 4).map((study) => (
                <D4CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
            </div>
            {/* Different CTA Banners based on filter type after first 4 case studies */}
            {filteredCaseStudies.length > 0 && (
              activeFilter.type === 'Industries' ? <CTABanner type="industries" /> : 
              activeFilter.type === 'Regions' ? <CTABanner type="regions" /> : 
              <CTABanner />
            )}
            
            <div className='max-w-[1300px] mx-auto'>
            {/* Additional case studies beyond the first 4 (after "Load More") */}
            {displayedCaseStudies.length > 4 && (
              <div className="mt-12 mb-16">
                {displayedCaseStudies.slice(4).map((study) => (
                  <D4CaseStudyCard key={study.id} study={study} />
                ))}
              </div>
            )}
            </div>
            {/* Load More Button - only show if there are more case studies to load */}
            {hasMoreToLoad && (
              <div className="text-center mt-8 mb-16">
                <button 
  onClick={loadMore}
  className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group hover:bg-white hover:text-black"
>
  <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform translate-x-full bg-white group-hover:-translate-x-0"></span>
  <span className="relative z-10">Load More</span>
</button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}